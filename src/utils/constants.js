export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};

export const getTrendingNumber = () => {
  return Math.floor(Math.random() * 20);
};

export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";
