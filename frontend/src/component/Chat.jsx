import { useContext } from "react"
import logo from "./logo.webp"
import  { ChatProvider } from "./ContextProvider"
import Response from "./Response"


export default function Chat() {
 const {chat,loading} = useContext(ChatProvider)


  return (
    <div className="bg-neutral-800 flex-1 flex justify-center p-10 h-full w-full mb-10">
        <div className=" h-auto  space-y-10 scroll-smooth py-10">
              {chat.map((chat,index)=>
                 <div  className="flex flex-col p-5 gap-5 text-gray-300 text-sm" key={index} >
                    <div className="text-right">
                       <p>{chat.query}</p>
                    </div>
                    <div className="flex gap-5">
                    <img className="w-5 h-5 rounded-full" src={logo} alt="" />
                    <Response content= {chat.response} />
                    </div>
                   
                 </div>
              )}   
       </div>
    </div>
  )
}
