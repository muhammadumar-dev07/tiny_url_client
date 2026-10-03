import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-16 text-center">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-brand-tint px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">
          404
        </span>
        <h1 className="font-display text-4xl text-brand-dark sm:text-5xl">Page not found</h1>
        <p className="text-lg text-slate-600">
          The page you requested cannot be found. Head back to the home page to continue exploring.
        </p>
        <Link to="/" className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark">
          Go home
        </Link>
      </div>
    </main>
  );
}
