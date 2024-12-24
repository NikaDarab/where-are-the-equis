import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { signIn } from '../../lib/firebase';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const { email, setEmail, password, setPassword, setIsSignUp, isLoggedIn, setIsLoggedIn } =
    useContext(AppContext);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      setIsLoggedIn(true);
      router.push('/');
    } catch (error) {
      console.error(error);
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
    <>
      <h1 className='text-2xl text-center'>Sign In</h1>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-yellow-50'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-white'
      />
      <div className='flex justify-between'>
        <button
          onClick={handleSignIn}
          className='w-auto p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
        >
          Sign In
        </button>
        <div className='text-center mt-4'>
          <button
            href='#'
            onClick={handleForgotPassword}
            className='text-yellow-500 underline !text-xl'
          >
            Forgot Password?
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsSignUp(true)}
        className='w-auto mt-[20px]  text-yellow-50 rounded underline'
      >
        Not a member? Sign Up
      </button>
    </>
  );
}
