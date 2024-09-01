import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movie }) => {
  if (movie === null) return;
  return (
    <div>
      <div className="p-6">
        <div className="font-semibold text-white  text-xl mb-2">
          {title + " > "}
        </div>
        <div className="">
          <div className="flex overflow-x-scroll no-scrollbar ">
            <div className="flex flex-nowrap">
              {movie.map((m) => (
                <MovieCards movie={m} key={m.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
