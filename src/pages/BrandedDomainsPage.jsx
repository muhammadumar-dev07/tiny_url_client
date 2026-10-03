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
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 p-3 shadow-[0_30px_70px_-40px_rgba(0,35,66,0.45)]">
        <div className="relative">
          <img src={domainVideo} alt="Branded domain automation" className="h-[320px] w-full rounded-[26px] object-cover md:h-[440px]" width={1200} height={620} loading="lazy" />
          <div className="absolute left-6 top-6 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white shadow-lg">First year free</div>
        </div>
      </div>
    </section>
  );
}

function TwoColumnCircle({ item }) {
  return (
    <div className={`grid gap-8 lg:grid-cols-2 ${item.reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
      <div className="flex items-center justify-center">
        <img src={item.image} alt={item.title} className="h-[320px] w-full max-w-md rounded-[32px] object-cover shadow-sm" width={440} height={440} loading="lazy" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-lg font-black text-brand">{item.title.slice(0, 1)}</div>
        <h3 className="text-3xl font-bold text-brand-dark">{item.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">{item.text}</p>
      </div>
    </div>
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
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Custom domains</p>
            <h1 className="mt-4 font-display text-4xl text-brand-dark sm:text-5xl">Turn every short link into a branded experience.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
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
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_30px_70px_-40px_rgba(0,35,66,0.45)]">
            <img src={domainVideo} alt="Custom domain page preview" className="h-[430px] w-full rounded-[26px] object-cover" width={720} height={430} loading="eager" />
          </div>
        </div>
      </section>

      <FeatureInformation />
      <VideoBanner />
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
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
