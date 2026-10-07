import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../api';
import logoNavbar from '../assets/images/logo/logo-navbar.svg';

function LinkPreview() {
  return (
    <div className="mt-12 max-w-md rotate-[-2deg] rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:mt-16">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wide text-white/70">YOUR LINK, MADE SIMPLE</span>
        <span className="rounded-full bg-[#bbf7d0]/15 px-2.5 py-1 text-xs font-semibold text-[#bbf7d0]">Ready to share</span>
      </div>
      <div className="rounded-xl bg-white p-4">
        <p className="text-xs font-medium text-slate-500">Long link</p>
        <p className="mt-1 truncate text-sm text-slate-700">yourwebsite.com/stories/a-better-way-to-share</p>
        <div className="my-3 h-px bg-slate-100" />
        <p className="text-xs font-medium text-slate-500">Short link</p>
        <p className="mt-1 flex items-center gap-2 text-sm font-bold text-[#087f9f]">
          <span className="inline-block h-2 w-2 rounded-full bg-[#0eb9d7]" />
          tinyurl.com/share-more
        </p>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <p className="text-xs text-white/70">One small link. A world of possibilities.</p>
        <div aria-hidden="true" className="flex h-8 items-end gap-1">
          {[12, 20, 15, 28, 23, 32].map((height, index) => (
            <span
              key={index}
              className="w-1.5 rounded-t-sm bg-[#38c9e2]"
              style={{ height: `${height}px`, opacity: 0.45 + index * 0.09 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AuthPage({ mode = 'login' }) {
  const isLogin = mode === 'login';
  const navigate = useNavigate();
  const { user, login, register } = useAuth();
  const [values, setValues] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: '' }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    const passwordBytes = new TextEncoder().encode(values.password).length;

    if (!values.email.trim()) nextErrors.email = 'Enter your email address.';
    if (values.password.length < 8) nextErrors.password = 'Use at least 8 characters.';
    else if (passwordBytes > 72) nextErrors.password = 'Your password must be 72 bytes or fewer.';

    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      return;
    }

    setLoading(true);
    setError('');
    setFieldErrors({});

    try {
      const credentials = { email: values.email.trim(), password: values.password };
      if (isLogin) {
        await login(credentials);
      } else {
        await register(credentials);
      }
      navigate('/');
    } catch (err) {
      setError(err?.message || 'We couldn’t complete your request. Please try again.');
      setFieldErrors(err?.fields || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-2">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#002342_0%,#064e6b_58%,#087f9f_100%)] px-6 py-8 text-white sm:px-10 sm:py-10 lg:flex lg:min-h-screen lg:items-center lg:px-14 xl:px-20">
        <div aria-hidden="true" className="absolute -left-28 -top-32 -z-10 h-80 w-80 rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute -left-16 -top-20 -z-10 h-56 w-56 rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute -bottom-40 -right-28 -z-10 h-96 w-96 rounded-full bg-[#12b8d7]/10 blur-2xl" />

        <div className="mx-auto w-full max-w-xl">
          <Link to="/" aria-label="TinyURL home" className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <img src={logoNavbar} width={162} height={24} alt="TinyURL" className="h-6 w-auto" />
          </Link>

          <div className="mt-10 lg:mt-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#8be7f4]">Your links, going places</p>
            <h1 className="max-w-lg font-display text-3xl leading-tight sm:text-4xl xl:text-[44px]">
              Make every link a little more memorable.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              A simpler way to shorten, share, and keep track of the links that matter to you.
            </p>
            <LinkPreview />
          </div>

          <p className="mt-8 text-xs text-white/55 lg:mt-14">Small links. Big possibilities.</p>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-12 sm:px-10 lg:px-12">
        <div className="w-full max-w-[420px]">
          <div className="mb-9 flex items-center justify-between">
            <Link to="/" className="text-sm font-semibold text-slate-500 transition hover:text-[#087f9f]">
              <span aria-hidden="true">←</span> Back to TinyURL
            </Link>
            <span className="rounded-full bg-[#e8f6f8] px-3 py-1.5 text-xs font-semibold text-[#087f9f]">
              {isLogin ? 'Welcome back' : 'Free account'}
            </span>
          </div>

          <h2 className="font-display text-2xl leading-snug text-[#002342] sm:text-[30px]">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {isLogin
              ? 'Pick up right where you left off with your links.'
              : 'Get started with a better way to share your links.'}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                autoCapitalize="none"
                spellCheck="false"
                required
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#002342] outline-none transition placeholder:text-slate-400 focus:border-[#0980a1] focus:ring-4 focus:ring-[#0980a1]/10 aria-invalid:border-red-500"
              />
              {fieldErrors.email && <p id="email-error" className="mt-2 text-xs font-medium text-red-700">{fieldErrors.email}</p>}
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                  Password
                </label>
                {isLogin && <span className="text-xs text-slate-500">At least 8 characters</span>}
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  minLength={8}
                  value={values.password}
                  onChange={handleChange}
                  aria-invalid={Boolean(fieldErrors.password)}
                  aria-describedby={fieldErrors.password ? 'password-error' : undefined}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-20 text-sm text-[#002342] outline-none transition placeholder:text-slate-400 focus:border-[#0980a1] focus:ring-4 focus:ring-[#0980a1]/10 aria-invalid:border-red-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-3 rounded px-2 text-xs font-semibold text-[#087f9f] hover:text-[#002342] focus-visible:outline-2 focus-visible:outline-[#0980a1]"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {fieldErrors.password && <p id="password-error" className="mt-2 text-xs font-medium text-red-700">{fieldErrors.password}</p>}
              {!isLogin && !fieldErrors.password && (
                <p className="mt-2 text-xs text-slate-500">Use 8 or more characters (up to 72 bytes).</p>
              )}
            </div>

            {error && (
              <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-800">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087f9f] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_-10px_rgba(8,127,159,0.8)] transition hover:bg-[#006d89] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f9f] disabled:cursor-not-allowed disabled:opacity-65"
            >
              {loading ? 'Please wait…' : isLogin ? 'Sign in' : 'Create account'}
              {!loading && <span aria-hidden="true">→</span>}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-600">
            {isLogin ? 'New to TinyURL?' : 'Already have an account?'}{' '}
            <Link to={isLogin ? '/signup' : '/login'} className="font-bold text-[#087f9f] underline-offset-4 hover:underline">
              {isLogin ? 'Create an account' : 'Sign in'}
            </Link>
          </p>
          <p className="mt-10 text-center text-xs leading-5 text-slate-400">
            Secure access to your TinyURL account.
          </p>
        </div>
      </section>
    </main>
  );
}
