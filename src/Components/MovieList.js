import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-6'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide space-x-2 no-scrollbar'>
        {movies?.map((movie) => (
          <div key={movie.id} className='snap-start'>
            <MovieCard poster_path={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
