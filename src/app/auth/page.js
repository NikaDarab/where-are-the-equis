'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AppContext } from '@/context/AppContext';
import { signUp, signIn, logOut, forgotPassword } from '../../../lib/firebase';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

export default function AuthPage() {
  const {
    darkMode,
    email,
    setEmail,
    password,
    setPassword,
    message,
    setMessage,
    setIsLoggedIn,
    isSignUp,
    setIsSignUp,
  } = useContext(AppContext);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await logOut();
      setIsLoggedIn(false);
      router.push('/auth');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await forgotPassword(email);
      setMessage('Password reset email sent');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-yellow-50' : 'bg-yellow-50 text-gray-900'
      } flex  justify-center min-h-screen items-center text-2xl`}
    >
      <div className='w-full max-w-screen-lg p-8 space-y-6 rounded shadow-md h-[50%] mb-[15%]'>
        {message && <p className='text-center text-red-500'>{message}</p>}

        {isSignUp ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
}
