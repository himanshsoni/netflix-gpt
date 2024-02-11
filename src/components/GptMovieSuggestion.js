import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovies } = useSelector((store) => store.gpt);
  console.log(gptMovies);
  if (!gptMovies) return null;
  return <MovieList  movies={gptMovies.flat()} />;
};

export default GptMovieSuggestion;
