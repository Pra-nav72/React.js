import React, { Children } from 'react'

const Buttons = ({func, children}) => {
  return (
    <div>
      <button
        className='bg-blue-500 text-white py-2 px-4 my-5 rounded-2xl text-2xl w-md cursor-pointer'
        onClick={func}
      >{children}</button>
    </div>
  )
}

export default Buttons
