import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { getTrendingNumber } from "../utils/constants";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.movie);
  if (movie === null) return;
  const trendingMovie = movie[getTrendingNumber()];
 
  const { original_title, overview ,id } = trendingMovie;
  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
