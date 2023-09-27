import React from "react";
import LeftNav from "./SideNavBar/LeftNav";
import Sublnav from "./SideNavBar/SubLNav";
import Bottombar from "./SideNavBar/Bottombar";

const NavigationBar = () => {
  return (
    <div>
      <LeftNav />
      <Sublnav />
      <Bottombar />
    </div>
  );
};

export default NavigationBar;
