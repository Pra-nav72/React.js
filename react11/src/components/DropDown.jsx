import React, { useState } from 'react'

const DropDown = () => {
    const [paymentMode, setPaymentMode] = useState('');
    console.log(paymentMode)

    const [state, setState] = useState('');
    const states =['Bihar', 'Maharashtra', 'UP', 'MP', 'Goa', 'Kerala', 'UK', 'WB']
    console.log(state)

    // DEPENDENT STATE: based on selected country, user can select city
        const [city, setCity] = useState('');
        const [country, setCountry] = useState('');
        console.log(`country: ${country}, city: ${city}`)
        const countries= {
            India: ['Mumbai', 'Patna', 'Kolkata', 'Bengaluru', 'Pune'],
            USA: ['California', 'Washington DC', 'Los Angeles', 'Philadelphia'],
            Japan: ['Tokyo', 'Osaka', 'Kyoto'],
            Germany: ['Berlin', 'Munich', 'Hamburg']
        }

  return (
    <div style={{backgroundColor: 'palevioletred', paddingBottom: '18px', paddingTop:'4px', userSelect: 'none'}}>
      <h1>select from Drop down menu</h1>
      {/* value={paymentMode} --> controlled component i.e. linked with useState */}
      <select value={paymentMode} onChange={(e)=>setPaymentMode(e.target.value)}>
        <option value="">---SELECT OPTION---</option>
        <option value="upi">UPI</option>
        <option value="debit-card">DEBIT CARD</option>
        <option value="credit-card">CREDIT CARD</option>
        <option value="cod">Cash On Delivery</option>
      </select>

      <h2>select using array</h2>
      
        
        <select  value={state} onChange={(e)=>setState(e.target.value)}>
            <option value="">---SELECT STATE---</option>
            {
                states.map((item)=>(
                    <option value={item} key={item}>{item.toUpperCase()}</option>
                ))
            }
        </select>
        
      <h2>show city when country is selected: conditional rendering</h2>
      {/* select the country: first create an array of the keys of object and store in a state */}
      <select value={country} onChange={(e)=>{setCountry(e.target.value); setCity('')}}>
        <option value="">---select Country---</option>
        {
            Object.keys(countries).map((item)=>(
                <option value={item}>{item.toUpperCase()}</option>
            ))
        }
      </select>
        <br />
        {/* use conditional rendering, if country is selected then display city option */}
        {/* object[key]: key is country usestate to use map */}
      {country && (
        <select value={city} onChange={(e)=>setCity(e.target.value)}>
        <option value="">---select City---</option>
            {
                countries[country].map((item)=>(
                    <option value={item}>{item.toUpperCase()}</option>
                ))
            }
        </select>
      )}
    </div>
  )
}

export default DropDown
