import { useDispatch } from "react-redux";
import { addNowPlayinMovies } from "../utils/movieSlice";
import { getMoive } from "../api_service/apis";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieList();
  }, []);
  async function getMovieList() {
    return await getMoive().then((response) => {
      dispatch(addNowPlayinMovies(response?.results));
    });
  }
};

export default useNowPlayingMovies;
