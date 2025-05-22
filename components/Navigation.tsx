'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const topics = [
    { name: 'Enzymy v mléce', href: '/enzymy' },
    { name: 'Faktory jakosti', href: '/jakost' },
    { name: 'Mikrobiologie', href: '/mikrobiologie' },
    { name: 'Somatické buňky', href: '/somaticke-bunky' },
  ];

  return (    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4">
              <span className="font-bold text-blue-900 text-xl tracking-tight hover:text-blue-700 transition-colors">
                VELKÉ MLÉKO
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="py-2 px-3 text-gray-800 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                {topic.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
          {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2 pb-4 bg-white">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="py-2 px-3 text-gray-800 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
