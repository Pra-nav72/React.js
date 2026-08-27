import React, { useState } from 'react'

const ConditionalTernary = () => {
    const [gender, setGender] = useState('male');

  return (
    <div>
      <h2>conditional rendering using ternary operator(?:)</h2>
      <p className='text-black'>it reduces code readability</p>
        <input type="radio" value="male" className="gender" name="gender"
        checked={gender==='male'} onChange={()=>{setGender('male')}}/> male
        <input type="radio" value="female" className='gender' name='gender' onChange={()=>{setGender('female')}}/>female

        {
            gender === 'female'     
            ?
            <h2>you are a female</h2>
            :
            <h2>you are a male</h2>
        }
    </div>
  )
}

export default ConditionalTernary
