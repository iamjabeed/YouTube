import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex pt-[13vh]">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
