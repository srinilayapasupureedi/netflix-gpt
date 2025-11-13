import React from 'react';
import Header from './Header';
import {useState,useRef } from 'react';
import {checkValidation} from '../utils/validate';
import  { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';
const Login = () => {
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
   <div
  className="absolute inset-0 h-full w-full bg-cover bg-center opacity-90"
  style={{ backgroundImage: `url(${BG_IMG})` }}
  ></div>

          <p className="text-sm text-gray-400 italic pb-4 text-center">
        This is a demo project using Firebase Auth. Not affiliated with or endorsed by Netflix.
      </p>

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
