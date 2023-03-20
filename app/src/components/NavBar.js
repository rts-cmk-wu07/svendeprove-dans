import React from "react";
import {AiOutlineHome, AiOutlineSearch, AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="z-50 fixed bottom-0 w-full">
      <div className="bg-[#E9E9E9] h-[56px]">
        <div className="flex items-center justify-around pt-2 ">
          <Link to={"/aktiviteter"} className="border border-black rounded-full p-2 hover:bg-[#5E2E53]">
            <AiOutlineHome className="text-black text-2xl" />
          </Link>
          <Link to={"/search"} className="border border-black rounded-full p-2 ml-5 hover:bg-[#5E2E53]">
            <AiOutlineSearch className="text-black text-2xl" />
          </Link>
          <Link to={"/calandar"} className="border border-black rounded-full p-2 ml-5 hover:bg-[#5E2E53]">
            <AiOutlineCalendar className="text-black text-2xl" />
          </Link>
          <Link to={"/logind"} className="border border-black rounded-full p-2 ml-5 hover:bg-[#5E2E53]">
            <AiOutlineUser className="text-black text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
