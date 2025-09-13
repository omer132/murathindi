'use client';

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hindi4.png"
            alt="Doğal ortamda hindi"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            {t('home.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed">
            {t('home.subtitle')}
            <br className="hidden sm:block" />
            <span className="text-yellow-300 font-semibold">{t('home.subtitle2')}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-colors"
            >
              <Phone size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">{t('home.callNow')}</span>
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-colors"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">{t('home.whatsapp')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            {t('home.whyUs')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('home.fertilelands')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {t('home.fertilelands.desc')}
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('home.naturalfeeding')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {t('home.naturalfeeding.desc')}
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('home.reliableservice')}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {t('home.reliableservice.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            {t('home.discoverTurkeys')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="relative h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden hover-scale">
              <Image
                src="/hindi1.png"
                alt="Beyaz Hindi"
                fill
                className="object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-semibold text-base sm:text-lg">{t('home.whiteTurkey')}</h3>
                <p className="text-xs sm:text-sm opacity-90">{t('home.whiteTurkey.desc')}</p>
              </div>
            </div>
            <div className="relative h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden hover-scale">
              <Image
                src="/hindi3.png"
                alt="Bronz Hindi"
                fill
                className="object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-semibold text-base sm:text-lg">{t('home.bronzeTurkey')}</h3>
                <p className="text-xs sm:text-sm opacity-90">{t('home.bronzeTurkey.desc')}</p>
              </div>
            </div>
            <div className="relative h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden hover-scale">
              <Image
                src="/hindi2.png"
                alt="Hindi Çiftliği"
                fill
                className="object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-semibold text-base sm:text-lg">{t('home.farmLife')}</h3>
                <p className="text-xs sm:text-sm opacity-90">{t('home.farmLife.desc')}</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/galeri"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors"
            >
              {t('home.viewAllGallery')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            {t('home.orderContact')}
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            {t('home.orderContact.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 transition-colors"
            >
              <Phone size={24} />
              {t('nav.phone')}
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 transition-colors"
            >
              <MessageCircle size={24} />
              {t('home.whatsappMessage')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-2">{t('home.footer.title')}</h3>
          <p className="text-gray-300 mb-4">
            {t('home.footer.location')}
          </p>
          <p className="text-gray-400">
            {t('home.footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}
