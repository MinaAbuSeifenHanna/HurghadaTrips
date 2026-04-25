"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Phone, Mail, MapPin, MessageCircle, Send, User, AtSign, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t, lang } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="h-1.5 w-24 bg-sky-500 rounded-full mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 rounded-[2rem] bg-sky-50 border border-sky-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-sky-600 flex items-center justify-center shrink-0 shadow-lg shadow-sky-200">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-1">{t('contact.info.phone')}</p>
                <p className="text-xl font-black text-slate-900">01020738214</p>
                <p className="text-slate-500 text-sm mt-1">Mina Abu Seifen</p>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-amber-50 border border-amber-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-200">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">WhatsApp</p>
                <a 
                  href="https://wa.me/201020738214" 
                  className="text-xl font-black text-slate-900 hover:text-amber-600 transition-colors"
                >
                  +20 102 073 8214
                </a>
                <p className="text-slate-500 text-sm mt-1">{lang === 'en' ? 'Available 24/7' : 'متاح 24/7'}</p>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 shadow-lg shadow-slate-200">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{t('contact.info.address')}</p>
                <p className="text-xl font-black text-slate-900">Hurghada, Red Sea</p>
                <p className="text-slate-500 text-sm mt-1">Egypt</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                      <User className="w-4 h-4 text-sky-500" />
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all"
                      placeholder="Mina Abu Seifen"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                      <AtSign className="w-4 h-4 text-sky-500" />
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all"
                      placeholder="mina@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                    <MessageSquare className="w-4 h-4 text-sky-500" />
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    rows="6"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all resize-none"
                    placeholder={lang === 'en' ? 'How can we help you?' : 'كيف يمكننا مساعدتك؟'}
                  />
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto px-12 py-5 text-lg font-black shadow-xl shadow-sky-200">
                  <Send className="w-5 h-5 rtl:rotate-180" />
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
