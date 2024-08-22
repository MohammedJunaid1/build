
import { useContext, useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { ChatProvider } from "./ContextProvider";

export default function SideBar() {
  const {chat} = useContext(ChatProvider)
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
    <div className="bg-[#171717] h-full flex flex-col flex-wrap  fixed w-[16.7%] text-sm ">
      {/* <div className="flex justify-center gap-[150px] pt-2">
        <PiSidebarSimpleBold className="text-[#c7c1c1] text-3xl w-5 h-5" />
        <FaNotesMedical className="text-[#c7c1c1] text-3xl " />
      </div> */}
      <div className="flex gap-2 mt-5 pl-2">
        <img className="h-7 w-auto pt-2 pl-2" src="1.png" alt="logo" />
        <p className="text-[#c7c1c1] self-center">chatAI</p>
      </div>
      {/* <div className="flex gap-2 mt-3 pl-2">
        <PiCirclesFour className="text-[#c7c1c1] text-3xl pl-1" />
        <p className="text-[#c7c1c1] text-[20px]">explore chatAI</p>
      </div> */}
      <div className="mt-6 pl-2">
        <p className="text-white pl-2 pb-3 text-[15px]">previous history</p>
        <div className="mt-4 pl-2">
          <ul className="text-[#c7c1c1]">
            {chat.slice(0, visibleDataCount).map((data, index) => (
              <li className=" text-xs hover:bg-neutral-700 p-2 mr-4 rounded-md cursor-pointer" key={index}>
                {data.query}
              </li>
            ))}
          </ul>
          {visibleDataCount <= 5 && (
            <button className="text-white mt-2 text-[10px]" onClick={showMore}>
              <RxCaretDown className="text-white text-[20px] inline" /> See more
            </button>
          )}
          {visibleDataCount >= allData.length && (
            <button className="text-white mt-2  text-[10px]" onClick={showLess}>
              <RxCaretUp className="text-white text-[20px] inline" /> See Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
