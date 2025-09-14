'use client';

import Image from 'next/image';
import { MapPin, Heart, Leaf, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hakkimizda() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-green-800 text-white py-16 pt-28 overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('about.story')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('about.story.p1')}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('about.story.p2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.story.p3')}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-[28rem] h-[28rem]">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('about.values')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.naturalness')}</h3>
              <p className="text-gray-600">
                {t('about.naturalness.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.love')}</h3>
              <p className="text-gray-600">
                {t('about.love.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.quality')}</h3>
              <p className="text-gray-600">
                {t('about.quality.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.local')}</h3>
              <p className="text-gray-600">
                {t('about.local.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/hindi4.png"
                alt="Kahramanmaraş Afşin Manzarası"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('about.location')}</h2>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('about.location.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.location.p1')}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('about.location.p2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.location.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('about.contactUs')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('about.contactUs.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              {t('home.callNow')}
            </a>
            <a
              href="/iletisim"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              {t('about.contactPage')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
