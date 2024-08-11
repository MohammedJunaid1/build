
import { useEffect } from 'react';
import Layout from './component/Layout'

export default function App() {

  useEffect(()=>{
    window.scrollTo(0, document.documentElement.scrollHeight);
  },[])

  return (
    <div  className='font-mono '>
        <Layout />
    </div>
  )
}
