import React from 'react'

const Result = ({score}) => {
  return (
    <div>
      {
        score>3 ?
        <>
            <h1>Congratulation! 🎉🎊</h1>
            
        </>:
        <>
            <h1>you did well! ☺️</h1>    
        </>
      }
      <h2>your score is {score}</h2>
    </div>
  )
}

export default Result
