import React from "react";
import Image from "next/image";
import searchIcon from "../../../public/searchIcon.jpg";
import "tailwindcss/tailwind.css";
const Searchbar = (props: any) => {
    return (
      <div className="flex justify-center items-center w-full ">
        <div className="flex bg-gradient bg-transparent w-full">
          <Image className="h-4 w-4 mr-2 my-auto ml-5" src={searchIcon} alt="SearchIcon" />
          <input className="rounded-full px-4 py-2 w-full bg-inherit text-white outline-none" type="text" placeholder="Search" />
        </div>
      </div>
    );
  };

export default Searchbar;