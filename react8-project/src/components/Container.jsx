import React from 'react'

const Container = ({color}) => {
  return (
    <div style={{backgroundColor: color}}
        className='w-80 h-80 mx-auto content-center text-black rounded-xl font-extrabold text-2xl m-4 border-2 border-white'>
            {color.toUpperCase()}
    </div>
  )
}

export default Container
