import { PiSidebarSimpleBold } from "react-icons/pi";
import { FaNotesMedical } from "react-icons/fa6";
import { PiCirclesFour } from "react-icons/pi";
import { RxCaretUp } from "react-icons/rx";
import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSparklesSharp } from "react-icons/io5";
export default function SideBar() {
  const allData = [
    "what is your name",
    "where u study",
    "html css data",
    "react app",
    "backend development",
    "express app",
    "ecommerce webapp",
    "btech computer science",
    "integral university",
    "database system",
  ];
  const [visibleDataCount, setVisibleDataCount] = useState(5);
  const showMore = () => {
    setVisibleDataCount((prevCount) => prevCount + 5);
  };

  const showLess = () => {
    setVisibleDataCount(5);
  };

  return (
    <div className="bg-[#171717] h-full  fixed w-[16.7%]  ">
      <div className="flex justify-center gap-[150px] pt-2">
        <PiSidebarSimpleBold className="text-[#c7c1c1] text-3xl" />
        <FaNotesMedical className="text-[#c7c1c1] text-3xl " />
      </div>
      <div className="flex gap-2 mt-5 pl-2">
        <img className="h-7 w-auto pt-2 pl-2" src="1.png" alt="logo" />
        <p className="text-[#c7c1c1] text-[20px]">chatAI</p>
      </div>
      <div className="flex gap-2 mt-3 pl-2">
        <PiCirclesFour className="text-[#c7c1c1] text-3xl pl-1" />
        <p className="text-[#c7c1c1] text-[20px]">explore chatAI</p>
      </div>
      <div className="mt-6 pl-2">
        <p className="text-white pl-2 pb-3 text-[20px]">previous history</p>
        <div className="mt-4 pl-2">
          <ul className="text-[#c7c1c1]">
            {allData.slice(0, visibleDataCount).map((data, index) => (
              <li className="mt-4 text-[15px]" key={index}>
                {data}
              </li>
            ))}
          </ul>
          {visibleDataCount <= 5 && (
            <button className="text-white mt-2 text-[20px]" onClick={showMore}>
              <RxCaretDown className="text-white text-[20px] inline" /> See more
            </button>
          )}
          {visibleDataCount >= allData.length && (
            <button className="text-white mt-2 text-[20px] " onClick={showLess}>
              <RxCaretUp className="text-white text-[20px] inline" /> See Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
