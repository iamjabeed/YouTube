import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
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
    setVideos(json?.items)
  }
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3.5 gap-y-4 pt-4 pl-4 border-2 border-purple-700">
    {videos.map((video)=>{
      return <VideoCard key={video.id} info={video} />
    })}
      
    </div>
  );
};

export default VideoContainer;
