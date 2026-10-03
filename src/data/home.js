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

export const plans = {
  heading: 'TinyURL Plans Include:',
  items: [
    {
      title: 'Detailed Link Analytics',
      text: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
      image: feature1,
    },
    {
      title: 'Fully Branded Domains',
      text: 'Customize every part of your links with branded domains — say goodbye to default link shortening!',
      image: feature2,
    },
    {
      title: 'Bulk Short URLs',
      text: 'Scale your communications with our API, and create thousands of unique short links in the blink of an eye.',
      image: feature3,
    },
    {
      title: 'Link Management',
      text: 'Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.',
      image: feature4,
    },
  ],
};

export const videoBanner = {
  heading: 'Link Shortening Done Quick and Easy',
  paragraphs: [
    "Our URL shortener is not only among the first-ever link shorteners on the Internet — it's the best out there.",
    'Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.',
    'Wave goodbye to long, clunky links and give your audiences the experiences they deserve!',
  ],
  image: shortenerVideo,
  buttons: ['View Plans', 'Contact Sales'],
};

export const cardGrid = {
  heading: 'Your One-Stop Solution for Branding and Managing Links',
  intro: 'We offer a comprehensive suite of premium features to allow users to brand and manage links conveniently and confidently.',
  left: [
    {
      title: 'Unlimited Tracked Clicks',
      text: 'We don’t believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!',
      image: cardFeature0,
    },
    {
      title: 'Detailed Link Analytics',
      text: 'Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters.',
      image: cardFeature1,
    },
    {
      title: 'Branded Domains',
      text: 'Links shortened using your own custom domain are more professional, more trustworthy, and more clickable.',
      image: cardFeature2,
    },
  ],
  right: [
    {
      title: 'Fully Custom Links',
      text: 'Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive.',
      image: cardFeature3,
    },
    {
      title: 'Bulk Short URLs',
      text: 'Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.',
      image: cardFeature4,
    },
    {
      title: 'Link Management',
      text: 'Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features.',
      image: cardFeature5,
    },
  ],
  image: cardFeature3,
  button: 'View Plans',
};

export const platform = {
  heading: "Transforming the Digital Landscape Since ‘02",
  text: 'TinyURL has created billions of short links for marketers, influencers, small business owners, and large businesses.',
  image: platformVideo,
  stats: [
    { value: 'Billions', label: 'of redirects per month' },
    { value: '24 years', label: 'of shortening URLs' },
    { value: '32,761,774,871', label: 'TinyURLs created' },
  ],
};

export const faq = {
  heading: 'Frequently Asked Questions',
  items: [
    {
      question: 'What Is a URL Shortener?',
      answer: 'A URL shortener, also known as a link shortener, is a useful tool that trims long and intricate URLs into shorter and more understandable links.',
    },
    {
      question: 'How Does a URL Shortener Work?',
      answer: 'URL shorteners work like simple signposts: they create new links (redirects) that serve the single purpose of bouncing users to an eventual destination. Since all URLs are essentially just instructions for where your web browser should send you online, you can think of shortening a URL as turning geographic coordinates into handy, easy-to-understand street addresses.',
    },
    {
      question: 'What Are the Benefits of Using a Short URL?',
      answer: 'Brands, organizations, and individuals use link shorteners to make sharing links more convenient. They make it possible to fit links into emails, social media posts, print materials, billboards, or even make it so links can be read aloud on audio-dependent media like podcasts.\n\nWith our paid plans, you can even shorten links using your own brand’s domain, and then track detailed click analytics for sharper, faster decision-making!',
    },
    {
      question: 'What Is a Custom URL Shortener?',
      answer: 'A custom URL shortener (also known as a branded URL shortener) is a link shortener that lets you use a personalized domain in place of a default like tinyurl.com. These fully custom or branded links are great for building trust with audiences, earning higher click-through rates, giving more information about a link’s destination, and improving brand recall.',
    },
    {
      question: 'How Do I Shorten a URL for Free?',
      answer: 'You can shorten a URL for free using TinyURL’s link shortening platform. The process is incredibly straightforward: Just visit our URL shortener tool on your browser of choice, key in your long URL into the indicated field, and generate a shortened URL by clicking the \'Shorten URL\' button. If you’re feeling creative, you can try and attach a unique back half (ex. tinyurl.com/example) by using the ‘Alias’ field.',
    },
    {
      question: 'How Do I Know Your Service Is Reliable and Scalable?',
      answer: 'TinyURL is a cutting-edge link-shortening platform that caters to a broad user base looking for a robust method to shorten and brand links. Our platform is trusted by big brands around the world for creating links that are safe, reliable, and never expire. We’ve created billions of short, branded links so far!',
    },
    {
      question: 'Can I Use a Domain I Already Own?',
      answer: 'Certainly, you can! We pride ourselves on offering personalization features and flexibility so users can create fully customized links. Our paid plans let you register or import top-level domains (example.com) or subdomains (subdomain.example.com) provided they don’t have web content built on top of them.',
    },
  ],
};

export const actionBanner = {
  heading: 'Ready for Shorter, Smarter Links?',
  text: 'Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!',
  buttons: ['View Plans', 'Create Free Account'],
};

export const footerGroups = [
  {
    title: 'Features',
    links: ['Link Editor', 'Link Management', 'Branded Links', 'Short URL Tracking', 'QR Code Generator', 'Short URL API'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'For Developers', 'Our Proven Process', 'About Us'],
  },
  {
    title: 'Contact Us',
    links: ['Help Desk', 'Contact Sales', 'Contact Support', 'Report Abuse'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility Statement', 'Privacy Manager'],
  },
];

export const socialLinks = ['Facebook', 'Instagram', 'LinkedIn', 'X'];
export const footerCopyright = ['© 2026 TinyURL LLC', 'All Rights Reserved'];
