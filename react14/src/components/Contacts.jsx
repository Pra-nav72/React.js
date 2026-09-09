import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
  const navigate = useNavigate();

  const handlediv = (e) =>{
    const name = e.currentTarget.textContent;

    // dynamic routing
    navigate(`/contacts/${name}`)
  }
  return (
    <div>
      <div id='1' onClick={handlediv} >pranav</div>
      <div id='2' onClick={handlediv} >kumar</div>
      <div id='3' onClick={handlediv} >raj</div>
    </div>
  )
}

export default Contacts
