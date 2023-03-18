import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="bg-[#f6f6f6] p-2 flex flex-col">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
