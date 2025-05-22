'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/95 backdrop-blur-md'
    }`}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#2C1810]' : 'text-[#2C1810]'
            }`}
        >
          Půjčovna Trabantů
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Trabanty', href: '/vozovy-park' },
            { name: 'Blog', href: '/blog' },
            { name: 'Rezervace', href: '/rezervace' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group text-[#4A2F24] hover:text-[#2C1810] transition-colors`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B4513] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <a
            href="tel:+420777888999"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B4513] text-white rounded-full hover:bg-[#723A0F] transition-all duration-300 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5"
          >
            +420 777 888 999
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>

        <button
          className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-[#2C1810]' : 'text-[#2C1810]'
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Otevřít menu</span>
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''
              }`} />
            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : ''
              }`} />
          </div>
        </button>
      </div>
    </div>

    {/* Mobile menu */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 border-t border-[#2C1810]/10' : 'max-h-0'
        }`}
    >
      <div className="bg-white px-4 py-5 space-y-4">          {[
        { name: 'Trabanty', href: '/vozovy-park' },
        { name: 'Blog', href: '/blog' },
        { name: 'Rezervace', href: '/rezervace' },
        { name: 'Ceník', href: '/#cenik' },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-[#4A2F24] hover:text-[#2C1810] hover:bg-[#FAF3E8] rounded-lg transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
        <div className="pt-4 border-t border-[#2C1810]/10">
          <a
            href="tel:+420777888999"
            className="flex items-center gap-2 px-4 py-2 text-[#4A2F24] hover:text-[#2C1810] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +420 777 888 999
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
}
