import { useContext, useEffect } from "react";
import Chat from "./Chat";
import Input from "./Input";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { ChatProvider } from "./ContextProvider";


export default function Layout() {
  const {chat} = useContext(ChatProvider)

  useEffect(()=>{
    window.scrollTo(0, document.documentElement.scrollHeight);
  },[chat])
 
  return (
    <div className="w-full h-screen" >
        {/* <div className="col-span-2 h-full">
                <SideBar />
        </div> */}
        <div >
                <Navbar  />
                <Chat />
                <Input />
        </div>

    </div>
  )
}
