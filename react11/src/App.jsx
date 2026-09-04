
import { useState } from 'react'
import './App.css'
import MultipleInputField from './components/MultipleInputField'
import CheckBox from './components/CheckBox'
import FormHandle from './components/FormHandle'
import RadioButton from './components/RadioButton'

function App() {
  const [inputField, setInputField] = useState('')
  return (
    <>
      <h1>Handle INPUT FIELD in react</h1>

      <input type="text" value={inputField} placeholder='type...' onChange={(e)=>{setInputField(e.target.value)}}/>
      <br /><br />
      <button onClick={()=>{setInputField(""); e.target.value=''}}>clear</button>
      <p>{inputField}</p>

      <MultipleInputField />
      <br />
      <CheckBox />
      <br />
      <FormHandle />
      <br />
      <RadioButton />
    </>
  )
}

export default App
