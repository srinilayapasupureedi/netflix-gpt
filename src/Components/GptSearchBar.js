import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addGptSearchMoviesandSuggestions } from "../utils/gptSlice";
import { lang } from "../utils/languageConstants";
import { API_OPTIONS} from "../utils/constants";
import {BG_IMG } from "../utils/constants";


const GPTSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchMovieDataInTMDB = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

    try {
      const res = await fetch(url, API_OPTIONS);
      const json = await res.json();
      console.log(json.results);
      return json?.results;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    setLoading(true);
    const gptQuery =
          "Act as a Movie Recommendation system and suggest some movies for the query: " +
          searchText.current.value +
          ". only give me names of 5 movies with comma seperated excluding any other text such '\n' . Example result is given ahead Example Result: Sita Ramam, andala rakshashi, nuvve nuvve, krish, Life is Beautiful";
    const gptResults= await openai.chat.completions.create({
      model: 'gpt-5-nano',
      messages: [
        { role: 'developer', content:  gptQuery },
        
      ],
    });
    if(!gptResults)
    {
      return;
    }

 console.log(gptResults.choices?.[0]?.message?.content);
//  const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
//  const promiseArray=gptMovies.map((movie)=> searchMovieDataInTMDB(movie));
//  const tmdbResults= await Promise.all(promiseArray);
//  console.log(tmdbResults);
//  dispatch(addGptSearchMoviesandSuggestions({movieNames:gptResults,movieResults:tmdbResults}));
//   };
  const gptMovies = gptResults.choices?.[0]?.message?.content
  ?.split(",")
  .map((m) => m.trim());   // cleanup spaces

const promiseArray = gptMovies.map((movie) => searchMovieDataInTMDB(movie));

const tmdbResults = await Promise.all(promiseArray);

dispatch(
  addGptSearchMoviesandSuggestions({
    movieNames: gptMovies,    // ✅ Correct
    movieResults: tmdbResults
  })
);
  };


  
  //   const moviesResultsArr = await Promise.all(moviesDataArr);
  //   dispatch(
  //     addGptSearchMoviesandSuggestions({
  //       movies: moviesArr,
  //       suggestions: moviesResultsArr,
  //     })
  //   );
  //   setLoading(false);
  // };

  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="bg-img"
          className="h-screen object-cover w-screen"
        />
      </div>
      <div className="pt-[50%] md:pt-[10%] w-screen lg:w-2/4 flex items-center justify-center mx-auto">
        <form
          className="grid grid-cols-12 w-full px-2 py-2 bg-black rounded-md md:gap-4 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="col-span-10 px-1 md:px-4 py-2 rounded-md border-none bg-gray-300 text-black focus:outline-none"
            placeholder={lang[language].gptSearchPlaceholder}
            ref={searchText}
          />
          <button
            className="col-span-2 bg-red-500 px-2 py-2 font-bold text-white rounded-md cursor-pointer"
            onClick={handleGptSearch}
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              lang[language].search
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
