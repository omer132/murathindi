'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.gallery': 'Hindiler Galerisi',
    'nav.contact': 'İletişim',
    'nav.phone': '0555 123 45 67',

    // Home Page
    'home.title': 'Murat Hindicilik',
    'home.subtitle': 'Kahramanmaraş/Afşin\'in bereketli topraklarında yetişen',
    'home.subtitle2': 'doğal ve sağlıklı hindiler',
    'home.callNow': 'Hemen Ara: 0555 123 45 67',
    'home.whatsapp': 'WhatsApp',
    'home.whyUs': 'Neden Murat Hindicilik?',
    'home.fertilelands': 'Bereketli Topraklar',
    'home.fertilelands.desc': 'Kahramanmaraş/Afşin\'in verimli topraklarında doğal ortamda yetişen hindiler',
    'home.naturalfeeding': 'Doğal Beslenme',
    'home.naturalfeeding.desc': 'Hiçbir kimyasal madde kullanılmadan, tamamen doğal yöntemlerle beslenen hindiler',
    'home.reliableservice': 'Güvenilir Hizmet',
    'home.reliableservice.desc': 'Yıllardır sürdürdüğümüz deneyim ile müşteri memnuniyeti odaklı hizmet',
    'home.discoverTurkeys': 'Hindilerimizi Keşfedin',
    'home.whiteTurkey': 'Beyaz Hindi',
    'home.whiteTurkey.desc': 'Doğal ortamda yetişen',
    'home.bronzeTurkey': 'Bronz Hindi',
    'home.bronzeTurkey.desc': 'Sağlıklı ve güçlü',
    'home.farmLife': 'Çiftlik Hayatı',
    'home.farmLife.desc': 'Bereketli topraklar',
    'home.viewAllGallery': 'Tüm Galeriyi Görüntüle',
    'home.orderContact': 'Sipariş Vermek İçin İletişime Geçin',
    'home.orderContact.desc': 'Doğal ve sağlıklı hindilerimiz için hemen arayın!',
    'home.whatsappMessage': 'WhatsApp ile Mesaj',
    'home.footer.title': 'Murat Hindicilik',
    'home.footer.location': 'Kahramanmaraş/Afşin - Doğal Hindi Üretimi',
    'home.footer.rights': '© 2024 Murat Hindicilik. Tüm hakları saklıdır.',

    // About Page
    'about.title': 'Hakkımızda',
    'about.subtitle': 'Kahramanmaraş/Afşin\'in bereketli topraklarında, doğal ve sağlıklı hindi üretimi yapan bir aile işletmesiyiz.',
    'about.story': 'Hikayemiz',
    'about.story.p1': 'Murat Hindicilik, Kahramanmaraş\'ın Afşin ilçesinde, nesiller boyu sürdürülen hayvancılık geleneğinin modern bir devamı olarak kurulmuştur. Ailemiz, bu topraklarda yıllardır doğal yöntemlerle hayvan yetiştiriciliği yapmaktadır.',
    'about.story.p2': 'Bereketli Afşin topraklarının sunduğu doğal imkanları en iyi şekilde değerlendirerek, hindilerimizi tamamen doğal ortamda, sağlıklı ve mutlu bir şekilde yetiştiriyoruz.',
    'about.story.p3': 'Amacımız, müşterilerimize en kaliteli, en doğal ve en sağlıklı hindileri sunmaktır. Her hindimiz özenle bakılır ve doğal beslenme koşullarında yetiştirilir.',
    'about.values': 'Değerlerimiz',
    'about.naturalness': 'Doğallık',
    'about.naturalness.desc': 'Hiçbir kimyasal madde kullanmadan, tamamen doğal yöntemlerle üretim',
    'about.love': 'Sevgi',
    'about.love.desc': 'Her hindimize özen ve sevgiyle bakım sağlıyoruz',
    'about.quality': 'Kalite',
    'about.quality.desc': 'En yüksek kalite standartlarında üretim yapıyoruz',
    'about.local': 'Yerel',
    'about.local.desc': 'Afşin\'in bereketli topraklarından doğrudan sizlere',
    'about.location': 'Konumumuz',
    'about.location.title': 'Kahramanmaraş / Afşin',
    'about.location.p1': 'Afşin, Kahramanmaraş\'ın en verimli topraklarından birine sahip ilçesidir. Bu bereketli topraklar, hindilerimizin doğal ortamda sağlıklı bir şekilde yetişmesi için ideal koşulları sağlamaktadır.',
    'about.location.p2': 'Bölgemizin iklimi ve doğal kaynakları, hindi yetiştiriciliği için mükemmel koşullar sunmaktadır. Temiz hava, bol yeşillik ve doğal su kaynakları sayesinde hindilerimiz en sağlıklı şekilde büyümektedir.',
    'about.location.p3': 'Çiftliğimiz, şehir merkezinden uzakta, tamamen doğal bir çevrede kurulmuştur. Bu sayede hindilerimiz gürültüden uzak, huzurlu bir ortamda yaşamaktadır.',
    'about.contactUs': 'Bizimle İletişime Geçin',
    'about.contactUs.desc': 'Doğal ve sağlıklı hindilerimiz hakkında daha fazla bilgi almak veya sipariş vermek için bizi arayın.',
    'about.contactPage': 'İletişim Sayfası',

    // Gallery Page
    'gallery.title': 'Hindiler Galerisi',
    'gallery.subtitle': 'Doğal ortamda yetişen sağlıklı hindilerimizi keşfedin. Her biri özenle bakılmış ve doğal beslenme ile büyütülmüştür.',
    'gallery.contactForOrder': 'Beğendiğiniz Hindi İçin İletişime Geçin',
    'gallery.contactForOrder.desc': 'Galerideki hindilerimizden beğendiğiniz var mı? Hemen arayarak sipariş verebilirsiniz!',
    'gallery.viewDetails': 'Detayları Görüntüle',
    'gallery.specifications': 'Özellikler',
    'gallery.age': 'Yaş',
    'gallery.weight': 'Ağırlık',
    'gallery.status': 'Durum',
    'gallery.healthy': 'Sağlıklı',
    'gallery.description': 'Açıklama',
    'gallery.contactNow': 'İletişime Geçin',
    'gallery.contactNow.desc': 'Bu hindi hakkında bilgi almak için bize ulaşın',
    'gallery.callNow': 'Hemen Ara',

    // Contact Page
    'contact.title': 'İletişim',
    'contact.subtitle': 'Doğal hindilerimiz hakkında bilgi almak veya sipariş vermek için bizimle iletişime geçin.',
    'contact.phone': 'Telefon',
    'contact.phone.desc': 'Hemen arayarak bilgi alın',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.desc': 'Mesaj gönderin, hızlıca yanıtlayalım',
    'contact.location': 'Konum',
    'contact.location.desc': 'Çiftliğimizi ziyaret edin',
    'contact.workingHours': 'Çalışma Saatleri',
    'contact.workingHours.weekdays': 'Pazartesi - Cumartesi:',
    'contact.workingHours.weekdays.time': '08:00 - 18:00',
    'contact.workingHours.sunday': 'Pazar:',
    'contact.workingHours.sunday.time': '09:00 - 16:00',
    'contact.quickContact': 'Hızlı İletişim',
    'contact.quickContact.desc': 'Acil durumlar için doğrudan arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.',
    'contact.faq': 'Sık Sorulan Sorular',
    'contact.faq.minOrder': 'Minimum sipariş miktarı nedir?',
    'contact.faq.minOrder.answer': 'Minimum sipariş miktarımız bulunmamaktadır. Tek hindi bile sipariş verebilirsiniz.',
    'contact.faq.delivery': 'Teslimat yapıyor musunuz?',
    'contact.faq.delivery.answer': '81 ile teslimat yapıyoruz. Detaylar için lütfen iletişime geçin.',
    'contact.faq.feeding': 'Hindiler nasıl beslenmiştir?',
    'contact.faq.feeding.answer': 'Tüm hindilerimiz doğal yem ve otlarla, hiçbir kimyasal madde kullanılmadan beslenmiştir.',

    // Turkey Data
    'turkey.whiteTurkey': 'Beyaz Hindi',
    'turkey.bronzeTurkey': 'Bronz Hindi',
    'turkey.youngTurkey': 'Genç Hindi',
    'turkey.bigTurkey': 'Büyük Hindi',
    'turkey.femaleTurkey': 'Dişi Hindi',
    'turkey.maleTurkey': 'Erkek Hindi',
    'turkey.whiteTurkey.desc': 'Sağlıklı ve güçlü beyaz hindi. Doğal ortamda yetiştirilmiştir.',
    'turkey.bronzeTurkey.desc': 'Geleneksel bronz rengi hindi. Çok aktif ve sağlıklı.',
    'turkey.youngTurkey.desc': 'Genç ve canlı hindi. Hızla gelişen sağlıklı bir bireydir.',
    'turkey.bigTurkey.desc': 'Olgun ve büyük hindi. Mükemmel et kalitesine sahiptir.',
    'turkey.femaleTurkey.desc': 'Sağlıklı dişi hindi. Çok sakin ve uysal karakterde.',
    'turkey.maleTurkey.desc': 'Güçlü erkek hindi. Çok iyi gelişmiş kas yapısına sahip.',

    // Loading Screen
    'loading.title': 'Murat Hindicilik',
    'loading.subtitle': 'Doğal Hindi Üretimi',
    'loading.text': 'Kahramanmaraş/Afşin\'den doğal hindiler yükleniyor...',
    'loading.loading': 'Yükleniyor...',

    // Units
    'units.months': 'Aylık',
    'units.kg': 'kg',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.gallery': 'Turkey Gallery',
    'nav.contact': 'Contact',
    'nav.phone': '0555 123 45 67',

    // Home Page
    'home.title': 'Murat Turkey Farm',
    'home.subtitle': 'Natural and healthy turkeys raised in the',
    'home.subtitle2': 'fertile lands of Kahramanmaraş/Afşin',
    'home.callNow': 'Call Now: 0555 123 45 67',
    'home.whatsapp': 'WhatsApp',
    'home.whyUs': 'Why Murat Turkey Farm?',
    'home.fertilelands': 'Fertile Lands',
    'home.fertilelands.desc': 'Turkeys raised naturally in the fertile lands of Kahramanmaraş/Afşin',
    'home.naturalfeeding': 'Natural Feeding',
    'home.naturalfeeding.desc': 'Turkeys fed with completely natural methods without using any chemicals',
    'home.reliableservice': 'Reliable Service',
    'home.reliableservice.desc': 'Customer satisfaction focused service with years of experience',
    'home.discoverTurkeys': 'Discover Our Turkeys',
    'home.whiteTurkey': 'White Turkey',
    'home.whiteTurkey.desc': 'Naturally raised',
    'home.bronzeTurkey': 'Bronze Turkey',
    'home.bronzeTurkey.desc': 'Healthy and strong',
    'home.farmLife': 'Farm Life',
    'home.farmLife.desc': 'Fertile lands',
    'home.viewAllGallery': 'View Full Gallery',
    'home.orderContact': 'Contact Us to Place an Order',
    'home.orderContact.desc': 'Call now for our natural and healthy turkeys!',
    'home.whatsappMessage': 'WhatsApp Message',
    'home.footer.title': 'Murat Turkey Farm',
    'home.footer.location': 'Kahramanmaraş/Afşin - Natural Turkey Production',
    'home.footer.rights': '© 2024 Murat Turkey Farm. All rights reserved.',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'We are a family business producing natural and healthy turkeys in the fertile lands of Kahramanmaraş/Afşin.',
    'about.story': 'Our Story',
    'about.story.p1': 'Murat Turkey Farm was established as a modern continuation of the livestock tradition that has been carried on for generations in the Afşin district of Kahramanmaraş. Our family has been raising animals with natural methods in these lands for years.',
    'about.story.p2': 'By making the best use of the natural opportunities offered by the fertile lands of Afşin, we raise our turkeys completely naturally, healthy and happy.',
    'about.story.p3': 'Our goal is to offer our customers the highest quality, most natural and healthiest turkeys. Each of our turkeys is carefully cared for and raised under natural feeding conditions.',
    'about.values': 'Our Values',
    'about.naturalness': 'Naturalness',
    'about.naturalness.desc': 'Production with completely natural methods without using any chemicals',
    'about.love': 'Love',
    'about.love.desc': 'We provide care and love to each of our turkeys',
    'about.quality': 'Quality',
    'about.quality.desc': 'We produce at the highest quality standards',
    'about.local': 'Local',
    'about.local.desc': 'Directly from the fertile lands of Afşin to you',
    'about.location': 'Our Location',
    'about.location.title': 'Kahramanmaraş / Afşin',
    'about.location.p1': 'Afşin is a district with one of the most fertile lands of Kahramanmaraş. These fertile lands provide ideal conditions for our turkeys to grow healthily in a natural environment.',
    'about.location.p2': 'The climate and natural resources of our region offer perfect conditions for turkey farming. Thanks to clean air, abundant greenery and natural water sources, our turkeys grow in the healthiest way.',
    'about.location.p3': 'Our farm is established in a completely natural environment, away from the city center. In this way, our turkeys live in a peaceful environment away from noise.',
    'about.contactUs': 'Contact Us',
    'about.contactUs.desc': 'Call us to get more information about our natural and healthy turkeys or to place an order.',
    'about.contactPage': 'Contact Page',

    // Gallery Page
    'gallery.title': 'Turkey Gallery',
    'gallery.subtitle': 'Discover our healthy turkeys raised in natural environment. Each one is carefully cared for and raised with natural feeding.',
    'gallery.contactForOrder': 'Contact Us for Your Favorite Turkey',
    'gallery.contactForOrder.desc': 'Do you like any of our turkeys in the gallery? Call now to place an order!',
    'gallery.viewDetails': 'View Details',
    'gallery.specifications': 'Specifications',
    'gallery.age': 'Age',
    'gallery.weight': 'Weight',
    'gallery.status': 'Status',
    'gallery.healthy': 'Healthy',
    'gallery.description': 'Description',
    'gallery.contactNow': 'Contact Now',
    'gallery.contactNow.desc': 'Contact us to get information about this turkey',
    'gallery.callNow': 'Call Now',

    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us to get information about our natural turkeys or to place an order.',
    'contact.phone': 'Phone',
    'contact.phone.desc': 'Call now for information',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.desc': 'Send a message, we will respond quickly',
    'contact.location': 'Location',
    'contact.location.desc': 'Visit our farm',
    'contact.workingHours': 'Working Hours',
    'contact.workingHours.weekdays': 'Monday - Saturday:',
    'contact.workingHours.weekdays.time': '08:00 - 18:00',
    'contact.workingHours.sunday': 'Sunday:',
    'contact.workingHours.sunday.time': '09:00 - 16:00',
    'contact.quickContact': 'Quick Contact',
    'contact.quickContact.desc': 'For urgent matters, you can call directly or send a message via WhatsApp.',
    'contact.faq': 'Frequently Asked Questions',
    'contact.faq.minOrder': 'What is the minimum order quantity?',
    'contact.faq.minOrder.answer': 'We do not have a minimum order quantity. You can order even a single turkey.',
    'contact.faq.delivery': 'Do you deliver?',
    'contact.faq.delivery.answer': 'We deliver to all 81 provinces. Please contact us for details.',
    'contact.faq.feeding': 'How are the turkeys fed?',
    'contact.faq.feeding.answer': 'All our turkeys are fed with natural feed and grass, without using any chemicals.',

    // Turkey Data
    'turkey.whiteTurkey': 'White Turkey',
    'turkey.bronzeTurkey': 'Bronze Turkey',
    'turkey.youngTurkey': 'Young Turkey',
    'turkey.bigTurkey': 'Big Turkey',
    'turkey.femaleTurkey': 'Female Turkey',
    'turkey.maleTurkey': 'Male Turkey',
    'turkey.whiteTurkey.desc': 'Healthy and strong white turkey. Raised in natural environment.',
    'turkey.bronzeTurkey.desc': 'Traditional bronze colored turkey. Very active and healthy.',
    'turkey.youngTurkey.desc': 'Young and lively turkey. A rapidly developing healthy individual.',
    'turkey.bigTurkey.desc': 'Mature and large turkey. Has excellent meat quality.',
    'turkey.femaleTurkey.desc': 'Healthy female turkey. Very calm and docile character.',
    'turkey.maleTurkey.desc': 'Strong male turkey. Has very well developed muscle structure.',

    // Loading Screen
    'loading.title': 'Murat Turkey Farm',
    'loading.subtitle': 'Natural Turkey Production',
    'loading.text': 'Loading natural turkeys from Kahramanmaraş/Afşin...',
    'loading.loading': 'Loading...',

    // Units
    'units.months': 'Months Old',
    'units.kg': 'kg',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
