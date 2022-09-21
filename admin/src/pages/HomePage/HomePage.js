import React from "react";
import Header from "../../components/Header/Header";
import {  Outlet } from "react-router-dom";
import "./dashboard.css";
import SideNav from "../../components/SideNav/SideNav";

const HomePage = () => {
  return (
    <>
      <div className="Dashboard vw-100 vh-100">
        <div className="d-flex w-100 h-100">
          <div className="leftSide d-none d-lg-block">
            <SideNav />
          </div>
          <div className="rightSide">
            <div className="w-100 shadow-lg dashheader">
              <Header />
            </div>
            <div className="w-100 dashMain">
              <div className="w-100 dashOutlet px-4 py-3">
              <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
