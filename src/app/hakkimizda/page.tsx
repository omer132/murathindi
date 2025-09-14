'use client';

import Image from 'next/image';
import { MapPin, Heart, Leaf, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hakkimizda() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-green-800 text-white py-12 sm:py-16 pt-20 sm:pt-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hindi4.png"
            alt="Hakkımızda Arka Plan"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-green-800/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t('about.title')}</h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">{t('about.story')}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                {t('about.story.p1')}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                {t('about.story.p2')}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('about.story.p3')}
              </p>
            </div>
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]">
                <Image
                  src="/hindilogo.png"
                  alt="Murat Hindicilik Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            {t('about.values')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-0">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Leaf className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('about.naturalness')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('about.naturalness.desc')}
              </p>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('about.love')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('about.love.desc')}
              </p>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('about.quality')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('about.quality.desc')}
              </p>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('about.local')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('about.local.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/hindi4.png"
                alt="Kahramanmaraş Afşin Manzarası"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">{t('about.location')}</h2>
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <MapPin className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{t('about.location.title')}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {t('about.location.p1')}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                {t('about.location.p2')}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('about.location.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            {t('about.contactUs')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('about.contactUs.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors"
            >
              {t('home.callNow')}
            </a>
            <a
              href="/iletisim"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors"
            >
              {t('about.contactPage')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
