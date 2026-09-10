import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const userId= (location.state?.userId);
    
    
  return (
    <div>
      <h1>This is About Page</h1>
      {userId && <h1>userId coming from Home as navigate hook: {userId} <br /> received with the help of useLocation() hook</h1>}

      <nav>
        <Link to="founder" className='link' style={{backgroundColor: 'black', padding: '.4rem 1rem'}}>founder</Link>
        <Link to="company" className='link' style={{backgroundColor: 'black', padding: '.4rem 1rem', margin: '2px'}}>Company</Link>
      </nav>
      <Outlet />
            <h4>displayed using nested routing</h4>

    </div>
  )
}

export default About
