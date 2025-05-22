'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#2C1810]">
            Půjčovna Trabantů
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/vozovy-park" 
              className="text-[#4A2F24] hover:text-[#2C1810] transition-colors"
            >
              Vozový park
            </Link>
            <Link 
              href="/rezervace" 
              className="text-[#4A2F24] hover:text-[#2C1810] transition-colors"
            >
              Rezervace
            </Link>
            <Link 
              href="/#cenik" 
              className="text-[#4A2F24] hover:text-[#2C1810] transition-colors"
            >
              Ceník
            </Link>
            <a 
              href="tel:+420777888999"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B4513] text-white rounded-full hover:bg-[#723A0F] transition-colors text-sm font-medium"
            >
              +420 777 888 999
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          <button 
            className="md:hidden text-[#2C1810]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              } />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <Link 
            href="/vozovy-park" 
            className="block px-3 py-2 text-[#4A2F24] hover:text-[#2C1810] hover:bg-[#FAF3E8] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Vozový park
          </Link>
          <Link 
            href="/rezervace" 
            className="block px-3 py-2 text-[#4A2F24] hover:text-[#2C1810] hover:bg-[#FAF3E8] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Rezervace
          </Link>
          <Link 
            href="/#cenik" 
            className="block px-3 py-2 text-[#4A2F24] hover:text-[#2C1810] hover:bg-[#FAF3E8] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ceník
          </Link>
        </div>
      </div>
    </nav>
  );
}
