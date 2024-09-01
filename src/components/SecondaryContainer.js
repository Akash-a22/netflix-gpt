import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies.movie);
  return (
    <div className="bg-black">
      <div className=" -mt-52 relative z-20 ">
        <MovieList title="Now Playing Movies" movie={movie} />
        <MovieList title="Popular Movies" movie={movie} />
        <MovieList title="Upcoming Movies" movie={movie} />
        <MovieList title="Trending Movies" movie={movie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
