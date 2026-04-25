"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import TripCard from '@/components/TripCard';
import trips from '@/data/trips';
import { ChevronRight, Compass, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const { t, lang } = useLanguage();
  const featuredTrips = trips.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/seatravel/wooden-handmade-boat-sea-sunlight-cloudy-sky.jpg"
            alt="Hero Background"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent rtl:bg-gradient-to-l" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-500/30 text-sky-400 text-sm font-bold uppercase tracking-wider mb-6">
              <Compass className="w-4 h-4" />
              {lang === 'en' ? 'Welcome to Hurghada' : 'مرحباً بكم في الغردقة'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/our-trips" className="btn-primary px-8 py-4 text-lg shadow-xl shadow-sky-600/20">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              <Link href="/contact" className="btn-secondary px-8 py-4 text-lg glass text-white border-white/30 hover:bg-white/10">
                {t('nav.contact')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats / Why Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: lang === 'en' ? 'Safe Travel' : 'سفر آمن', desc: lang === 'en' ? 'Certified guides and premium equipment for your safety.' : 'مرشدون معتمدون ومعدات متميزة لسلامتكم.' },
              { icon: Users, title: lang === 'en' ? 'Group Tours' : 'جولات جماعية', desc: lang === 'en' ? 'Enjoy the company of fellow travelers in organized groups.' : 'استمتع بصحبة المسافرين الآخرين في مجموعات منظمة.' },
              { icon: Compass, title: lang === 'en' ? 'Expert Guides' : 'مرشدون خبراء', desc: lang === 'en' ? 'Deep knowledge of local history and hidden gems.' : 'معرفة عميقة بالتاريخ المحلي والجواهر الخفية.' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4">{t('home.featured')}</h2>
              <div className="h-1.5 w-24 bg-sky-500 rounded-full" />
            </div>
            <Link href="/our-trips" className="hidden md:flex items-center gap-2 text-sky-600 font-bold hover:gap-3 transition-all">
              {t('home.viewAll')}
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/our-trips" className="btn-secondary w-full">
              {t('home.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center">
            <Image
              src="/images/sfarytravel/sunset-adventure.jpg"
              alt="CTA Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sky-900/80 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                {lang === 'en' ? 'Ready for Your Next Adventure?' : 'هل أنت مستعد لمغامرتك القادمة؟'}
              </h2>
              <p className="text-xl text-sky-100 mb-10 leading-relaxed">
                {lang === 'en' 
                  ? 'Contact us today to plan your custom trip to Hurghada, Luxor or Cairo.' 
                  : 'اتصل بنا اليوم لتخطيط رحلتك المخصصة إلى الغردقة أو الأقصر أو القاهرة.'}
              </p>
              <Link href="/contact" className="btn-primary bg-amber-500 hover:bg-amber-600 border-none text-slate-900 px-10 py-5 text-xl font-black">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
