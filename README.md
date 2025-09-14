# Murat Hindicilik - Web Sitesi

Kahramanmaraş/Afşin'in bereketli topraklarında yetişen doğal hindiler için modern ve kullanıcı dostu web sitesi.

## 🦃 Proje Hakkında

Bu proje, Murat Hindicilik için özel olarak tasarlanmış bir web sitesidir. Site, müşterilerin hindileri görsel olarak incelemesine ve doğrudan iletişim kurmasına olanak sağlar.

### ✨ Özellikler

- **Modern Tasarım**: Next.js 15 ve Tailwind CSS ile responsive tasarım
- **SEO Optimizasyonu**: Meta etiketler ve yapılandırılmış veriler
- **Hızlı İletişim**: Telefon ve WhatsApp entegrasyonu
- **Galeri Sistemi**: Hindilerin detaylı görüntülenmesi
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- **Türkçe İçerik**: Tamamen Türkçe arayüz ve içerik

### 📱 Sayfalar

1. **Ana Sayfa**: Hoş geldin mesajı, özellikler ve hızlı iletişim
2. **Hakkımızda**: Şirket hikayesi, değerler ve konum bilgileri
3. **Hindiler Galerisi**: Hindilerin fotoğrafları ve detaylı bilgileri
4. **İletişim**: İletişim formu, telefon ve WhatsApp bağlantıları

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone <repository-url>
   cd murat-hindicilik
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 🛠️ Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Üretim için build alır
- `npm run start` - Üretim sunucusunu başlatır
- `npm run lint` - ESLint kontrolü yapar

## 📦 Teknoloji Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **TypeScript**: Type safety
- **ESLint**: Code quality

## 🎨 Tasarım

- **Ana Renkler**: 
  - Yeşil (#166534) - Doğallık ve güven
  - Sarı (#EAB308) - Dikkat çekici butonlar
  - Gri tonları - Modern ve temiz görünüm

- **Typography**: Geist Sans font ailesi
- **Responsive**: Mobile-first yaklaşımı

## 📞 İletişim Entegrasyonu

Site üzerinde birden fazla iletişim seçeneği bulunmaktadır:

- **Telefon**: `tel:+905551234567` - Doğrudan arama
- **WhatsApp**: Önceden tanımlanmış mesajlarla hızlı iletişim
- **İletişim Formu**: Web üzerinden mesaj gönderme

## 🌐 Deployment

### Vercel (Önerilen)

1. Vercel hesabınıza giriş yapın
2. Projeyi import edin
3. Otomatik deployment başlayacak
4. Custom domain ekleyebilirsiniz

### Diğer Platformlar

- **Netlify**: `npm run build` ve `out` klasörünü deploy edin
- **AWS/Azure**: Static hosting servisleri kullanın

## 📝 İçerik Güncelleme

### Hindi Bilgileri Güncelleme

`src/app/galeri/page.tsx` dosyasındaki `turkeyData` array'ini düzenleyerek hindi bilgilerini güncelleyebilirsiniz:

```typescript
const turkeyData = [
  {
    id: 1,
    name: "Beyaz Hindi",
    age: "6 Aylık",
    weight: "8-10 kg",
    description: "Açıklama...",
    image: "/path-to-image.jpg"
  },
  // ...
];
```

### İletişim Bilgileri

Tüm dosyalarda `+905551234567` numarasını kendi telefon numaranızla değiştirin.

### Görsel Ekleme

`public` klasörüne hindi fotoğraflarını ekleyip component'lerde referans verin.

## 🔧 Özelleştirme

### Renk Paleti Değiştirme

`tailwind.config.js` dosyasında renkleri özelleştirebilirsiniz.

### Font Değiştirme

`src/app/layout.tsx` dosyasında font import'larını değiştirin.

## 📊 SEO

Site SEO için optimize edilmiştir:

- Meta title ve description
- Structured data
- Semantic HTML
- Alt text'ler
- Sitemap (otomatik oluşturulur)

## 🚀 Performans

- **Next.js Image Optimization**: Otomatik görsel optimizasyonu
- **Static Generation**: Hızlı sayfa yükleme
- **Code Splitting**: Minimal JavaScript yükleme
- **Responsive Images**: Cihaza uygun görsel boyutları

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Branch'i push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 Destek

Herhangi bir sorun veya soru için:
- Email: [email@example.com]
- Telefon: 0555 123 45 67

---

**Murat Hindicilik** - Kahramanmaraş/Afşin'den doğal hindiler 🦃