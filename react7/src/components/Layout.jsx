import React from 'react'
import Hero from './Hero'
import About from './About'

const Layout = (props) => {
  return (
    <div className='bg-violet-300 py-2'>
      <h2>This is layout</h2>
      <h1>***********data flow:<span className='text-3xl'>PARENT TO CHILD</span>************</h1>
      <h3>data coming from App.jsx: {props.data}</h3>
      <h3>send this data to child components 'Hero', 'About'</h3>
      <Hero data={props.data}/>
      <About data={props.data}/>
    </div>
  )
}

export default Layout
