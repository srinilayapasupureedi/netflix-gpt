import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  // ✅ Strong guard so .map never runs unless it is really array
  if (!Array.isArray(movieNames) || !Array.isArray(movieResults)) {
    return null;
  }

  return (
    <div className="mt-2 bg-black text-white bg-opacity-85">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index] ?? []}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
