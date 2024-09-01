export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTIzMDk1NWMyYTA5MThmNmU3NDAyNjcyZjE2NmZhNiIsIm5iZiI6MTcyNTEyNTkwNy4wMDkwOTgsInN1YiI6IjY2ZDM1NDE1ZjQ1OWZhNzdlNTAzZGI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g7bZMu2UR24mz0dd__i1NidGcZALtiQ_4nZ6Chbqo0A",
  },
};

export const getTrendingNumber = () => {
  return Math.floor(Math.random() * 20);
};
