import { useState } from "react"
import logo from "./logo.webp"


export default function Chat() {
  const [chats,setChats ] = useState( [
    { type: 'Query', content: 'What is the weather like todaycvf fvcv kfv jdfvdivdfn vdf vjfdhfvgfgnfgjnfg fjgfkgn gfg kngkfjgrkjg rgrn girgnrg rinng f gnrgjk rgii?' },
    { type: 'Response', content: 'The weather today is sunny with a high of 75°Fgf fjfg fgh dvhjdv ngd igdf ndfhgh dfdryf hkjhsbjuy geifgbefbgfk gfk ghfigu fgui gkrgdfkfdjfbvjffvbfjgrguf irthgurig fgfijgrgnf ig qdf fn fvjfrnr u.' },
    { type: 'Query', content: 'Can you recommend a good restaurant nearby?' },
    { type: 'Response', content: 'I recommend trying The Olive Tree; they have great reviews and are close by.' },
    { type: 'Query', content: 'What time does the library close?' },
    { type: 'Response', content: 'The library closes at 8 PM today.' },
    { type: 'Query', content: 'What is the capital of France?' },
    { type: 'Response', content: 'The capital of France is Paris.' },
    { type: 'Query', content: 'How many continents are there?' },
    { type: 'Response', content: 'There are seven continents.' },
    { type: 'Query', content: 'Who wrote "To Kill a Mockingbird"?' },
    { type: 'Response', content: 'Harper Lee wrote "To Kill a Mockingbird".' },
    { type: 'Query', content: 'What is the largest planet in our solar system?' },
    { type: 'Response', content: 'The largest planet in our solar system is Jupiter.' },
    { type: 'Query', content: 'When was the Declaration of Independence signed?' },
    { type: 'Response', content: 'The Declaration of Independence was signed on July 4, 1776.' },
    { type: 'Query', content: 'What is the boiling point of water?' },
    { type: 'Response', content: 'The boiling point of water is 100°C or 212°F at standard atmospheric pressure.' },
    { type: 'Query', content: 'Can you explain the theory of relativity?' },
    { type: 'Response', content: 'The theory of relativity, proposed by Albert Einstein, includes the special theory of relativity and the general theory of relativity. It revolutionized our understanding of space, time, and gravity.' },
    { type: 'Query', content: 'What are the benefits of regular exercise?' },
    { type: 'Response', content: 'Regular exercise has numerous benefits, including improved cardiovascular health, stronger muscles and bones, better mood, increased energy levels, and enhanced cognitive function.' },
    { type: 'Query', content: 'Who painted the Mona Lisa?' },
    { type: 'Response', content: 'The Mona Lisa was painted by Leonardo da Vinci.' }
  ])
  return (
    <div className="bg-neutral-800 flex-1 flex justify-center ">
        <div className="w-[60%] overflow-y-scroll h-screen py-10">
              {chats.map((chat,index)=>
                 <div  className="flex flex-col p-5 text-gray-300" key={index+chat.content} >
                   <p className={`${chat.type === "Query"?"px-3 py-2 mb-1 borde self-end bg-neutral-700 border-neutral-700  rounded-3xl w-[60%]":"text-left mb-20 self-start w-[90%] flex gap-3"}`} >
                   {chat.type === "Response" && <img src={logo} alt="" className="w-7 h-7 rounded-full " />}
                    <span> {chat.content}</span>
                    </p>
                 </div>
              )}   
       </div>
    </div>
  )
}
