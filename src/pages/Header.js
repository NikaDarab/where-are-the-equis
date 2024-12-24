'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '@/context/AppContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { logOut } from '../../lib/firebase';

const handleSignOut = async () => {
  try {
    await logOut();
    setIsLoggedIn(false);
    router.push('/auth');
  } catch (error) {
    setMessage(error.message);
  }
};

export default function Header() {
  const { darkMode, toggleDarkMode, isLoggedIn, setIsLoggedIn, setMessage } =
    useContext(AppContext);
  return (
    <header
      className={`${
        darkMode ? 'bg-gray-900 text-yellow-50' : 'bg-yellow-50 text-gray-900'
      } w-full p-2`}
    >
      <div className='container mx-auto flex justify-between items-center mt-5 sm:mt-7'>
        <Link href='/'>
          <h1 className='text-xl sm:text-6xl font-bold pl-4'>
            Where Are The Equis?
          </h1>
        </Link>
        <div className='flex items-center space-x-4 pr-4'>
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
            {isLoggedIn ? 'Logout' : 'Login'}
          </Link>
        </div>
      </div>
    </header>
  );
}
