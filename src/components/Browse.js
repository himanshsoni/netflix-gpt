import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGpt = useSelector((store) => store.gpt.showGpt);
  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
