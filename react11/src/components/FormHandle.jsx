import React, { useState } from 'react'

const FormHandle = () => {

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    tc: false
  });

  function handleChange(e) {
    const {name, value, checked} = e.target;
    setFormValues({
      ...formValues,
      // text/email takes value, while checkbox take checked (e.target.checked/value)
      [name]: name === 'username'? value : name === 'email' ? value : checked 
      
    })
  }

  function handleFormSubmit(e){
    e.preventDefault();
    console.log(formValues);
    
  }
  return (
    <div style={{backgroundColor: 'blueviolet', padding: '4px'}}>
      <h1>Handle multiple input in form</h1>
       <form onSubmit={handleFormSubmit}>

          <input 
            type="text" 
            name="username" 
            placeholder='username'
            value={formValues.username}
            onChange={handleChange}/>

          <br />

          <input 
            type="email" 
            name="email" 
            placeholder='example@xyz.com'
            value={formValues.email}
            onChange={handleChange}/>

          <br />

          <input 
            type="checkbox" 
            name="tc" 
            id="tc" 
            checked={formValues.tc} 
            onChange={handleChange}/> T&C 

          <br />

          <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default FormHandle
