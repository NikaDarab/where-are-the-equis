"use client";
import React, {useContext} from 'react';
import { AppProvider,AppContext } from '@/context/AppContext'; 

export default function Home() { 

  
  const { darkMode } = useContext(AppContext);

  return (
    <AppProvider>
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-yellow-50 text-black'} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`} />
    </AppProvider>
  );
}