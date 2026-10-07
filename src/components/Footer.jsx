import { Link } from 'react-router-dom';
import { footerCopyright, footerGroups, socialLinks } from '../data/home';
import logoFooter from '../assets/images/logo/logo-footer.svg';

function destination(label) {
  if (label === 'Pricing') return '/plans';
  if (label === 'Features') return '/features';
  if (label === 'Link Management') return '/app/features/link-management';
  if (label === 'Branded Links' || label === 'Custom Domains') return '/app/branded-domains';
  if (['Blog', 'Help Center', 'Help Desk'].includes(label)) return '/resources';
  if (label === 'Contact' || label === 'Contact Sales' || label === 'Contact Support') return '/resources#faq';
  return '/coming-soon';
}

function SocialIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    className: 'h-5 w-5 fill-current',
  };

  if (name === 'Facebook') {
    return <svg {...common}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.8H7v3.1h2.8v8h3.7Z" /></svg>;
  }
  if (name === 'Instagram') {
    return <svg {...common}><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" /></svg>;
  }
  if (name === 'LinkedIn') {
    return <svg {...common}><path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6v7h-3.8v-6.2c0-1.5 0-3.5-2.2-3.5s-2.6 1.6-2.6 3.4V21H9.5V9Z" /></svg>;
  }
  return <svg {...common}><path d="M18.9 2h3.1l-6.8 7.8L23.2 22h-6.3L12 14.5 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg>;
}

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(90deg,#0d7693,#002342)] px-[100px] py-[60px] text-white max-[1199px]:px-[40px] max-[991px]:px-[24px] max-[575px]:px-[20px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[4fr_1fr] max-[991px]:grid-cols-1">
        <div className="flex min-w-0 gap-0 max-[991px]:grid max-[991px]:grid-cols-2 max-[991px]:gap-x-[30px] max-[991px]:gap-y-[40px]">
          {footerGroups.map((group) => (
            <section key={group.title} className="mr-[50px] min-w-0 max-[1199px]:mr-[28px] max-[991px]:mr-0">
              <h2 className="mb-[30px] text-[20px] leading-[24px] font-bold">{group.title}</h2>
              <ul>
                {group.links.map((label) => (
                  <li key={label} className="mb-[10px] text-[16px] leading-[25px] font-medium">
                    <Link to={destination(label)} className="text-white hover:underline">{label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="flex flex-col items-end justify-end max-[991px]:items-start">
          <div className="mb-[40px] flex gap-[20px]">
            {socialLinks.map((name) => (
              <Link key={name} to="/coming-soon" aria-label={name} className="text-white hover:text-white/75">
                <SocialIcon name={name} />
              </Link>
            ))}
          </div>
          <img src={logoFooter} width={162} height={24} alt="TinyURL" className="mb-[16px] block h-6 w-[162px]" />
          {footerCopyright.map((line) => (
            <p key={line} className="text-right text-[14px] leading-[21px] max-[991px]:text-left">{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
