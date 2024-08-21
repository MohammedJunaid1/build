import {  createContext, useState } from "react"

export const ChatProvider = createContext()

export default function ContextProvider({children}) {
    const [chat,setChat] = useState( [
      { query: "What is your name?", response: "My name is ChatGPT." },
      { query: "What is the capital of France?", response: "The capital of France is Paris." },
      { query: "How do you create a React component?", response: "You can create a React component by defining a function or class that returns JSX." },
      { query: "What is 2 + 2?", response: "2 + 2 equals 4." },
      { query: "What is the purpose of a database index?", response: "A database index is used to speed up the retrieval of data from a table." }
    ])
    const [loading,setLoading] = useState(false)
  return (
    <ChatProvider.Provider value={{chat,setChat,loading,setLoading}}>
       {children}
    </ChatProvider.Provider>
  )
}


