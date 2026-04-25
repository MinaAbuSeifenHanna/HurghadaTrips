"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import TripCard from '@/components/TripCard';
import trips from '@/data/trips';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OurTrips() {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sea', 'Safari', 'Pyramids', 'History', 'Nile'];

  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trip.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || trip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {t('trips.title')}
          </h1>
          <div className="h-1.5 w-24 bg-sky-500 rounded-full" />
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 rtl:left-auto rtl:right-4" />
            <input
              type="text"
              placeholder={t('trips.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all shadow-sm rtl:pl-4 rtl:pr-12"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 rtl:right-auto rtl:left-4"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all ${
                  selectedCategory === cat 
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-200 scale-105' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'
                }`}
              >
                {t(`trips.categories.${cat.toLowerCase()}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-slate-500 font-medium">
          {lang === 'en' 
            ? `Showing ${filteredTrips.length} trips` 
            : `عرض ${filteredTrips.length} رحلة`}
        </div>

        {/* Trips Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTrips.map((trip) => (
              <motion.div
                key={trip.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TripCard trip={trip} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTrips.length === 0 && (
          <div className="text-center py-24 bg-slate-50 rounded-[3rem] border border-dashed border-slate-300">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-400">{t('trips.noResults')}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
