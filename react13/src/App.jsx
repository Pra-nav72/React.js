import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  // get data using fetch();
  const handleFetch = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(await response.json());
  }

  // get data using axios()
  const handleAxios = async () =>{
    const respose = await axios('https://jsonplaceholder.typicode.com/users');
    // no need to parse to json
    console.log(respose.data)
  }

  // create config object for axios
  const config ={
    // url: 'https://jsonplaceholder.typicode.com/users'

    /**YOU CAN ADD ADDITIONAL DATA HERE */
    url: '/users',
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'get',
    // params:{
    //   id: 1,
    //   name: 'pranav'
    // },
    resposeType: 'Application/json',
    timeout: 300,
    headers:{
      'content-Type': 'Application/json',
      Accept: 'application/json',
      Authority: 'Beared token_will_be_placed_here'
    }

  }

  // third button
  async function handleAxiosConfig() {
    const response = await axios(config);
    console.log(response.data)
  }
  return (
    <div style={{margin: 'auto'}}>
      <button onClick={handleFetch}>fetch data</button>
      <button onClick={handleAxios}>axios data</button>
      <button onClick={handleAxiosConfig}>axios /w config</button>
    </div>
  )
}

export default App
