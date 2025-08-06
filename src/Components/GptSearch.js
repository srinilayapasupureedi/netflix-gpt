import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constants';
const GptSearch = () => {
  return (
    <>
      <div className='absolute  -z-10 w-full h-full bg-cover opacity-88'>
          <img src={BG_IMG}
          alt="bg-img"/>
          </div>
       <GptSearchBar />
      <GptMovieSuggestions />
    </>
  );
};

export default GptSearch;
