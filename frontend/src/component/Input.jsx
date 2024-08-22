import {useContext, useState} from "react"
import axios from "axios"

import  { ChatProvider } from "./ContextProvider"

export default function Input() {
  const [inputValue, setInputValue ] = useState("")

 
  const {chat,setChat,setLoading} = useContext(ChatProvider)
 async function handleKeyDown(e){
  if(e.key === "Enter"){
    chatSubmitHandler()
  }
 }

 async function chatSubmitHandler(){
  
   setInputValue("")
   setLoading(true)
    try {
      const data = {
        prompt:inputValue
      }
      const {data:answer} = await axios.post("http://localhost:9000/v1/api/chat",data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    
      console.log(answer.answer)
  
      setChat([...chat,{query:inputValue,response:answer.answer.split("```")[1]}])
     
    
    } catch (error) {
      console.log(error.message)
    } finally{
      setLoading(false)
    }

  
  }
  return (
    <div onKeyDown={handleKeyDown} className="bg-neutral-800 fixed bottom-0 w-full   ">
      <div className=" w-content flex flex-col gap-2 place-items-center pt-3 ">
        <div className="flex justify-between py-1 text-xs rounded-3xl   bg-neutral-700 w-1/2 pl-4 pr-1 relative ">
         <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder="Message ChatAI"  className="  flex-1  bg-neutral-700  text-gray-300 focus:outline-none" type="text" />
          <button  onClick={chatSubmitHandler} className="text-neutral-700 rounded-full w-7 h-7 text-lg bg-gray-300 hover:bg-gray-400">&uarr;</button>
        </div>
        <p className="text-gray-300 text-xs text-center relative">ChatAI can make mistakes. Check important info.</p>
      </div>
    </div>
  )
}
