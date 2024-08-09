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
    <div className="bg-[#171717] h-full font-mono  relative ">
      <div className="flex justify-center gap-[230px] pt-2">
        <PiSidebarSimpleBold className="text-[#c7c1c1] text-5xl" />
        <FaNotesMedical className="text-[#c7c1c1] text-5xl " />
      </div>
      <div className="flex gap-2 mt-5 pl-2">
        <img src="1.png" alt="logo" />
        <p className="text-[#c7c1c1] text-4xl">chatGPT</p>
      </div>
      <div className="flex gap-2 mt-3 pl-2">
        <PiCirclesFour className="text-[#c7c1c1] text-5xl" />
        <p className="text-[#c7c1c1] text-4xl">explore GPTs</p>
      </div>
      <div className="mt-6 pl-2">
        <p className="text-white pl-2 pb-3 text-3xl">previous history</p>
        <div className="mt-4 pl-2">
          <ul className="text-[#c7c1c1]">
            {allData.slice(0, visibleDataCount).map((data, index) => (
              <li className="mt-4 text-2xl" key={index}>
                {data}
              </li>
            ))}
          </ul>
          {visibleDataCount <= 5 && (
            <button className="text-white mt-2 text-3xl" onClick={showMore}>
              <RxCaretDown className="text-white text-3xl inline" /> See more
            </button>
          )}
          {visibleDataCount >= allData.length && (
            <button className="text-white mt-2 text-3xl " onClick={showLess}>
              <RxCaretUp className="text-white text-3xl inline" /> See Less
            </button>
          )}
        </div>
      </div>
      <div className="w-full h-[100px] absolute bottom-0 left-0 right-0 flex pl-6   ">
        <div>
          <IoSparklesSharp className="text-white text-3xl inline " />
        </div>
        <div>
          <p className="text-white pl-3 text-3xl">Upgrade plan</p>
          <p className="text-[#c7c1c1] pl-4">Get GPT-4 DALL -E and more</p>
        </div>
      </div>
    </div>
  );
}
