import React from 'react'

const Inputs = ({setPassword, password, refPass, length, setLength, isNumberAllowed, isCharAllowed, setNumb, setChar}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>

        {/* password */}
      <input type="text" value={password} placeholder="password" onChange={(e)=> setPassword(e.target.value)}
        ref={refPass}
      className='px-3 py-2 focus:outline-0 border-0 bg-amber-50 w-3xl rounded-2xl text-black text-xl'/>

        {/* range */}
      <input type="range" name="char" id="char" min={0} max={100} value={length} onChange={(e)=>setLength(e.target.value)}
      className='w-3xl'/>{length}

        {/* checkboxes */}
      <div className='flex flex-col text-left w-3xl gap-2 pl-2 text-2xl select-none '>

            {/* numbers allowed */}
            <label htmlFor="num">
                <input type="checkbox" name="number" id="num" 
                    checked={isNumberAllowed}
                    onChange={(e)=>setNumb(e.target.checked)}
                className='size-4'/> number allowed
            </label>

            {/* characters allowed */}
            <label htmlFor="chars-allowed">
                <input type="checkbox" name="character" id="chars-allowed"
                    checked={isCharAllowed}
                    onChange={(e)=>setChar(e.target.checked)}
                className='size-4' /> character allowed
            </label>
      </div>
    </div>
  )
}

export default Inputs
