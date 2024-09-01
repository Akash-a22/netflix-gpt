import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { getTopRatedMovies, getUpComingMovies } from "../api_service/apis";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies.movie);
  const [popularMovies, setPopularMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  useEffect(() => {
    getUpComingMoviesList();
    getTopRatedMovieList();
  }, []);
  async function getUpComingMoviesList() {
    getUpComingMovies().then((response) => {
      setPopularMovies(response);
    });
  }
  async function getTopRatedMovieList() {
    getTopRatedMovies().then((response) => {
      setTopRatedMovies(response);
    });
  }
  return (
    <div className="bg-black">
      <div className=" -mt-52 relative z-20 ">
        {movie && <MovieList title="Now Playing Movies" movie={movie} />}
        {popularMovies && (
          <MovieList title="Popular Movies" movie={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title="Top Rated Movies" movie={topRatedMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
