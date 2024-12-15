'use client';
import React, { useState, useContext } from 'react';
import { AppContext } from '@/context/AppContext';
export default function AuthPage() {
  const { darkMode } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      setMessage('Sign up successful');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      setMessage('Sign in successful');
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
     
     <div className={`${ darkMode ? 'bg-gray-900 text-yellow-50' : 'bg-yellow-50 text-gray-900'} flex  justify-center min-h-screen items-center text-2xl`}> 
      <div className='w-full max-w-md p-8 space-y-6 rounded shadow-md h-[50%] mb-[15%]'> 
        {message && <p className='text-center text-red-500'>{message}</p>}
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-white'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-white'
        />
        <div className='flex justify-center'>
          <button
            onClick={handleSignIn}
            className='w-auto p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Sign In
          </button>
        </div>
        <div className='flex justify-evenly'>
          <div className='text-center mt-4'>
            <a
              href='#'
              onClick={handleForgotPassword}
              className='text-yellow-500 hover:underline !text-xl'
            >
              Forgot Password?
            </a>
          </div>
          <button
            onClick={handleSignUp}
            className='w-autp p-2 bg-green-500 text-white rounded hover:bg-green-700'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
