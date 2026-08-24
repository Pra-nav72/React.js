import React from 'react'

const Button = ({select, color, children}) => {
    
  return (
    <div>
      <button className='px-4 py-1.5 m-0.5 border-2 rounded-md text-black'
      style={{backgroundColor: color}} onClick={()=>{select(color)}}>{children}</button>
    </div>
  )
}

export default Button
