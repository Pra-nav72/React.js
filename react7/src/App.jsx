import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState("THIS IS APP.JSX DATA")
  const [data, setData] = useState("");
  // function to receive data from the child component.
  function getChildData(arg){
    setData(arg);
  }
  console.log("in app:", data);

  return (
   <div className='text-center'>
    <header className='m-0 py-3 px-5 bg-cyan-300'>
      <h1 className='text-4xl'>Data Flow in React</h1>
    </header>
    <Header />
    <Layout data={count}/>
    <Footer func={getChildData}/>

   </div>
  )
}

export default App
