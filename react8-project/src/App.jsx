import { useState } from 'react'

import './App.css'
import Button from './components/Button'
import Container from './components/Container';

function App() {
  const colors = ['red', 'blueviolet', 'magenta', 'yellow', 'cyan'];

  const [selectColors, setSelectColors] = useState('white');
  return (
    <div>
      <h1>🎨 Colour Switcher</h1>
      <div className='flex justify-center text-center'>
        {
          colors.map((color)=>(
            <Button key={color} color={color} select={setSelectColors}>{color}</Button>
          ))
        }
      </div>
      <Container color={selectColors}/>
      
    </div>
  )
}


export default App
