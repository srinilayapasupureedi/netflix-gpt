import React from 'react';
import Header from './Header';
import { useState } from 'react';
const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return <div>
    <Header />
    <div className='absolute w-full h-full bg-cover opacity-88'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
    alt="bg-img"/>
    </div>
    <form className='absolute w-3/12 bg-black my-36  mx-auto left-0 right-0 p-8 rounded-lg text-white opacity-80'>
      <h1 className='text-2xl font-bold py-4'>{signInForm ? "Sign In" : "Sign Up"}</h1>
      {!signInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />}
      <input type="text" placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-800' />
      <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
      <button type="submit"  className='bg-red-700 p-4 my-6 rounded-lg w-full cursor-pointer'> {signInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleSignInForm} className='cursor-pointer hover:underline'>{signInForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}</p>
    </form>
  </div>
};

export default Login;
