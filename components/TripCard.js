"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { Clock, Tag, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const TripCard = ({ trip }) => {
  const { lang, t } = useLanguage();
  
  const title = trip.title[lang];
  const price = trip.price;
  const duration = trip.duration;
  const mainImage = trip.images[0];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col ${trip.isVIP ? 'vip-card' : ''}`}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {trip.isVIP && (
          <div className="vip-badge">
            {t('trips.vipBadge')}
          </div>
        )}
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
            {trip.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 line-clamp-1 group-hover:text-sky-600 transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Clock className="w-4 h-4 text-sky-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Tag className="w-4 h-4 text-amber-500" />
            <span>{trip.category}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-medium">{t('trips.priceFrom')}</span>
            <span className="text-2xl font-black text-slate-900">${price}</span>
          </div>
          
          <Link 
            href={`/trips/${trip.id}`}
            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300"
          >
            {lang === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TripCard;
