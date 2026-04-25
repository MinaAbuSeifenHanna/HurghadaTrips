"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { X, Send, User, Phone, Users, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose, tripTitle }) => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    people: '1',
    date: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, people, date } = formData;
    let message = "";

    if (lang === 'en') {
      message = `Hello, I want to book a trip:\nTrip: ${tripTitle}\nName: ${name}\nPhone: ${phone}\nPeople: ${people}\nDate: ${date}`;
    } else {
      message = `مرحبا، أريد حجز رحلة:\nاسم الرحلة: ${tripTitle}\nالاسم: ${name}\nرقم الهاتف: ${phone}\nعدد الأشخاص: ${people}\nالتاريخ: ${date}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201020738214?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">
              {t('tripDetails.bookingForm.title')}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-sky-500" />
                {t('tripDetails.bookingForm.name')}
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-500" />
                {t('tripDetails.bookingForm.phone')}
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-500" />
                  {t('tripDetails.bookingForm.people')}
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-500" />
                  {t('tripDetails.bookingForm.date')}
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 px-6 rounded-2xl font-bold text-slate-500 hover:bg-slate-50 transition-colors"
              >
                {t('tripDetails.bookingForm.cancel')}
              </button>
              <button
                type="submit"
                className="flex-[2] btn-primary"
              >
                <Send className="w-5 h-5" />
                {t('tripDetails.bookingForm.submit')}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
