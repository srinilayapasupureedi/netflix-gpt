import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const trailers = json.results.filter(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    const trailer = trailers.find(t => t.name === 'Official Trailer') || trailers[0] || json.results[0];
    console.log(trailer);

    if (trailer) {
      dispatch(addTrailerVideo(trailer));
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, []);
}

export default useMovieTrailer;
