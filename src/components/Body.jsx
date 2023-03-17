import React from "react";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <VideoContainer />
    </div>
  );
};

export default Body;
