import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="p-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
