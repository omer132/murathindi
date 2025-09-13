'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/hakkimizda' },
    { name: t('nav.gallery'), href: '/galeri' },
    { name: t('nav.contact'), href: '/iletisim' },
  ];

  return (
    <nav className="bg-transparent text-white shadow-lg absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-200 hover:scale-105">
              <div className="relative w-16 h-16 bg-white/10 rounded-full p-1.5 shadow-lg">
                <Image
                  src="/hindilogo.png"
                  alt="Murat Hindicilik Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors backdrop-blur-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language & Phone */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <div className="flex items-center bg-white/10 rounded-md overflow-hidden">
              <button 
                onClick={() => setLanguage('tr')}
                className={`px-4 py-2 text-sm font-medium transition-colors w-12 flex items-center justify-center ${
                  language === 'tr' 
                    ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
                    : 'hover:bg-white/20 text-white'
                }`}
              >
                TR
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium transition-colors w-12 flex items-center justify-center ${
                  language === 'en' 
                    ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
                    : 'hover:bg-white/20 text-white'
                }`}
              >
                ENG
              </button>
            </div>
            <a
              href="tel:+905551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium flex items-center gap-1 lg:gap-2 transition-colors"
            >
              <Phone size={14} className="lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">{t('nav.phone')}</span>
              <span className="lg:hidden">Ara</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white backdrop-blur-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-md">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center bg-white/10 rounded-md overflow-hidden mt-4">
                <button 
                  onClick={() => setLanguage('tr')}
                  className={`px-4 py-2 text-sm font-medium transition-colors w-12 flex items-center justify-center ${
                    language === 'tr' 
                      ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
                      : 'hover:bg-white/20 text-white'
                  }`}
                >
                  TR
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-sm font-medium transition-colors w-12 flex items-center justify-center ${
                    language === 'en' 
                      ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
                      : 'hover:bg-white/20 text-white'
                  }`}
                >
                  ENG
                </button>
              </div>
              <a
                href="tel:+905551234567"
                className="bg-yellow-500 hover:bg-yellow-600 text-black block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 mt-4"
              >
                <Phone size={16} />
                {t('nav.phone')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
