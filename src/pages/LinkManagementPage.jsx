// TODO: copy not from reference

import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '../components/icons';
import { linkManagementContent, linkManagementVideo } from '../data/content';

function HeroSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Link management</p>
          <h1 className="mt-4 font-display text-4xl text-brand-dark sm:text-5xl">Organize every short link with confidence.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Keep a structured, shareable library of links, review performance and avoid campaign sprawl across channels.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              Get started
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link to="/app/branded-domains" className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand">
              Explore domains
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_30px_70px_-40px_rgba(0,35,66,0.45)]">
          <img src={linkManagementVideo} alt="Link management dashboard" className="h-[430px] w-full rounded-[26px] object-cover" width={720} height={430} loading="eager" />
        </div>
      </div>
    </section>
  );
}

function FeatureList() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why teams use it</p>
          <h2 className="mt-3 font-display text-3xl text-brand-dark sm:text-4xl">Keep your link library clear and scalable</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {linkManagementContent.features.map((feature) => (
            <article key={feature.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <img src={feature.image} alt={feature.title} className="h-52 w-full rounded-[20px] object-cover" width={420} height={220} loading="lazy" />
              <div className="mt-5">
                <div className="mb-3 inline-flex rounded-full bg-brand-tint p-2 text-brand">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-brand-dark px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {linkManagementContent.stats.map((stat) => (
          <div key={stat.label} className="rounded-[24px] border border-slate-700 bg-white/5 p-8 text-center">
            <div className="text-4xl font-black">{stat.value}</div>
            <div className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-200">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-brand-dark sm:text-4xl">Everything you need to run link management smoothly</h2>
        </div>
        <div className="space-y-4">
          {linkManagementContent.faq.map((item, index) => (
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
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Keep your work organized</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">Build a cleaner, safer link library for every campaign.</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark">
            Start managing links
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link to="/" className="inline-flex rounded-full border border-brand bg-white px-6 py-3 text-sm font-semibold text-brand">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function LinkManagementPage() {
  return (
    <main>
      <HeroSection />
      <FeatureList />
      <StatsStrip />
      <Faq />
      <ActionBanner />
    </main>
  );
}
