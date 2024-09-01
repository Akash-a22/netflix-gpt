import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movie }) => {
  if (movie === null) return;
  return (
    <div>
      <div className="p-6">
        <div className="font-semibold text-white  text-xl">
          Now Playing Movies{" > "}
        </div>
        <div className="flex overflow-x-auto no-scrollbar ">
          <div className="flex">
            {movie.map((m) => (
              <MovieCards movie={m} key={m.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
