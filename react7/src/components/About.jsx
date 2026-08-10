import React from 'react'

const About = (props) => {
  return (
    <div className='bg-blue-800 text-white my-2'>
      This is About Section
      <h3>receiving data from layout, coming from app.jsx</h3>
      <h1>{props.data}</h1>
      <div className='bg-red-600 text-white m-13 p-2'>
        <p> To send data from child to parent we use the function. <br />
            we will create the function in parent component and send it to child as props. <br />
            In child component the function will get called with argument/s. <br />
            In parent function we can perform any operation on the argument, in this way the data will sent to parent class using function.


        </p>
      </div>
    </div>
  )
}

export default About
