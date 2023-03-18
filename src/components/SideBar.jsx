import React from "react";
import home from "../assets/sidebar-images/home-side.svg";
import explore from "../assets/sidebar-images/explore-side.svg";
import subcription from "../assets/sidebar-images/subscriptions-side.svg";
import originals from "../assets/sidebar-images/originals-side.svg";
import youtubeMusic from "../assets/sidebar-images/youtube-music-side.svg";
import library from "../assets/sidebar-images/library-side.svg";
import { useSelector } from "react-redux";
import MobileSideBar from "./MobileSideBar";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-[5rem] pt-4 lg:w-40 xl:w-48">
      <div className="px-0 align-middle ">
        <div className="flex items-center flex-col xl:flex-row my-1 py-1 hover:bg-[#E0DDDD] cursor-pointer transition xl:mx-4">
          {/* <Link to={"/"}> */}
            <img src={home} alt="home" className="h-4 sm:h-6 lg:h-8" />

            <span className="font-medium text-sm xl:text-base  xl:ml-4">
              Home
            </span>
          {/* </Link> */}
        </div>
        <div className="flex items-center flex-col xl:flex-row my-1 py-1 hover:bg-[#E0DDDD] cursor-pointer transition xl:mx-4">
          <img
            src="data:image/png;base64,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"
            alt="Shorts"
            className="h-4 sm:h-6 lg:h-8"
          />
          <span className="ml-4 text-sm xl:text-base ">Shorts</span>
        </div>
        <div className="flex items-center flex-col xl:flex-row my-1 py-1 hover:bg-[#E0DDDD] cursor-pointer transition xl:mx-4">
          <img src={library} alt="library" className="h-4 sm:h-6 lg:h-8" />
          <span className="ml-4 text-sm xl:text-base ">Library</span>
        </div>
        <div className="flex items-center flex-col xl:flex-row my-1 py-1 hover:bg-[#E0DDDD] cursor-pointer transition xl:mx-4">
          <img src={explore} alt="explore" className="h-4 sm:h-6 lg:h-8" />
          <span className="ml-4 text-sm xl:text-base ">Explore</span>
        </div>
        <div className="flex items-center flex-col xl:flex-row my-1 py-1 hover:bg-[#E0DDDD] cursor-pointer transition xl:mx-4">
          <img
            src={subcription}
            alt="subcription"
            className="h-4 sm:h-6 lg:h-8"
          />
          <span className="ml-4 text-sm xl:text-base">Subcription</span>
        </div>
        <div className="flex items-center flex-col xl:flex-row my-1 py-1 hover:bg-[#E0DDDD] cursor-pointer transition xl:mx-4">
          <img
            src={youtubeMusic}
            alt="youtubeMusic"
            className="h-4 sm:h-6 lg:h-8"
          />
          <span className="ml-4 text-sm xl:text-base">Music</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
