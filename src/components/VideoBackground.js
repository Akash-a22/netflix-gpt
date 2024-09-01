import React, { useEffect, useState } from "react";
import { getMovieTrailorById } from "../api_service/apis";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
