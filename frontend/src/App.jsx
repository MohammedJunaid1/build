
import Layout from './component/Layout'
import ContextProvider from './component/ContextProvider';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {


  return (
    <ContextProvider>
     {/* <BrowserRouter>
     <Routes>
        <Route path="/" /> 
      </Routes>

     </BrowserRouter> */}
        <div  className=''>
            <Layout />
        </div>
    </ContextProvider>
  )
}
