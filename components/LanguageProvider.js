"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/data/translations/en.json';
import ar from '@/data/translations/ar.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    switchLanguage(savedLang);
  }, []);

  const switchLanguage = (newLang) => {
    setLang(newLang);
    setTranslations(newLang === 'ar' ? ar : en);
    localStorage.setItem('lang', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations;
    for (const key of keys) {
      if (value[key] === undefined) return path;
      value = value[key];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
