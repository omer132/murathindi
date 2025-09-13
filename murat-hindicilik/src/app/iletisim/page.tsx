'use client';

import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Iletisim() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-green-800 text-white py-16 pt-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hindi4.png"
            alt="İletişim Arka Plan"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-green-800/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('contact.phone')}</h3>
              <p className="text-gray-600 mb-4">{t('contact.phone.desc')}</p>
              <a
                href="tel:+905551234567"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                {t('nav.phone')}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('contact.whatsapp')}</h3>
              <p className="text-gray-600 mb-4">{t('contact.whatsapp.desc')}</p>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                {t('contact.whatsapp')}
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('contact.location')}</h3>
              <p className="text-gray-600 mb-4">{t('contact.location.desc')}</p>
              <p className="text-gray-800 font-medium">
                Kahramanmaraş / Afşin
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Working Hours */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-green-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">{t('contact.workingHours')}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('contact.workingHours.weekdays')}</span>
                    <span className="font-medium">{t('contact.workingHours.weekdays.time')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.workingHours.sunday')}</span>
                    <span className="font-medium">{t('contact.workingHours.sunday.time')}</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-green-800 text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('contact.quickContact')}</h3>
                <p className="mb-6 text-green-100">
                  {t('contact.quickContact.desc')}
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+905551234567"
                    className="flex items-center gap-3 text-yellow-300 hover:text-yellow-200 transition-colors"
                  >
                    <Phone size={20} />
                    <span className="font-medium">{t('nav.phone')}</span>
                  </a>
                  <a
                    href="https://wa.me/905551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-300 hover:text-green-200 transition-colors"
                  >
                    <MessageCircle size={20} />
                    <span className="font-medium">{t('contact.whatsapp')} Mesaj</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('contact.faq')}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{t('contact.faq.minOrder')}</h4>
                    <p className="text-gray-600">{t('contact.faq.minOrder.answer')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{t('contact.faq.delivery')}</h4>
                    <p className="text-gray-600">{t('contact.faq.delivery.answer')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{t('contact.faq.feeding')}</h4>
                    <p className="text-gray-600">{t('contact.faq.feeding.answer')}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
