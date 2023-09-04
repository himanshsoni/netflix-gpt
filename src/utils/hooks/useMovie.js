import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constant";
import { addTrailer } from "../moviesSlice";
import { useEffect } from "react";

const useMovie = (id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json.results.filter((video) => video.type === "Trailer");
    dispatch(addTrailer(trailer[0]));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovie;
