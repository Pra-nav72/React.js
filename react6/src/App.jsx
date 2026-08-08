import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ButtonPrimary from './components/ButtonPrimary'
import FruitCard from './components/FruitCard'
import StudentCard from './components/StudentCard'
import ProfilePic from './components/ProfilePic'

function App() {

  // send display function as props
  function display(){
    console.log("sending function as a props...");
  }

  // send array as props
  const arr = ["kiwi", "apple", "papaya"];

  // send object as props
  const student = {
    name: "pranav",
    age: 21,
    degree: "MCA",
    year: 2026,
    college: "DYPIMCAM"
  }


  return (
    <div>
      <h1>props as a function</h1>
      <ButtonPrimary name="show" display={display}/>
      <h2 style={{color: "red"}} className='btn-output'></h2>

      <h1>Props as an Array</h1>
      <FruitCard thing="fruit" arr={arr}/>

      <h1>Props as an Object</h1>
      <StudentCard student={student} />

      <h1>Props as an HTML element</h1>
      <ProfilePic image={<img src='https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllJTIwbWFufGVufDB8fDB8fHww'
       alt='reactLogo' 
       style={{borderRadius:"50%",
        width: "13rem",
        height: "13rem",
       }}/>}/>
    </div>
  )
}

export default App
