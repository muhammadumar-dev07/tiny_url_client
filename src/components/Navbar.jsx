import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../api';
import { MenuIcon, CloseIcon, ArrowRightIcon } from './icons';
import { navbarLinks } from '../data/content';
import { useState } from 'react';
import logoNavbar from '../assets/images/logo/logo-navbar.svg';

const baseLinkClasses = 'text-sm font-semibold text-white transition hover:text-white/75';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[linear-gradient(90deg,#0d7693,#002342)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Go to homepage" className="flex shrink-0">
          <img
            src={logoNavbar}
            width={162}
            height={24}
            alt="TinyURL"
            className="block h-5 w-auto shrink-0 min-[576px]:h-6 min-[576px]:w-[162px]"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navbarLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `${baseLinkClasses} ${isActive ? 'text-white/75' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <span className="text-sm font-semibold text-white">Hi, {user.name || user.email}</span>
              <button
                type="button"
                onClick={logout}
                className="rounded-[5px] bg-white px-4 py-2 text-sm font-semibold text-[#212529] transition hover:bg-white/90"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-white hover:text-white/75">Log In</Link>
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-[5px] bg-white px-5 py-2.5 text-sm font-semibold text-[#212529] shadow-sm transition hover:bg-white/90">
                Sign Up
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-md border border-white/40 p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            {navbarLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-brand"
              >
                {item.label}
              </NavLink>
            ))}
            {user ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white"
              >
                Log out
              </button>
            ) : (
              <div className="mt-2 flex flex-col gap-2">
                <Link to="/login" onClick={() => setOpen(false)} className="rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700">Log In</Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
