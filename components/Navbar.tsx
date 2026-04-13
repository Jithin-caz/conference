'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Call for Papers', path: '/call-for-papers' },
  { name: 'Dates', path: '/important-dates' },
  { name: 'Schedule', path: '/program-schedule' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass border-b border-[rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image src="/conf_logo.png" alt="MACE RISE Logo" width={40} height={40} className="object-contain drop-shadow-sm" />
            <Link href="/" className="text-2xl font-heading font-bold text-gradient">
              MACE RISE '26
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary bg-[rgba(14,165,233,0.1)]'
                      : 'text-foreground-muted hover:text-foreground hover:bg-[rgba(0,0,0,0.05)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="ml-4 pl-4 border-l border-[rgba(0,0,0,0.1)]">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdoHoXHR0_e9yIXGOWdDI_V63EGEp72DNhWzZ_9-YSuczknnw/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground-muted hover:text-foreground hover:bg-[rgba(0,0,0,0.05)] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-[rgba(0,0,0,0.05)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-primary bg-[rgba(14,165,233,0.1)]'
                      : 'text-foreground-muted hover:text-foreground hover:bg-[rgba(0,0,0,0.05)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoHoXHR0_e9yIXGOWdDI_V63EGEp72DNhWzZ_9-YSuczknnw/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 rounded-md font-semibold text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
