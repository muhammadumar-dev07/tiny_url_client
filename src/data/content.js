import feature1 from '../assets/images/home/feature-1.webp';
import feature2 from '../assets/images/home/feature-2.webp';
import feature3 from '../assets/images/home/feature-3.webp';
import feature4 from '../assets/images/home/feature-4.webp';
import shortenerVideo from '../assets/images/home/shortener-video.webp';
import cardFeature0 from '../assets/images/home/card-feature-0.webp';
import cardFeature1 from '../assets/images/home/card-feature-1.webp';
import cardFeature2 from '../assets/images/home/card-feature-2.webp';
import cardFeature3 from '../assets/images/home/card-feature-3.webp';
import cardFeature4 from '../assets/images/home/card-feature-4.webp';
import cardFeature5 from '../assets/images/home/card-feature-5.webp';
import platformVideo from '../assets/images/home/platform-highlight-video.webp';
import domainsVideo from '../assets/images/domains/domains-video.webp';
import domainFigure1 from '../assets/images/domains/figure-1.webp';
import domainFigure2 from '../assets/images/domains/figure-2.webp';
import domainFigure3 from '../assets/images/domains/figure-3.webp';
import domainFigure4 from '../assets/images/domains/figure-4.webp';
import linkFigure0 from '../assets/images/link-management/figure-0.webp';
import linkFigure1 from '../assets/images/link-management/figure-1.webp';
import linkFigure2 from '../assets/images/link-management/figure-2.webp';
import linkFigure3 from '../assets/images/link-management/figure-3.webp';
import linkVideo from '../assets/images/link-management/link-management-video.webp';

export const navbarLinks = [
  { label: 'Plans', to: '/coming-soon' },
  { label: 'Features', to: '/coming-soon' },
  { label: 'Domains', to: '/app/branded-domains' },
  { label: 'Resources', to: '/coming-soon' },
  { label: 'Link Management', to: '/app/features/link-management' },
  { label: 'Branded Links', to: '/app/branded-domains' },
];

export const footerGroups = [
  {
    title: 'Product',
    links: ['Pricing', 'Features', 'Link Management', 'Custom Domains'],
  },
  {
    title: 'Company',
    links: ['About', 'Partners', 'Blog', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact', 'Status', 'Privacy'],
  },
];

export const homePlans = [
  { title: 'Free', price: '$0', description: 'Basic link shortening and brand-safe analytics.', featured: false },
  { title: 'Pro', price: '$9', description: 'Add custom branded links and robust campaign tracking.', featured: false },
  { title: 'Business', price: '$29', description: 'Advanced security and team features for growing brands.', featured: true },
  { title: 'Enterprise', price: 'Custom', description: 'White-glove onboarding and enterprise controls.', featured: false },
];

export const homeFeatures = [
  { title: 'Advanced URL Shortening', text: 'Create cleaner, share-ready links that are easier to trust and remember.', image: feature1 },
  { title: 'Powerful Analytics', text: 'See clicks, timing and traffic trends on every shared link.', image: feature2 },
  { title: 'Branded Domains', text: 'Make every link feel like your brand, not a generic shortened URL.', image: feature3 },
  { title: 'Optimization Tools', text: 'Track and optimize engagement across campaigns and channels.', image: feature4 },
];

export const shortenerCards = [
  { title: 'Fully Custom Links', color: 'bg-[#0f7ca7]', accent: 'bg-[#e6f2f6]', image: cardFeature0 },
  { title: 'Branded Domains', color: 'bg-[#0b123a]', image: cardFeature1 },
  { title: 'Link Rotator', color: 'bg-[#0b6d8c]', image: cardFeature2 },
  { title: 'API Access', color: 'bg-[#dff5ff]', text: 'text-[#002342]', image: cardFeature3 },
  { title: 'Real-Time Analytics', color: 'bg-[#83d1eb]', text: 'text-[#002342]', image: cardFeature4 },
  { title: 'Custom QR Codes', color: 'bg-[#003c63]', image: cardFeature5 },
];

export const platformHighlights = [
  { title: 'Built for every channel', description: 'Short links that perform across email, social, ads and SMS.', image: platformVideo },
  { title: 'Track what matters', description: 'Measure referral activity and campaign impact with clear metrics.', image: feature2 },
  { title: 'Keep it secure', description: 'Protect your links with branded links and privacy-first defaults.', image: feature3 },
  { title: 'Scaled for teams', description: 'Create, manage and review links in shared workspaces.', image: feature4 },
];

export const homeFaq = [
  { q: 'Are my links safe?', a: 'TinyURL is designed for safe, concise links that keep campaigns clean and easy to share.' },
  { q: 'Can I use a custom domain?', a: 'Yes. Branded domains let you present links under your own branded host name.' },
  { q: 'How does analytics work?', a: 'Each short link can capture click activity that helps you understand engagement over time.' },
  { q: 'Do you offer team features?', a: 'Enterprise plans include the controls, governance and access needed by larger teams.' },
  { q: 'Can I create QR codes?', a: 'Yes. QR codes can be built and shared alongside your branded short links.' },
  { q: 'How long are links active?', a: 'Links remain active as long as your account and subscription support them.' },
  { q: 'What integrations are available?', a: 'The platform supports workflows for marketing teams, websites and digital campaigns.' },
];

export const brandedFeatures = [
  { title: 'Own your link identity', text: 'Turn long links into a trustworthy branded address your audience will recognize.' },
  { title: 'Protect the customer experience', text: 'Keep every destination clear, consistent and aligned with your brand look and feel.' },
  { title: 'Improve campaign confidence', text: 'Give ads, social posts and email links a more professional and trusted impression.' },
];

export const brandedAlternating = [
  { title: 'Boost trust', text: 'A custom domain creates more confidence before a visitor ever clicks.', image: domainFigure1, reverse: false },
  { title: 'Keep campaigns consistent', text: 'Use the same domain across every marketing channel so your content feels unified.', image: domainFigure2, reverse: true },
  { title: 'Measure the real impact', text: 'Track how traffic behaves across brand and campaign-specific links.', image: domainFigure3, reverse: false },
  { title: 'Work with your team', text: 'Share branded links securely inside a collaborative workflow.', image: domainFigure4, reverse: true },
];

export const brandedFaq = [
  { q: 'What is a branded domain?', a: 'A branded domain replaces the generic short URL with your own host name.' },
  { q: 'Do I need technical setup?', a: 'Most branded domain flows can be configured with a DNS record and a quick verification step.' },
  { q: 'Can I use multiple domains?', a: 'Yes. Teams can create and assign different branded domains for campaigns or departments.' },
  { q: 'Is first-year pricing really free?', a: 'This introductory option is meant to help teams test branded domains before scaling.' },
];

export const linkManagementContent = {
  features: [
    { title: 'Organize your links', text: 'Group every short link into a clear operating system for campaign tracking and review.', image: linkFigure1 },
    { title: 'Review link health', text: 'See which links are active, expired, stale or performing strongly', image: linkFigure2 },
    { title: 'Share safely', text: 'Keep your link library easy to audit and quick to update without changing destinations.', image: linkFigure3 },
  ],
  faq: [
    { q: 'Can I delete links after publishing?', a: 'Yes. You can remove or retire a short link without affecting the destination in your own systems.' },
    { q: 'Do I need analytics to manage links?', a: 'No, but analytics makes it easier to spot weak links and high-converting campaigns.' },
    { q: 'Can I filter by campaign?', a: 'Yes. Link management makes it easier to organize and review links by channel or project.' },
    { q: 'Is shared access available?', a: 'Team plans can support shared review, improved oversight and quicker publishing workflows.' },
  ],
  stats: [
    { label: 'Links created', value: '1.4M+' },
    { label: 'Avg. click uplift', value: '32%' },
    { label: 'Team adoption', value: '4.8/5' },
  ],
};

export const marketingVideo = shortenerVideo;
export const domainVideo = domainsVideo;
export const linkManagementVideo = linkVideo;
export const heroLogo = 'https://images.unsplash.com/...';

export const linkManagementHeroCard = {
  title: 'Add campaign structure',
  text: 'Keep every shortened URL organized, reviewed and easy to manage.',
  image: linkFigure0,
};
