import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let x = 0;
  // useEffect hook: used for side effect works like fetching api data etc

  // 1. Run after every render
  useEffect(()=>{
    console.log("1. this useEffect will run after every render");
      
  });

  // 2. Run once when component mounts
  useEffect(()=>{
    console.log("2. this useEffect will Run once when component mounts. []");
  }, []);

  // 3. Run when the value of count changes
  useEffect(()=>{
    console.log('3. this useEffect will run when the value of count changes');
  }, [count])
  return (
    <div>
      <h1>Hooks in React</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count + 1)}>increment</button>
      <button onClick={()=>setCount(count - 1)}>decrement</button>
      <div>

      </div>
    </div>  
  )
}

export default App
