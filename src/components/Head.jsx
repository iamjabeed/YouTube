import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import ytLogo from "../assets/YouTube-Logo.png";
import upLoad from "../assets/upload.svg";
import notification from "../assets/notifications-icon.svg";
import myChannel from "../assets/my-channel.jpg";
import humbergerMenu from "../assets/hamburger-menu.svg";
import searchIcon from "../assets/search-icon.svg";
import VoiceSearchIcon from "../assets/voice-search-icon.svg";
import { useDispatch } from "react-redux";
import { togglesMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetions, setShowSuggetions] = useState(false);
  // console.log(searchQuery);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggetions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(togglesMenu());
  };
  return (
    <div className="flex justify-between items-center px-4 shadow-md ">
      <div className="flex justify-between items-center cursor-pointer">
        <img
          src={humbergerMenu}
          alt="humbergerMenu"
          className="h-4 sm:h-6 xl:h-8"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img src={ytLogo} alt="logo" className="ml-4 h-8 sm:h-12 xl:h-16" />
        </a>
      </div>
      <div className="flex justify-between items-center sm:grow  max-w-2xl cursor-pointer align-middle mx-0 sm:mx-4 md:mx-8">
        <input
          type="text"
          className="flex border border-gray-500 ml-4 w-40 sm:w-full py-1 px-5 rounded-l-full outline-1 outline-[#1a73e8]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggetions(true)}
          onBlur={() => setShowSuggetions(false)}
        />
        <button className="bg-gray-200 rounded-r-full py-[2px] px-2">
          <img src={searchIcon} alt="searchIcon" className="h-8" />
        </button>
        <img
          src={VoiceSearchIcon}
          alt="VoiceSearchIcon"
          className="h-10 mx-2 bg-gray-200  rounded-full p-2"
        />
        {showSuggetions && (
          <div className="fixed top-12 z-50 w-[24] md:w-[34rem] xl:[36rem] ml-2 px-8 py-2 bg-white rounded-md shadow-md">
            <ul>
              {suggetions &&
                suggetions.map((suggestion, index) => {
                  return (
                    <div key={index}>
                      <li className="flex items-center py-[5px] px-2 hover:bg-gray-100">
                        <img
                          src={searchIcon}
                          alt="searchIcon"
                          className="h-4 mr-2"
                        />
                        <span>{suggestion}</span>
                      </li>
                    </div>
                  );
                })}
            </ul>
          </div>
        )}
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
