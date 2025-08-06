import React from 'react';
import {  IMG_CDN_PATH } from '../utils/constants';
const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 pr-2 rounded-lg'>
    <img src={ IMG_CDN_PATH + poster_path} alt="movie poster" />
    </div>
  );
};
export default MovieCard;