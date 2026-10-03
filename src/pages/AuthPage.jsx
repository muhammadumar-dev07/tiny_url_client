import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../api';

export default function AuthPage({ mode = 'login' }) {
  const isLogin = mode === 'login';
  const navigate = useNavigate();
  const { user, login, register } = useAuth();
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      if (isLogin) {
        await login({ email: values.email, password: values.password });
      } else {
        await register({
          name: values.name,
          email: values.email,
          password: values.password,
        });
      }

      navigate('/');
    } catch (err) {
      setError(err);
      setFieldErrors(err?.fields || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-40px_rgba(0,35,66,0.45)] sm:p-8">
        <h1 className="font-display text-3xl text-brand-dark">{isLogin ? 'Welcome back' : 'Create your account'}</h1>
        <p className="mt-3 text-sm text-slate-600">
          {isLogin ? 'Log in to manage your short links and branded domains.' : 'Join TinyURL to start shortening and organizing your links.'}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {!isLogin && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand"
              />
              {fieldErrors.name && <p className="mt-2 text-sm text-danger">{fieldErrors.name}</p>}
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand"
            />
            {fieldErrors.email && <p className="mt-2 text-sm text-danger">{fieldErrors.email}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand"
            />
            {fieldErrors.password && <p className="mt-2 text-sm text-danger">{fieldErrors.password}</p>}
          </div>

          {error && <p className="text-sm font-medium text-danger">{error.message}</p>}

          <button type="submit" disabled={loading} className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? 'Please wait...' : isLogin ? 'Log in' : 'Create account'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
          <Link to={isLogin ? '/signup' : '/login'} className="font-semibold text-brand hover:text-brand-dark">
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
        </p>
      </div>
    </main>
  );
}
