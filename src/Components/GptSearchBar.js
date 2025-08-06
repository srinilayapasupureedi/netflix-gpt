import React from 'react';
import { useSelector } from 'react-redux';
import {lang}  from '../utils/languageConstants';
const GptSearchBar = () => {
   const langKey=useSelector((store)=>store.config.lang);
   console.log("langKey", langKey);
  return (
    
    <div className='pt-[10%] flex justify-center '>
      
      <form className=' w-1/2 bg-black grid grid-cols-12'>
        <input type="text" className='col-span-9 my-2 mx-2 px-2 py-2' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='bg-red-700 px-2 py-2 col-span-3 my-2 mx-2 rounded-lg text-white'>{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
