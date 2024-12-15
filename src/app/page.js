"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/pages/Header';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-yellow-50 text-black'} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      
      {/* <Link href='/auth'>Login</Link> */}
    </div>
  );
}