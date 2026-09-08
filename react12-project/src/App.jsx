
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Buttons from './assets/components/Buttons'
import Inputs from './assets/components/Inputs'

function App() {

  const [password, setPassword] = useState("");

  // for storing prev passwords & current pass in an array
  const [savedPassword, setSavedPassword] = useState([]);

  // checkboxes
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);

  // length of range input
  const [length, setLength] = useState(8);

  const copyPassword = useRef(null);
    

  // save password button
  function handleSavePass() {
    setSavedPassword((prev)=>[...prev, password])
  }

  // reset button
  function handlReset() {
    setLength(8);
    setIsCharAllowed(false);
    setIsNumberAllowed(false)
    setSavedPassword([]);
  }

  // Copy Text Button
  function handleCopyText() {
    const text = copyPassword.current.value;

    //select 
    copyPassword.current.select();

    // copy the text
    navigator.clipboard.writeText(text);
  }

  // password generator
    function generatePassword() {
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

      if(isNumberAllowed) str += "0123456789"
      if(isCharAllowed) str += "`~!@#$&*^"

      let newP = "";
      for (let i = 0; i < length; i++) {
        // random index till str length (let i)= Math.floor(Math.random)* str.length
        // Pick char from str with index (let ch) = str.charAt(i)
        // append the char to the variable: newP = newP + ch
        newP += str.charAt(Math.floor(Math.random()*str.length))
      }
      // setPassword(newP);
      setPassword(newP)
    }

    // useEffect to run the generatePassword() when length, isNumberallowed,isCharallowed value changes
    useEffect(()=>{
      generatePassword();
    }, [length, isNumberAllowed, isCharAllowed])
  return (
    <div className='flex flex-col justify-center text-center'>

      <h1 className='my-4'>Password Generator</h1>

      <Inputs setPassword={setPassword} password={password} refPass={copyPassword} length={length} setLength={setLength} isNumberAllowed={isNumberAllowed} isCharAllowed={isCharAllowed} setNumb={setIsNumberAllowed} setChar={setIsCharAllowed}/>

      <Buttons func={handleCopyText}>Copy Text</Buttons>

      <Buttons func={handlReset}>Reset</Buttons>

      <Buttons func={handleSavePass}>Save Password</Buttons>

      <div className='w-3xl mx-auto text-left text-3xl'>
        {
          savedPassword.map((item, index)=>(
            <h2 key={index}>{item}</h2>
          ))
        }
      </div>
    </div>
  )
}

export default App
