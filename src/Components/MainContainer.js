import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    console.log("No movies present");
    return null; // or return <div>Loading...</div>;
  }

  const mainMovie = movies[0];
  const { original_title = "No Title", overview = "No Overview Available",id="null" } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/> 
    </div>
  );
};
export default MainContainer;
