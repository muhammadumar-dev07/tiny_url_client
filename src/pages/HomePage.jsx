import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { useDomains, useShortenLink } from '../api';
import { ArrowRightIcon } from '../components/icons';
import { marketingVideo } from '../data/content';
import { actionBanner, cardGrid, faq, plans, platform, videoBanner } from '../data/home';

function ShortenerHero() {
  const navigate = useNavigate();
  const { data: domains = [], loading: domainsLoading } = useDomains();
  const { data, loading, error, submit } = useShortenLink();
  const [values, setValues] = useState({ url: '', alias: '', domain: 'tinyurl.com' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [activeTab, setActiveTab] = useState('shorten');
  const [qrLink, setQrLink] = useState('');
  const [generatedQrLink, setGeneratedQrLink] = useState('');
  const [qrError, setQrError] = useState('');

  const defaultDomain = useMemo(
    () => domains.find((domain) => domain.isDefault) || domains[0] || { name: 'tinyurl.com' },
    [domains],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'domain' && value === 'custom') {
      navigate('/signup');
      return;
    }

    setValues((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    const urlValue = values.url.trim();
    const aliasValue = values.alias.trim();

    if (!urlValue) {
      nextErrors.url = 'A URL is required.';
    }
    if (aliasValue && aliasValue.length < 5) {
      nextErrors.alias = 'Alias must be at least 5 characters.';
    }

    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      return;
    }

    try {
      await submit({ url: urlValue, alias: aliasValue, domain: values.domain || defaultDomain.name });
      setValues((current) => ({ ...current, url: '', alias: '' }));
      setFieldErrors({});
    } catch (err) {
      setFieldErrors(err?.fields || {});
    }
  };

  const selectedDomain = values.domain || defaultDomain.name || 'tinyurl.com';
  const tabs = [
    { id: 'shorten', label: 'Shorten a Link' },
    { id: 'qr', label: 'Generate QR Code' },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#002342] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <img
        src={marketingVideo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        width={760}
        height={760}
        loading="eager"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,35,66,0.96)_0%,rgba(0,35,66,0.88)_48%,rgba(13,118,147,0.66)_100%)] max-[767px]:bg-[linear-gradient(180deg,rgba(0,35,66,0.84)_0%,rgba(0,35,66,0.96)_100%)]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-[760px] space-y-8">
          <div className="space-y-5">
            <h1 className="max-w-xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Make every link easier to trust.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/90">
              Create short, branded URLs in seconds and share content with more clarity across your campaigns.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/70 bg-white p-4 shadow-[0_30px_70px_-30px_rgba(0,20,40,0.8)] sm:p-5">
            <div role="tablist" aria-label="Link tools" className="mb-5 flex border-b border-slate-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`shortener-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`shortener-panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`border-b-2 px-4 py-3 text-sm font-semibold transition sm:text-base ${
                    activeTab === tab.id
                      ? 'border-brand text-brand'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'shorten' ? (
              <div id="shortener-panel-shorten" role="tabpanel" aria-labelledby="shortener-tab-shorten">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Long URL</label>
                <input
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                  placeholder="https://example.com/very/long-link"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand focus:bg-white"
                />
                {fieldErrors.url && <p className="mt-2 text-sm text-danger">{fieldErrors.url}</p>}
              </div>

              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <label htmlFor="domain" className="mb-2 block text-sm font-semibold text-slate-700">Domain</label>
                  <select
                    id="domain"
                    name="domain"
                    value={selectedDomain}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand focus:bg-white"
                    disabled={domainsLoading}
                  >
                    {(domains.length ? domains : [{ name: 'tinyurl.com', isDefault: true }]).map((domain) => (
                      <option key={domain.id || domain.name} value={domain.name}>
                        {domain.name}
                      </option>
                    ))}
                    <option value="custom">Add Domain</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Alias</label>
                  <input
                    name="alias"
                    value={values.alias}
                    onChange={handleChange}
                    placeholder="example-link"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand focus:bg-white"
                  />
                  {fieldErrors.alias && <p className="mt-2 text-sm text-danger">{fieldErrors.alias}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <small className="text-sm text-slate-500">Must be at least 5 characters.</small>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? 'Shortening...' : 'Shorten URL'}
                  {!loading && <ArrowRightIcon className="h-4 w-4" />}
                </button>
              </div>
            </div>
              </div>
            ) : (
              <div id="shortener-panel-qr" role="tabpanel" aria-labelledby="shortener-tab-qr">
                <div>
                  <label htmlFor="qr-link" className="mb-2 block text-sm font-semibold text-slate-700">Link</label>
                  <input
                    id="qr-link"
                    name="qrLink"
                    type="text"
                    value={qrLink}
                    onChange={(event) => {
                      setQrLink(event.target.value);
                      setQrError('');
                    }}
                    placeholder="https://example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand focus:bg-white"
                  />
                  {qrError && <p className="mt-2 text-sm text-danger">{qrError}</p>}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (!qrLink.trim()) {
                        setQrError('Enter a link to generate its QR code.');
                        setGeneratedQrLink('');
                        return;
                      }

                      setGeneratedQrLink(qrLink);
                      setQrError('');
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
                  >
                    Generate QR Code
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
                {generatedQrLink && (
                  <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                    <QRCodeSVG
                      value={generatedQrLink}
                      size={220}
                      level="H"
                      includeMargin
                      aria-label={`QR code for ${generatedQrLink}`}
                    />
                    <p className="max-w-full break-all text-sm font-medium text-slate-600">{generatedQrLink}</p>
                  </div>
                )}
              </div>
            )}
          </form>

          {error && <p className="text-sm font-medium text-danger">{error.message}</p>}

          {data && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
              <p className="font-semibold">Short URL</p>
              <a href={data.shortUrl} target="_blank" rel="noreferrer" className="mt-2 block break-all text-lg font-bold underline">
                {data.shortUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const buttonClass = 'inline-flex min-h-[39px] items-center justify-center rounded-[5px] px-[10px] py-[7px] text-center text-[16px] leading-[25px] font-medium';

function PlanBanner() {
  return (
    <section className="my-[80px] bg-[#f8f9fa] text-[#212529]">
      <div className="mx-auto max-w-[1400px] px-[100px] max-[1199px]:px-[40px] max-[575px]:px-[20px]">
        <h2 className="mb-[60px] text-center text-[28px] leading-[40px] font-bold max-[575px]:mb-[36px] max-[575px]:text-[24px]">
          {plans.heading}
        </h2>
        <div className="flex justify-center gap-[80px] max-[1199px]:gap-[40px] max-[991px]:grid max-[991px]:grid-cols-2 max-[991px]:gap-[40px] max-[575px]:grid-cols-1">
          {plans.items.map((item) => (
            <article key={item.title} className="flex basis-0 flex-1 flex-col justify-between max-[991px]:min-w-0">
              <div className="mb-[40px]">
                <h3 className="mb-[20px] text-[20px] leading-[24px] font-bold">{item.title}</h3>
                <p className="text-[16px] leading-[24px] font-medium">{item.text}</p>
              </div>
              <figure className="flex max-h-[180px] max-w-[180px] items-center">
                <img
                  src={item.image}
                  alt=""
                  width={180}
                  height={180}
                  className="h-auto max-h-[180px] w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoBanner() {
  return (
    <section className="bg-[#0d7693] text-white">
      <div className="relative mx-auto flex min-h-[705px] max-w-[1400px] items-center px-[100px] py-[80px] max-[1199px]:px-[40px] max-[991px]:min-h-0 max-[991px]:flex-col max-[991px]:items-stretch max-[991px]:gap-[30px] max-[991px]:px-[24px] max-[991px]:py-[40px] max-[575px]:px-[20px]">
        <img
          src={videoBanner.image}
          alt=""
          width={632}
          height={545}
          className="absolute left-[100px] top-1/2 h-[545px] w-[632px] max-w-full -translate-y-1/2 object-cover max-[1199px]:left-[40px] max-[1199px]:w-[min(632px,50vw)] max-[991px]:relative max-[991px]:left-auto max-[991px]:top-auto max-[991px]:order-first max-[991px]:h-auto max-[991px]:w-full max-[991px]:translate-y-0"
          loading="eager"
        />
        <div className="relative z-10 ml-auto flex w-1/2 flex-col gap-[20px] pl-[100px] max-[1199px]:pl-[80px] max-[991px]:ml-0 max-[991px]:w-full max-[991px]:pl-0">
          <h2 className="text-[32px] leading-[45px] font-bold max-[575px]:text-[26px] max-[575px]:leading-[34px]">{videoBanner.heading}</h2>
          {videoBanner.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[16px] leading-[25px] font-medium">{paragraph}</p>
          ))}
          <div className="mt-[4px] flex flex-wrap gap-[20px] max-[575px]:flex-col">
            <Link to="/coming-soon" className={`${buttonClass} bg-white text-[#212529] max-[575px]:w-full`}>{videoBanner.buttons[0]}</Link>
            <Link to="/coming-soon" className={`${buttonClass} bg-[#002342] text-white max-[575px]:w-full`}>{videoBanner.buttons[1]}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ card, onActivate }) {
  return (
    <article
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className="group flex min-h-[150px] min-w-0 flex-col justify-center rounded-[8px] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#0d7693] max-[991px]:h-full"
    >
      <div className="min-h-[150px] rounded-[8px] bg-white px-[20px] py-[30px] transition-colors duration-200 group-hover:bg-[#e6f2f6] group-focus-visible:bg-[#e6f2f6]">
        <h3 className="mb-[20px] text-[20px] leading-[24px] font-bold">{card.title}</h3>
        <p className="text-[16px] leading-[24px] font-medium">{card.text}</p>
      </div>
    </article>
  );
}

function CardGrid() {
  const [activeFeature, setActiveFeature] = useState(cardGrid.right[0]);

  return (
    <section className="bg-[#f8f9fa] text-[#212529]">
      <div className="mx-auto max-w-[1400px] px-[100px] pt-[80px] pb-[20px] max-[1199px]:px-[40px] max-[576px]:px-[20px]">
        <h2 className="text-center text-[28px] leading-[33.6px] font-bold max-[576px]:text-[24px] max-[576px]:leading-[30px]">
          {cardGrid.heading}
        </h2>
        <p className="my-[20px] text-center text-[16px] leading-[24px] font-medium">{cardGrid.intro}</p>
        <div className="flex justify-center">
          <Link to="/coming-soon" className={`${buttonClass} bg-[#0d7693] text-white`}>{cardGrid.button}</Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-[100px] pb-[80px] max-[1199px]:px-[40px] max-[576px]:px-[20px] max-[576px]:pb-[40px]">
        <div className="grid h-[828px] grid-cols-[1fr_2fr_1fr] gap-[50px] max-[1199px]:gap-[30px] max-[991px]:h-auto max-[991px]:grid-cols-2 max-[991px]:gap-[20px] max-[576px]:grid-cols-1">
          <div className="flex min-w-0 flex-col gap-[30px] max-[991px]:contents">
            {cardGrid.left.map((card) => (
              <FeatureCard
                key={card.title}
                card={card}
                onActivate={() => setActiveFeature(card)}
              />
            ))}
          </div>
          <div className="flex min-w-0 items-center justify-center max-[991px]:order-first max-[991px]:col-span-full">
            <img
              key={activeFeature.title}
              src={activeFeature.image}
              alt={activeFeature.title}
              width={482}
              height={548}
              className="h-[548px] w-full max-w-[500px] object-contain max-[991px]:h-auto max-[991px]:aspect-[482/548]"
              loading="lazy"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-[30px] max-[991px]:contents">
            {cardGrid.right.map((card) => (
              <FeatureCard
                key={card.title}
                card={card}
                onActivate={() => setActiveFeature(card)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformHighlights() {
  return (
    <section className="bg-[#002342] text-white">
      <div className="relative mx-auto flex min-h-[680px] max-w-[1400px] items-center px-[100px] py-[80px] max-[1199px]:px-[40px] max-[991px]:min-h-0 max-[991px]:flex-col max-[991px]:items-stretch max-[991px]:gap-[30px] max-[991px]:px-[24px] max-[991px]:py-[40px] max-[575px]:px-[20px]">
        <div className="relative z-10 flex w-1/2 flex-col pr-[100px] max-[1199px]:pr-[80px] max-[991px]:w-full max-[991px]:pr-0">
          <h2 className="text-[32px] leading-[38.4px] font-bold max-[575px]:text-[26px] max-[575px]:leading-[34px]">{platform.heading}</h2>
          <p className="mt-[20px] text-[16px] leading-[25px] font-medium">{platform.text}</p>
          <div className="mt-[30px]">
            {platform.stats.map((stat, index) => (
              <div key={stat.value} className={`mb-[30px] grid grid-cols-2 gap-[20px] max-[575px]:grid-cols-1 ${index === platform.stats.length - 1 ? 'mb-0' : ''}`}>
                <h3 className="break-words text-[28px] leading-[33.6px] font-bold">{stat.value}</h3>
                <p className="text-[16px] leading-[25px] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={platform.image}
          alt=""
          width={632}
          height={520}
          className="absolute right-[100px] top-1/2 h-[520px] w-[632px] max-w-full -translate-y-1/2 object-cover max-[1199px]:right-[40px] max-[1199px]:w-[min(632px,50vw)] max-[991px]:relative max-[991px]:right-auto max-[991px]:top-auto max-[991px]:order-first max-[991px]:h-auto max-[991px]:w-full max-[991px]:translate-y-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function ChevronIcon({ expanded }) {
  return (
    <svg
      viewBox="0 0 12 8"
      aria-hidden="true"
      className={`h-2 w-3 shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
      fill="none"
    >
      <path d="m1 1 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FaqAccordion() {
  const [openItem, setOpenItem] = useState(null);
  const [panelHeights, setPanelHeights] = useState({});

  return (
    <section className="bg-[#f8f9fa] pt-[80px] text-[#212529]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_5fr] gap-[100px] px-[100px] pb-[80px] max-[1199px]:gap-[40px] max-[1199px]:px-[40px] max-[991px]:grid-cols-1 max-[991px]:gap-[24px] max-[575px]:px-[20px] max-[575px]:pb-[40px]">
        <h2 className="max-w-[180px] text-[28px] leading-[33.6px] font-bold max-[575px]:max-w-none max-[575px]:text-[24px] max-[575px]:leading-[30px]">
          {faq.heading}
        </h2>
        <div>
          {faq.items.map((item, index) => {
            const expanded = openItem === index;
            const panelId = `home-faq-panel-${index}`;
            const headerId = `home-faq-header-${index}`;

            return (
              <div key={item.question} className="border-b border-[#dee2e6]">
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={(event) => {
                      const nextHeight = event.currentTarget.parentElement.nextElementSibling.scrollHeight;
                      setPanelHeights((current) => ({ ...current, [index]: nextHeight }));
                      setOpenItem(expanded ? null : index);
                    }}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-[40px] py-[20px] text-left text-[16px] leading-[25px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d7693] max-[575px]:px-[20px] max-[575px]:py-[16px]"
                  >
                    {item.question}
                    <ChevronIcon expanded={expanded} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="overflow-hidden transition-[height] duration-300 ease-in-out"
                  style={{ height: expanded ? `${panelHeights[index] || 0}px` : '0px' }}
                  inert={!expanded}
                >
                  <p className="mx-[40px] mb-[16px] whitespace-pre-line p-[5px] text-[16px] leading-[25px] font-medium max-[575px]:mx-[20px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ActionBanner() {
  return (
    <section className="bg-[#002342] px-[100px] py-[80px] text-white max-[1199px]:px-[40px] max-[575px]:px-[20px] max-[575px]:py-[40px]">
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="text-[28px] leading-[33.6px] font-bold max-[575px]:text-[24px] max-[575px]:leading-[30px]">{actionBanner.heading}</h2>
        <p className="my-[20px] text-[16px] leading-[24px] font-medium">{actionBanner.text}</p>
        <div className="flex justify-center gap-[30px] max-[575px]:flex-col">
          <Link to="/coming-soon" className={`${buttonClass} bg-white text-[#212529] max-[575px]:w-full`}>{actionBanner.buttons[0]}</Link>
          <Link to="/signup" className={`${buttonClass} bg-[#0d7693] text-white max-[575px]:w-full`}>{actionBanner.buttons[1]}</Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <ShortenerHero />
      <PlanBanner />
      <VideoBanner />
      <CardGrid />
      <PlatformHighlights />
      <FaqAccordion />
      <ActionBanner />
    </main>
  );
}
