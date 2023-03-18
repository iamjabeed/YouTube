import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  // console.log(info);
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  // console.log(snippet);
  // console.log(statistics);
  return (
    <div className="bg-white mx-2 item-center">
      <div className="w-60 md:w-full h-60 sm:h-64 shadow-lg rounded hover:shadow-gray-500 hover:scale-105 transition-all duration-500 ">
        <img
          src={info?.snippet?.thumbnails?.medium?.url}
          className="w-72 rounded-md"
          alt="thumbnail"
        />
        <h1 className="py-2 text-[10px] sm:text-[12px] font-bold overflow-hidden px-2">
          {info?.snippet?.title}
        </h1>
        <div className="flex items-center px-2">
          <ul className="flex items-center  text-gray-800">
            <li className="mr-2 text-[12px]">{info?.snippet?.channelTitle}</li>
            <li className="text-[12px]">{info?.statistics?.viewCount} Views</li>
          </ul>
          {/* <div >{info?.snippet?.channelTitle}</div>
          <div>{info?.statistics?.viewCount} Views</div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
