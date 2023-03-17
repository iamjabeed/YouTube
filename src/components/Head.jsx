import React from "react";
import { RxHamburgerMenu,  } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import ytLogo from "../assets/YouTube-Logo.png";

const Head = () => {
  return (
    <div>
      <div className="">
        <RxHamburgerMenu />
        <img src={ytLogo} alt="logo" className="h-20" />
      </div>
      <div>
        <input type="text" className="flex border border-gray-500" />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Head;
