import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video
     pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black"
    >
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-5 w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-16 mx-2 rounded-md text-xl hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="bg-white text-black p-4 px-16 mx-2 rounded-md text-xl hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
