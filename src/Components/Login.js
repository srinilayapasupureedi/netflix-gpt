import React from 'react';
import Header from './Header';
import {useState,useRef } from 'react';
import {checkValidation} from '../utils/validate';
import  { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email= useRef(null);
  const Password= useRef(null);
  const fullName= useRef(null); 
  // Validate the form inputs
  // This function checks if the email, password, and full name are valid

  const handleButtonClick = () => {
    const message = signInForm
    ? checkValidation(email.current.value, Password.current.value,null) // Sign-in (no fullName)
    : checkValidation( // Sign-up (with fullName)
        email.current.value,
        Password.current.value,
        fullName.current.value
      );

  if (message) {
    setErrorMsg(message);
    return;
  }
    if(!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate('/browse');
        }).catch((error) => {
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(errorMessage+"- "+errorCode);
      // ..
    });
  }
   else{
    signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/browse');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage+"- "+errorCode);
  });
   }
  };
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  return <div>
    <Header />
    <div className='absolute w-full h-full bg-cover opacity-88'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
    alt="bg-img"/>
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='absolute w-3/12 bg-black my-36  mx-auto left-0 right-0 p-8 rounded-lg text-white opacity-80'
    >
      <h1
        className='text-2xl font-bold py-4'
      >
        {signInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!signInForm && (
        <input
          type="text"
          ref={fullName}
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-800'
        />

      )}
  
      <input
        type="text"
        ref={email}
        placeholder='Email or phone number'
        className='p-4 my-4 w-full bg-gray-800'
      />
    
      <input
        type="password"
        ref={Password}
        placeholder='Password'
        className='p-4 my-4 w-full bg-gray-800'
      />
     
      <button
        type="submit"
        onClick={handleButtonClick}
        className='bg-red-700 p-4 my-6 rounded-lg w-full cursor-pointer'
      >
        {signInForm ? "Sign In" : "Sign Up"}
      </button>
       <p className='text-red-500'>{errorMsg}</p>
      <p
        onClick={toggleSignInForm}
        className='cursor-pointer hover:underline'
      >
        {signInForm ?
         "New to Netflix? Sign Up" :
         "Already have an account? Sign In"}
      </p>
    </form>
  </div>
};

export default Login;
