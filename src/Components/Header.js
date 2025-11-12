import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from '../utils/gptSlice';

import {changeLanguage} from  '../utils/configSlice';
const Header = () => {
  const dispatch = useDispatch();
  const user=useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
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
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange=(e)=>{
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));

  }
  
  return (
    <div className ="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"> 
      <img className='w-56 ' src={LOGO} alt="Netflix Logo" />
      {user &&
       <div className='flex ml-2 items-center gap-4'>
        {showGptSearch&&<select className='p-2 m-2 bg-gray-900 text-white rounded-lg'
         onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier} >
          
            {lang.name}
           </option>))}
        </select >}
         <button className='px-4 py-2 mx-4 my-2 bg-purple-800 text-white rounded-lg'
         onClick={handleGptSearchClick} >
         {showGptSearch?"Homepage":"GptSearch"}
        </button>
        <img className='w-12 h-12 rounded-lg'
          src={USER_AVATAR}
          alt="Profile"/>

      <button
          className='bg-gray-900 rounded-lg  p-2  text-white'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
}


export default Header;