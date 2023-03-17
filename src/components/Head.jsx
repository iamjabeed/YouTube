import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import ytLogo from "../assets/YouTube-Logo.png";
import upLoad from "../assets/upload.svg";
import notification from "../assets/notifications-icon.svg";
import myChannel from "../assets/my-channel.jpg";
import humbergerMenu from "../assets/hamburger-menu.svg";
import searchIcon from "../assets/search-icon.svg";
import VoiceSearchIcon from "../assets/voice-search-icon.svg";

const Head = () => {
  return (
    <div className="flex justify-between z-50 static items-center px-4 py-2 shadow-md">
      <div className="flex justify-between items-center cursor-pointer">
        <img
          src={humbergerMenu}
          alt="humbergerMenu"
          className="h-8 sm:h-10 lg:h-14"
        />
        <img src={ytLogo} alt="logo" className="ml-4 h-8 sm:h-12 xl:h-16" />
      </div>
      <div className="flex justify-between items-center sm:grow  cursor-pointer align-middle mx-0 sm:mx-4 md:mx-8">
        <input
          type="text"
          className="flex border border-gray-500 ml-4 w-40 sm:w-full py-2 rounded-l-full"
        />
        <button className="bg-gray-200 rounded-r-full py-[3px] px-2">
          <img src={searchIcon} alt="searchIcon" className="h-9" />
        </button>
        <img
          src={VoiceSearchIcon}
          alt="VoiceSearchIcon"
          className="h-10 mx-2 bg-gray-200 rounded-full p-2"
        />
      </div>
      <div className="hidden sm:flex justify-between items-center gap-2 cursor-pointer">
        <img src={upLoad} alt="upload" className="sm:h-6 md:h-8 xl:h-14" />
        <img
          src={notification}
          alt="notification"
          className="sm:h-6 md:h-8 xl:h-14"
        />
        <img
          src={myChannel}
          alt="myChannel"
          className="rounded-full sm:h-6 md:h-8 xl:h-14"
        />
      </div>
    </div>
  );
};

export default Head;
