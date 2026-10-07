import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '../components/icons';
import { homeFaq, homeFeatures, homePlans, platformHighlights } from '../data/content';

function PageHero({ eyebrow, title, description, action = 'Get started', to = '/signup' }) {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#002342_0%,#064e6b_60%,#087f9f_100%)] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute -right-8 -top-16 -z-10 h-64 w-64 rounded-full border border-white/10" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8be7f4]">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{description}</p>
          <Link to={to} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#002342] transition hover:bg-[#e8f6f8]">
            {action}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${light ? 'text-white' : 'text-brand-dark'}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 ${light ? 'text-white/70' : 'text-slate-600'}`}>{description}</p>}
    </div>
  );
}

function ActionBanner({ eyebrow, title, action, to = '/signup' }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-brand-tint px-6 py-12 text-center text-brand-dark sm:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl sm:text-4xl">{title}</h2>
        <Link to={to} className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark">
          {action}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function PlansPage() {
  return (
    <main>
      <PageHero
        eyebrow="Plans for every kind of link"
        title="Start simple. Grow when you’re ready."
        description="Shorten and share links with TinyURL, then explore the tools that help you build a more recognizable and organized link presence."
        action="Create a free account"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose your starting point"
            title="A plan that fits the way you share"
            description="Compare the available plan options and find the right level for your personal projects, campaigns, or team."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {homePlans.map((plan) => (
              <article key={plan.title} className={`flex flex-col rounded-[28px] border p-6 shadow-sm ${plan.featured ? 'border-brand bg-[#f0fafc] ring-2 ring-brand/15' : 'border-slate-200 bg-white'}`}>
                {plan.featured && <span className="mb-4 self-start rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Popular</span>}
                {!plan.featured && <span className="mb-4 h-6" />}
                <h3 className="text-xl font-bold text-brand-dark">{plan.title}</h3>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">{plan.description}</p>
                <p className="mt-5 font-display text-3xl text-brand-dark">{plan.price}</p>
                <p className="mt-1 text-xs text-slate-500">{plan.price === 'Custom' ? 'Tailored to your team' : 'Plan price'}</p>
                <Link to="/signup" className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${plan.featured ? 'bg-brand text-white hover:bg-brand-dark' : 'border border-slate-200 bg-white text-brand-dark hover:border-brand hover:text-brand'}`}>
                  {plan.price === 'Custom' ? 'Talk to our team' : 'Get started'}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Prices and included features may vary by account and region. Check your account for current plan details.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Make more of your links" title="Tools to take you further" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'Shorten and share', text: 'Turn a long destination into a concise link that fits wherever you share it.', to: '/' },
              { title: 'Build your brand', text: 'Use a branded domain to give campaigns a familiar, consistent link identity.', to: '/app/branded-domains' },
              { title: 'Stay organized', text: 'Keep your growing link library clear and easy to manage.', to: '/app/features/link-management' },
              { title: 'Explore features', text: 'See the tools available for link creation, tracking, and QR codes.', to: '/features' },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">Learn more <ArrowRightIcon className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ActionBanner eyebrow="Ready when you are" title="Start with a free account and find the right tools as you grow." action="Create your account" />
    </main>
  );
}

export function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="TinyURL features"
        title="Everything you need to make links work harder."
        description="Create links that are easier to share, connect them to your brand, and get a clearer view of the campaigns you care about."
        action="Try TinyURL"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="A toolkit for better sharing" title="Small links. Useful tools." description="Explore the core ways TinyURL helps you create, brand, and manage the links you share." />
          <div className="grid gap-6 sm:grid-cols-2">
            {homeFeatures.map((feature) => (
              <article key={feature.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img src={feature.image} alt="" className="h-56 w-full object-cover" width={640} height={360} loading="lazy" />
                <div className="p-6 sm:p-8">
                  <div className="mb-4 inline-flex rounded-full bg-brand-tint p-2 text-brand"><CheckIcon className="h-5 w-5" /></div>
                  <h2 className="text-xl font-bold text-brand-dark">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002342] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Made for real workflows" title="A link platform that moves with you" description="From one shareable URL to an entire campaign library, explore tools designed to work together." light />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platformHighlights.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                <img src={item.image} alt="" className="h-40 w-full object-cover" width={500} height={280} loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            { title: 'Link management', text: 'Keep links easier to find and maintain.', to: '/app/features/link-management' },
            { title: 'Branded domains', text: 'Make short links unmistakably yours.', to: '/app/branded-domains' },
            { title: 'Plans and pricing', text: 'Compare options for your needs.', to: '/plans' },
          ].map((item) => (
            <Link key={item.title} to={item.to} className="rounded-2xl border border-slate-200 p-6 transition hover:border-brand hover:shadow-md">
              <h3 className="font-bold text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand">Explore <ArrowRightIcon className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
      <ActionBanner eyebrow="Ready to get started?" title="Create a better experience, one link at a time." action="Create a free account" />
    </main>
  );
}

export function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="TinyURL resources"
        title="A little guidance for wherever your links take you."
        description="Find practical starting points for shortening links, building your brand, and keeping campaigns organized."
        action="Shorten a link"
        to="/"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Explore and learn" title="Find your next step" description="Jump into a quick guide or explore a product area to learn how it fits your workflow." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { category: 'Getting started', title: 'How to shorten a link', text: 'Paste a destination on the homepage, create a short link, and share it wherever your audience is.', to: '/', link: 'Open the shortener' },
              { category: 'Branding', title: 'Make your links your own', text: 'Learn how branded domains can help create a recognizable, consistent link experience.', to: '/app/branded-domains', link: 'Explore branded domains' },
              { category: 'Organization', title: 'Keep campaigns in order', text: 'See how a clear link library can help you find, review, and manage the URLs you share.', to: '/app/features/link-management', link: 'Explore link management' },
              { category: 'Product guide', title: 'Explore TinyURL features', text: 'Get an overview of the tools available for creating and improving the links you share.', to: '/features', link: 'Browse features' },
              { category: 'Plans', title: 'Find a plan for your needs', text: 'Compare available options and explore the capabilities that can support your next stage.', to: '/plans', link: 'View plans' },
              { category: 'Help', title: 'Common questions', text: 'Browse answers about short links, branded domains, analytics, and getting started.', to: '#faq', link: 'Read FAQs' },
            ].map((item) => (
              <article key={item.title} className="flex flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{item.category}</span>
                <h2 className="mt-3 text-xl font-bold text-brand-dark">{item.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.text}</p>
                <Link to={item.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark">
                  {item.link} <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Quick answers" title="Frequently asked questions" />
          <div className="space-y-3">
            {homeFaq.map((item, index) => (
              <details key={item.q} open={index === 0} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-bold text-brand-dark">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ActionBanner eyebrow="Keep exploring" title="Turn your next long link into a more shareable one." action="Open the shortener" to="/" />
    </main>
  );
}
