import React from "react";
import { useNavigate } from "react-router-dom";

const MainNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full h-[50px] bg-slate-400">
      <div className="font-bold ml-5 p-4">Arunkumar</div>
      <div className="flex w-full justify-center">
        <div onClick={() => navigate("/")} className="p-4 cursor-pointer">
          Home
        </div>
        <div onClick={() => navigate("/About")} className="p-4 cursor-pointer">
          About
        </div>
        <div
          onClick={() => navigate("/Gallary")}
          className="p-4 cursor-pointer"
        >
          Gallary
        </div>
        <div
          onClick={() => navigate("/Contact")}
          className="p-4 cursor-pointer"
        >
          Contact
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
