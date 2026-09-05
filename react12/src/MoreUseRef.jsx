import React, { useRef, useState } from 'react'

const MoreUseRef = () => {
    const countRef = useRef(0);
    const [countState, setCountState] = useState(0);
    let count  = 0

    // countRef will remain same even if the countState changes bcoz countRef do not affected by re-render, it PERSIST
    // count will become 0 after every change in useState() i.e. countState because it re-render for every change
  return (
    <div>
      <button onClick={()=>{
            (countRef.current += 1); 
            console.log(countRef.current)}}>change ref</button>
      <button onClick={()=>{
            (count += 1);
            console.log(`count: ${count}`)}}>change count</button>
      <button onClick={()=>{
            setCountState(prev => prev + 1);
            console.log(`state: ${countState}`)}}>change state</button>
    </div>
  )
}

export default MoreUseRef
