import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCards = ({ movie }) => {
  if (movie === null) return;
  const data = movie;
  return (
    <div className="h-52 pr-2 w-52 rounded-lg ">
      <img
        className="h-48 w-48 rounded-lg"
        src={POSTER_URL + data?.poster_path}
        alt={data?.title + " poster"}
      />
    </div>
  );
};

export default MovieCards;
