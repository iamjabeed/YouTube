import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);
  async function getVideoData() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json?.items);
  }
  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3.5 gap-y-4 pt-4 pl-4 ">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
