import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () =>{
        navigate("/about", {
            state: {userId: 123}
        });
    }
  return (
    <div>
      <h1>This is Home page</h1>
      <button onClick={handleNavigate}>navigate to about page</button>
    </div>
  )
}

export default Home
