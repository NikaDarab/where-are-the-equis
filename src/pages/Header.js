import React from 'react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-yellow-50 text-black'} w-full`}>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl sm:text-6xl font-bold'>
          Where Are The Equis?
        </h1>
        <div className='flex items-center space-x-4'>
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full focus:outline-none'
          >
            {darkMode ? (
              <SunIcon className='w-6 h-6 text-yellow-500' />
            ) : (
              <MoonIcon className='w-6 h-6 text-gray-800' />
            )}
          </button>
          <Link href='/auth' className='font-bold text-l sm:text-4xl'>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}