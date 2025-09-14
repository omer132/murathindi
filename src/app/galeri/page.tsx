'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Galeri() {
  const { t } = useLanguage();
  
  const turkeyData = [
    {
      id: 1,
      name: t('turkey.whiteTurkey'),
      age: `6 ${t('units.months')}`,
      weight: `8-10 ${t('units.kg')}`,
      description: t('turkey.whiteTurkey.desc'),
      image: "/hindi8.png"
    },
    {
      id: 2,
      name: t('turkey.bronzeTurkey'),
      age: `8 ${t('units.months')}`, 
      weight: `12-15 ${t('units.kg')}`,
      description: t('turkey.bronzeTurkey.desc'),
      image: "/hindi1.png"
    },
    {
      id: 3,
      name: t('turkey.youngTurkey'),
      age: `4 ${t('units.months')}`,
      weight: `5-7 ${t('units.kg')}`,
      description: t('turkey.youngTurkey.desc'),
      image: "/hindi7.png"
    },
    {
      id: 4,
      name: t('turkey.bigTurkey'),
      age: `10 ${t('units.months')}`,
      weight: `15-18 ${t('units.kg')}`,
      description: t('turkey.bigTurkey.desc'),
      image: "/hindi2.png"
    },
    {
      id: 5,
      name: t('turkey.femaleTurkey'),
      age: `7 ${t('units.months')}`,
      weight: `6-8 ${t('units.kg')}`,
      description: t('turkey.femaleTurkey.desc'),
      image: "/hindi6.png"
    },
    {
      id: 6,
      name: t('turkey.maleTurkey'),
      age: `9 ${t('units.months')}`,
      weight: `14-16 ${t('units.kg')}`,
      description: t('turkey.maleTurkey.desc'),
      image: "/hindi5.png"
    }
  ];

  const [selectedTurkey, setSelectedTurkey] = useState<typeof turkeyData[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-green-800 text-white py-16 pt-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hindi4.png"
            alt="Hindiler Galerisi Arka Plan"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-green-800/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('gallery.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {turkeyData.map((turkey) => (
              <div 
                key={turkey.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedTurkey(turkey)}
              >
                <div className="relative h-64 bg-gray-200 flex-shrink-0">
                  <Image
                    src={turkey.image}
                    alt={turkey.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{turkey.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500">{t('gallery.age')}:</span>
                      <span className="ml-2 font-medium">{turkey.age}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">{t('gallery.weight')}:</span>
                      <span className="ml-2 font-medium">{turkey.weight}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{turkey.description}</p>
                  <button 
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTurkey(turkey);
                    }}
                  >
                    {t('gallery.viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('gallery.contactForOrder')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('gallery.contactForOrder.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 transition-colors"
            >
              <Phone size={24} />
              {t('home.callNow')}
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

      {/* Modal for detailed view */}
      {selectedTurkey && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedTurkey(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="relative">
              <button
                onClick={() => setSelectedTurkey(null)}
                className="absolute top-6 right-6 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
              >
                <X size={20} />
              </button>
              
              {/* Hero Image */}
              <div className="relative h-96 bg-gray-200 rounded-t-2xl overflow-hidden">
                <Image
                  src={selectedTurkey.image}
                  alt={selectedTurkey.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedTurkey.name}</h2>
                <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
              </div>
              
              {/* Info Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Specifications */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {t('gallery.specifications')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-600">{t('gallery.age')}:</span>
                      <span className="font-semibold text-gray-800">{selectedTurkey.age}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-600">{t('gallery.weight')}:</span>
                      <span className="font-semibold text-gray-800">{selectedTurkey.weight}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">{t('gallery.status')}:</span>
                      <span className="font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">{t('gallery.healthy')}</span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {t('gallery.description')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedTurkey.description}</p>
                </div>
              </div>
              
              {/* Contact Section */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4 text-center">{t('gallery.contactNow')}</h3>
                <p className="text-center text-green-100 mb-6">{t('gallery.contactNow.desc')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+905551234567"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105"
                  >
                    <Phone size={20} />
                    {t('gallery.callNow')}
                  </a>
                  <a
                    href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba, ${selectedTurkey.name} (${selectedTurkey.age}, ${selectedTurkey.weight}) hakkında bilgi almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-green-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105"
                  >
                    <MessageCircle size={20} />
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
