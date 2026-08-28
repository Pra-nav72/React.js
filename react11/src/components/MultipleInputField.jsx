import React, { useState } from 'react'

const MultipleInputField = () => {
    // we don't need to create useState() for every input field

    // we store every data in single state using key-value pair
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        partner: ''
    })
    function dataHandler(e) {        
        const {name, value} = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }
    function handleClear() {
        setUserData({    
            name: '',
            phone: '',
            email: '',
            partner: ''
        })
    }
  return (
    <div style={{backgroundColor: 'beige', color: 'black'}}>
      <h1>handle multiple input field</h1>
      <input type="text" name='name' value={userData.name} placeholder='name' onChange={dataHandler}/><br /><br />
      <input type="text" name='phone' value={userData.phone} placeholder='phone' onChange={dataHandler}/><br /><br />
      <input type="email" name='email' value={userData.email} placeholder='email' onChange={dataHandler}/><br /><br />
      <input type="text" name='partner' value={userData.partner}  placeholder='better half...' onChange={dataHandler}/><br /><br />
      <button onClick={handleClear}>clear</button><br />
      <br />
      <p>{userData.name}</p>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <p>{userData.partner }</p>
    </div>
  )
}

export default MultipleInputField
