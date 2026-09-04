import React, { useState } from 'react'

const RadioButton = () => {
    const [gender, setGender] = useState('others');
    const gender1 = ['male', 'female', 'others'];

    console.log(gender)
    function handleGender(e){
        setGender(e.target.value);
    }
  return (
    <div style={{backgroundColor: 'greenyellow', color: 'black', padding: '4px', userSelect: 'none'}}>
      <h1>Radio Button handling</h1>
      <h4>select gender</h4>
      <div>
        
        <label htmlFor="male">
            <input type="radio" name="gender" id="male" value='male' 
            checked={gender === 'male'} onChange={handleGender}
            /> male
        </label><br />
        <label htmlFor="female">
            <input type="radio" name="gender" id="female" value='female' 
            checked={gender === 'female'} onChange={handleGender}
            /> female
        </label><br />
        <label htmlFor="other">
            <input type="radio" name="gender" id="other" value='others' 
            checked={gender === 'others'} onChange={handleGender}
            /> others
        </label>
      </div>

      <h2>select gender using map() with less code</h2>
      <div>
            {
                gender1.map((item)=>(
                    <label htmlFor={item} key={item}>
                        <input 
                            type="radio" 
                            name={gender} 
                            id={item} 
                            value={item}
                            checked={gender === item}
                            onChange={(e)=> setGender(e.target.value)}/>
                            {item.toUpperCase()}
                    </label>
                ))
            }
      </div>
    </div>
  )
}

export default RadioButton
