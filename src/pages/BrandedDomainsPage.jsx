import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '../components/icons';
import { brandedAlternating, brandedFaq, brandedFeatures, domainVideo } from '../data/content';

function FeatureInformation() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Branded domains</p>
          <h2 className="mt-3 font-display text-3xl text-brand-dark sm:text-4xl">Create a stronger digital identity</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {brandedFeatures.map((feature) => (
            <article key={feature.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex rounded-full bg-brand-tint p-3 text-brand">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{feature.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoBanner() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[32px] shadow-[0_30px_70px_-40px_rgba(0,35,66,0.55)]">
          <img src={domainVideo} alt="Branded domain automation" className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[480px]" width={1200} height={620} loading="lazy" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#002342]/45 via-transparent to-[#002342]/10" />
          <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#002342]/80 px-5 py-2.5 text-sm font-bold text-white shadow-lg backdrop-blur-sm sm:left-8 sm:top-8">First year free</div>
        </div>
      </div>
    </section>
  );
}

function TwoColumnCircle({ item }) {
  return (
    <article className="grid overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_20px_55px_-38px_rgba(0,35,66,0.5)] lg:min-h-[420px] lg:grid-cols-2">
      <div className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-full ${item.reverse ? 'lg:order-2' : ''}`}>
        <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" width={720} height={560} loading="lazy" />
      </div>
      <div className={`flex flex-col justify-center px-7 py-9 sm:px-10 sm:py-12 lg:px-14 ${item.reverse ? 'lg:order-1' : ''}`}>
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-lg font-black text-brand">{item.title.slice(0, 1)}</div>
        <h3 className="max-w-lg font-display text-3xl leading-tight text-brand-dark sm:text-4xl">{item.title}</h3>
        <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">{item.text}</p>
      </div>
    </article>
  );
}

function BrandedFaq() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-brand-dark sm:text-4xl">Common domain questions</h2>
        </div>
        <div className="space-y-4">
          {brandedFaq.map((item, index) => (
            <details key={item.q} open={index === 0} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-bold text-brand-dark">{item.q}</summary>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionBanner() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-brand-tint px-6 py-12 text-center text-brand-dark sm:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Take the next step</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">Give every campaign a trustworthy domain.</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark">
            Start now
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link to="/" className="inline-flex rounded-full border border-brand bg-white px-6 py-3 text-sm font-semibold text-brand">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function BrandedDomainsPage() {
  return (
    <main>
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-[#002342] lg:min-h-[80vh]">
        <img src={domainVideo} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" width={1200} height={620} loading="eager" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,25,48,0.92)_0%,rgba(0,35,66,0.78)_50%,rgba(0,35,66,0.38)_100%)] max-[767px]:bg-[linear-gradient(0deg,rgba(0,25,48,0.9)_0%,rgba(0,35,66,0.58)_100%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Custom domains</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">Turn every short link into a branded experience.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Give your audience a link they recognize. Build trust, improve engagement and keep your marketing consistent across every channel.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/signup" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
                Get started
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/app/features/link-management" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand">
                View link management
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeatureInformation />
      <VideoBanner />
      <section className="bg-slate-50 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
          {brandedAlternating.map((item) => (
            <TwoColumnCircle key={item.title} item={item} />
          ))}
        </div>
      </section>
      <BrandedFaq />
      <ActionBanner />
    </main>
  );
}
