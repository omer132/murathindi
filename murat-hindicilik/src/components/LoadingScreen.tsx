'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Fade out delay
          return 100;
        }
        const increment = Math.random() * 10; // Smaller random increment
        const newProgress = prev + increment;
        return Math.min(newProgress, 100); // Ensure it never exceeds 100
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-900 flex items-center justify-center z-[9999] transition-opacity duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative text-center text-white">
        {/* Logo */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4 animate-pulse">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            <div className="relative w-full h-full bg-white/10 rounded-full p-4 border-2 border-white/30">
              <Image
                src="/hindilogo.png"
                alt="Murat Hindicilik Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">
            {t('loading.title')}
          </h1>
          <p className="text-xl text-green-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('loading.subtitle')}
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-green-200 mt-2">
            {t('loading.loading')} {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-green-200 mt-6 animate-pulse">
          {t('loading.text')}
        </p>
      </div>

      {/* Turkey Silhouette Animation */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-16 h-16 text-white animate-bounce">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 20 C30 20, 20 40, 20 60 C20 80, 40 90, 50 90 C60 90, 80 80, 80 60 C80 40, 70 20, 50 20 Z M50 15 C48 15, 46 17, 46 19 C46 21, 48 23, 50 23 C52 23, 54 21, 54 19 C54 17, 52 15, 50 15 Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
