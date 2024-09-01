import React, { useEffect, useState } from "react";
import { getMovieTrailorById } from "../api_service/apis";

const useMovieTrailer = (movieId) => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    getMovieTrailor();
  }, []);
  async function getMovieTrailor() {
    const response = await getMovieTrailorById(movieId);

    const movieFilter = response.filter((videos) => videos.type === "Trailer");
    const finalMovie = movieFilter ? movieFilter[0] : response[0];

    setKey(finalMovie.key);
  }
  return key;
};

export default useMovieTrailer;
