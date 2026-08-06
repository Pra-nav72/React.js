import { useState } from 'react'
import './App.css'


import MainCard from './components/MainCard'

function App() {

  return (
    <div className='grid grid-cols-2 p-3 justify-center items-center'>
        <div className='font-extrabold font-sans text-6xl text-blue-600 text-left border-l-8 rounded-md mx-auto px-6'>
          <h1>Place</h1>
          <h1>Card</h1>
          <h1>UI Design</h1>
        </div>
        <div>
          <MainCard />
        </div>
      
    </div>
  )
}

export default App
