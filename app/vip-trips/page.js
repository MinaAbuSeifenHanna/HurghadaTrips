"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import TripCard from '@/components/TripCard';
import trips from '@/data/trips';
import { Crown, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VipTrips() {
  const { t, lang } = useLanguage();
  const vipTrips = trips.filter(trip => trip.isVIP);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="pt-16 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            <Crown className="w-4 h-4" />
            {lang === 'en' ? 'Premium Experience' : 'تجربة فاخرة'}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            {t('trips.vipTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {lang === 'en' 
              ? 'Elevate your journey with our handpicked selection of elite travel experiences. Dedicated guides, private yachts, and luxury service.' 
              : 'ارتق برحلتك مع مجموعتنا المختارة من تجارب السفر النخبوية. مرشدون مخصصون، يخوت خاصة، وخدمة فاخرة.'}
          </motion.p>
        </div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Star, label: lang === 'en' ? 'Elite Services' : 'خدمات نخبوية' },
            { icon: Crown, label: lang === 'en' ? 'Private Tours' : 'جولات خاصة' },
            { icon: ShieldCheck, label: lang === 'en' ? 'All-Inclusive' : 'شامل كلياً' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-amber-500" />
              </div>
              <span className="font-bold text-slate-200">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {vipTrips.map((trip, idx) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <TripCard trip={trip} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-amber-600/20 to-sky-600/20 border border-white/10 text-center backdrop-blur-md">
          <h2 className="text-3xl font-black mb-6">
            {lang === 'en' ? 'Looking for Something Even More Exclusive?' : 'هل تبحث عن شيء أكثر حصرية؟'}
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            {lang === 'en' 
              ? 'Contact us for bespoke travel planning tailored exactly to your desires.' 
              : 'اتصل بنا لتخطيط سفر مفصل حسب رغباتك تماماً.'}
          </p>
          <a href="tel:01020738214" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 border-none px-10 py-4 text-lg">
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </div>
  );
}
