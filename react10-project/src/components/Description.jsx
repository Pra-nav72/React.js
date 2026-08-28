import React from 'react'

const Description = ({data}) => {
  return (
    <div className='px-4 py-4 text-lg mb-4'>
       <ul>
            {
                data.details.map((item, index)=>(
                    <li key={index} className='list-disc'>{item}</li>
                ))
            }
       </ul>
    </div>
  )
}

export default Description
