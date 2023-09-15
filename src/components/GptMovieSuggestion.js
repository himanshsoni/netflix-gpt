import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovies } = useSelector((store) => store.gpt);
  if (!gptMovies) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white w-screen">
      <div>
        {gptMovies.map((movie) => (
          <>
            <MovieList title={movie.name} movies={movie} />
          </>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
