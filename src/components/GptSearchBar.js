import React, { useRef } from "react";
import { openai } from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchTxt = useRef(null);
  const dispatch = useDispatch();

  const fetchMoviesTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchTxt.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Dhoom, Sholay, Don,Krish,Welcome";

    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!data.choices) {
    }

    const gptMovies = (data.choices?.[0]?.message.content).split(",");

    const promiseArray = gptMovies.map((movie) => fetchMoviesTMDB(movie));

    const moviesData = await Promise.all(promiseArray);
    dispatch(addGptMoviesResult(moviesData));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTxt}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What movie you would like to see?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-500 rounded-lg text-white"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
