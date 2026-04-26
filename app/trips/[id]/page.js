"use client";

import React, { useState, use } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import ImageSlider from '@/components/ImageSlider';
import BookingModal from '@/components/BookingModal';
import trips from '@/data/trips';
import { Clock, Tag, Calendar, MapPin, ChevronRight, MessageCircle, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TripDetails({ params }) {
  const { id } = use(params);
  const { t, lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trip = trips.find(t => t.id === id);

  if (!trip) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-black mb-6">Trip Not Found</h1>
        <Link href="/our-trips" className="btn-primary inline-flex">Back to Trips</Link>
      </div>
    );
  }

  const title = trip.title[lang];
  const description = trip.description[lang];

  return (
    <div className="pt-24 pb-24">
      {/* Hero Header with Slider */}
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <Link href="/our-trips" className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors font-bold">
              {lang === 'ar' ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              {lang === 'en' ? 'Back to all trips' : 'العودة لجميع الرحلات'}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 font-bold text-sm">
                    {trip.category}
                  </span>
                  {trip.isVIP && (
                    <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-600 font-bold text-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      VIP
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                  {title}
                </h1>

                <div className="flex flex-wrap gap-8 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <Clock className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t('trips.duration')}</p>
                      <p className="font-bold text-slate-900">{trip.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                      <p className="font-bold text-slate-900">Hurghada, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Verified</p>
                      <p className="font-bold text-slate-900">Safety First</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm mb-12">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    {t('tripDetails.description')}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Gallery & Booking Sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="space-y-8">
                <ImageSlider images={trip.images} title={title} />
                
                <div className="p-8 rounded-[2.5rem] bg-white border-2 border-sky-100 shadow-2xl shadow-sky-100/50">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{t('trips.priceFrom')}</p>
                      <p className="text-4xl font-black text-slate-900">${trip.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block mb-1 italic">Best Price Guaranteed</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary w-full py-5 text-xl font-black shadow-xl shadow-sky-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                    {t('trips.bookNow')}
                  </button>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    Secure booking via WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.filter(t => t.id !== id).slice(0, 3).map(trip => (
              <div key={trip.id} className="scale-90">
                {/* Simplified card for recommendations */}
                <Link href={`/trips/${trip.id}`} className="group block rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                   <div className="relative h-48">
                      <Image src={trip.images[0]} alt={trip.title[lang]} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <div className="p-6">
                      <h3 className="font-bold text-slate-800 mb-2">{trip.title[lang]}</h3>
                      <p className="text-sky-600 font-black">${trip.price}</p>
                   </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tripTitle={title} 
      />
    </div>
  );
}
