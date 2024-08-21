
import Layout from './component/Layout'
import ContextProvider from './component/ContextProvider';

export default function App() {


  return (
    <ContextProvider>
        <div  className='font-mono '>
            <Layout />
        </div>
    </ContextProvider>
  )
}
