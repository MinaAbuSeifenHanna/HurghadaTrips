"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { Phone, MapPin, MessageCircle, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tighter text-white">
                HURGHADA<span className="text-amber-500">TRAVEL</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-sky-600 transition-colors text-white">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-sky-600 transition-colors text-white">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://wa.me/201020738214" className="p-2 bg-slate-800 rounded-lg hover:bg-sky-600 transition-colors text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.links')}</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-sky-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/our-trips" className="hover:text-sky-400 transition-colors">{t('nav.ourTrips')}</Link></li>
              <li><Link href="/vip-trips" className="hover:text-sky-400 transition-colors">{t('nav.vipTrips')}</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <span>01020738214</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Hurghada, Red Sea, Egypt</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-sky-400 shrink-0" />
                <span>WhatsApp: +20 102 073 8214</span>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Mina Abu Seifen</h3>
            <p className="text-slate-400 text-sm mb-4 italic">
              "Your journey is our passion. We treat every traveler like family."
            </p>
            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Office Hours</p>
              <p className="text-sm text-white">Everyday: 9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Mina Abu Seifen. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
