import React from "react";
import logo from "../Header//Logo.svg";
const Header = () => {
  return (
    <div className="flex  text-white w-full h-20 items-center justify-between bg-gray-800 px-20">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a className="pl-5" href="#">Home</a>
        <a className="pl-5" href="#">Home</a>
        <a className="pl-5" href="#">Home</a>
        <a className="pl-5" href="#">Home</a>
      </div>
    </div>
  );
};

export default Header;
