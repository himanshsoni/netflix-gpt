import React, { useEffect } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { NETFLIX_BG } from "../utils/constant";
import { useDispatch } from "react-redux";
import {clearGptMovies} from "../utils/gptSlice"

const GptSearch = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    return ()=>{
      dispatch(clearGptMovies());
    }
  },[])
  return (
    <div>
      <div className="fixed -z-10">
        <img className="w-screen h-screen" src={NETFLIX_BG} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
