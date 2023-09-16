import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-36 md:w-48 pr-4 rounded-md">
      <img src={TMDB_IMG_URL + poster_path} alt="movie-logo" />
    </div>
  );
};

export default MovieCard;
