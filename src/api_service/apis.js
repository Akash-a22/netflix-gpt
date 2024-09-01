import axios from "axios";
import { OPTIONS } from "../utils/constants";
const api = axios.create();

export const getMoive = async () => {
  try {
    const response = await api.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieTrailorById = async (movieId) => {
  try {
    const response = await api.get(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      OPTIONS
    );
    return response?.data?.results;
  } catch (error) {
    throw error;
  }
};
