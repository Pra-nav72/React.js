import React from 'react'

const PopUp = ({ popup, setPopup, title }) => {
  return (
    <>
        <button className='absolute top-3 right-3 bg-gray-700 p-4 rounded-xl' onClick={()=>{setPopup(false)}}>❌</button>
        <div className='absolute w-full h-full bg-gray-700 max-w-140 max-h-80 flex flex-col gap-8 rounded-2xl justify-center items-center text-white'>
            <h1 className='text-3xl'>⚠️ {title.toUpperCase()}</h1>
            <p>are you sure want to {title}?</p>
            <div className='flex gap-6'>
                <button className='bg-red-600 px-6 py-2 rounded-md'>Yes</button>
                <button className='bg-green-600 px-6 py-2 rounded-md' onClick={()=>{setPopup(false)}}>No</button>
            </div>
        </div>
    </>
  )
}

export default PopUp