import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let name = "pranav"
  let age = 22
  let isReady = true

  let arr = ["ram", "shyam", "Mohan", "sita"]

  function greet(){
    return "Welcome to react series"
  }

  return (
    <div>
      <h1>what js features can be used in HTML</h1><hr />
      <h1>name is {name}</h1>
      <h2>function called: {greet()}</h2>
      <h3>ternary operator: {age>=18?"can drive":"can't drive but can drink"} </h3>
      <h4>mathematical operations: {2 + 2 /2}</h4>

      {/* inline style in jsx */}
      <p style={{
        backgroundColor:"wheat",
        padding: "1rem",
        color: "black"
      }}>This is using inline style, which is an object in jsx</p>

      {/* conditional rendering in jsx */}
      {age>=18 ? <p style={{color:"greenyellow"}}>can drive</p> : <p style={{color:"lightblue"}}>can't drive</p>}

      {/* short circuiting */}
      {isReady && <p>render if isReady = true</p>}

      {/* loops in jsx using Array */}
        {arr.map((item, index)=> <p>{item} at index {index}</p>)}
    </div>
  )
}

export default App
