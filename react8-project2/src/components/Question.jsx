import React, { useState } from 'react'
import question from './question.json'

const Question = ({setScore, over}) => {
 // we can't use map() bcoz we need to display next question when current is answered.
    const [currentIndex, setCurrentIndex] = useState(0);

    function checkAnswer(selected) {
        if (selected === question[currentIndex].answer) {
            setScore(prev => prev + 1);
        }
    
        if (currentIndex < question.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
        else{
            over(true);
        }
    }
    return (
    <div>
        <h1>{question[currentIndex].question}</h1>
        <div className='flex flex-col items-center gap-3'>
            {
                question[currentIndex].options.map((option, index)=>(
                    <button key={index}
                        className="w-full max-w-md"
                        value={option}
                        onClick={()=>{checkAnswer(option)}}
                    >
                        {option}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default Question
