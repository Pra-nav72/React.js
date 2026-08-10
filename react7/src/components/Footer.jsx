import React from 'react'

const Footer = (props) => {
    // sending child data to parents by calling the parent function with an argument
    props.func("CHILD COMPONENT'S DATA")
  return (
    <div>
        <h2 className='bg-gray-800 text-white my-2 p-2'>
            This is footer sections
        </h2>
    </div>
  )
}

export default Footer
