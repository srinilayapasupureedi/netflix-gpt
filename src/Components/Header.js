import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {LOGO, USER_AVATAR } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const user=useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  };
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  },[]);

  
  return (
    <div className ="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className='w-56 ' src={LOGO} alt="Netflix Logo" />
      {user && <div className='flex ml-2 items-center gap-4'>
        <img className='w-12 h-12 rounded-lg'
          src={USER_AVATAR}
          alt="Profile"/>

      <button
          className='bg-black rounded-lg  p-2  text-white'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
}


export default Header;