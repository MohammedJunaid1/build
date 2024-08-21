import { useContext } from "react"
import logo from "./logo.webp"
import  { ChatProvider } from "./ContextProvider"
import Response from "./Response"


export default function Chat() {
 const {chat,loading} = useContext(ChatProvider)


  return (
    <div className="bg-neutral-800 flex-1 flex justify-center p-10 h-full">
        <div className="w-[60%] h-auto scroll-smooth py-10">
              {chat.map((chat,index)=>
                 <div  className="flex flex-col p-5 text-gray-300" key={index} >
                    <div>
                       <p>{chat.query}</p>
                    </div>
                    <Response content= {chat.response} />
                   
                 </div>
              )}   
       </div>
    </div>
  )
}
