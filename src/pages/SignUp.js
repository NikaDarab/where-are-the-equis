import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { signUp } from '../../lib/firebase';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const { formData, setFormData, setIsLoggedIn, setIsSignUp } =
    useContext(AppContext);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      setIsLoggedIn(true);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className='w-full p-2 mb-3   rounded   text-yellow-50'
    >
      <h1 className='text-2xl text-center'>Sign Up</h1>
      <div className='my-3'>
        <input
          placeholder='First Name'
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-yellow-50'
        />
      </div>
      <div className='mb-3'>
        <input
          placeholder='Last Name'
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
          className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-yellow-50'
        />
      </div>
      <div className='mb-3'>
        <input
          placeholder='Email'
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-yellow-50'
        />
      </div>
      <div className='mb-3'>
        <input
          placeholder='Password'
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
          className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-yellow-50'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='pod' className='block mb-1'>
          Pick your pod:
        </label>
        <select
          id='pod'
          name='pod'
          value={formData.pod}
          onChange={handleChange}
          required
          className='w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-yellow-50'
        >
          <option value=''>Select a pod</option>
          <option value='Bud & Lisa'>Bud & Lisa</option>
          <option value='Chris & Ashley'>Chris & Ashley</option>
          <option value='Kyler & Nika'>Kyler & Nika</option>
        </select>
      </div>
      <div className='flex justify-between'>
        <button
          type='submit'
          className='w-auto p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
        >
          Sign Up
        </button>
        <button
          onClick={() => setIsSignUp(false)}
          className='w-autp p-2  text-white rounded underline'
        >
          Already a member? Sign In
        </button>
      </div>
    </form>
  );
}
