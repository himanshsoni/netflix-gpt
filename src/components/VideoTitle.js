import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video
     pt-[20%] px-6  md:px-20 absolute text-white bg-gradient-to-r from-black"
    >
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-lg py-5 w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black py-1 my-4 md:py-4 px-4 mx-2 rounded-md text-xl hover:bg-opacity-80 ">
          ▶️ Play
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
