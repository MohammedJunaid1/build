import { useRef } from "react";
import Chat from "./Chat";
import Input from "./Input";
import Navbar from "./Navbar";
import SideBar from "./SideBar";


export default function Layout() {
 
  return (
    <div className="grid grid-cols-12 h-screen " >
        <div className="col-span-2 h-full">
                <SideBar />
        </div>
        <div  className="col-start-3 col-end-13 h-full  ">
                <Navbar  />
                <Chat />
                <Input />
        </div>

    </div>
  )
}
