import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Question from './components/Question'
import Result from './components/Result';

function App() {

    const [score, setScore] = useState(0);

  
  const [isOver, setIsOver] = useState(false);
  return (
    <div className='mt-20'>
      {
        !isOver ? 
        <>
          <Timer over={setIsOver}/>
          <Question setScore={setScore} over={setIsOver}/> 
        </>: 
        <Result score={score}/>
      }
      
    </div>
  )
}

export default App
