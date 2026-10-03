import { Link } from 'react-router-dom';

export default function ComingSoon() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-16 text-center">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-brand-tint px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">
          Coming soon
        </span>
        <h1 className="font-display text-4xl text-brand-dark sm:text-5xl">This page is on the way.</h1>
        <p className="text-lg text-slate-600">
          We are building this section for a future release. You can keep browsing the current product experience.
        </p>
        <Link to="/" className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark">
          Return home
        </Link>
      </div>
    </main>
  );
}
