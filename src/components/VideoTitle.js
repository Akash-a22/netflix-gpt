import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className=" w-full pt-[20%] absolute  text-white aspect-video bg-gradient-to-r from-black pt-40 px-12 ">
      <h1 className="p-2 m-2 text-3xl font-bold">{original_title}</h1>
      <div className="p-2 m-2 w-1/3">{overview}</div>
      <div>
        <button className="p-2  m-2 w-36 h-10 font-semibold text-black  hover:bg-gray-500  bg-white rounded-md ">
          {" "}
          Play
        </button>
        <button className="p-2  m-2 w-36 h-10 font-semibold hover:bg-gray-600 bg-opacity-85 bg-gray-500 rounded-md ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
