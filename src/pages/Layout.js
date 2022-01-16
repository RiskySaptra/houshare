import React from "react";
import SideNav from "../components/SideNav";
import { itemList } from "../constants";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-row">
      <SideNav menuList={[...itemList]} />
      <Outlet />
    </div>
  );
}

export default Layout;
