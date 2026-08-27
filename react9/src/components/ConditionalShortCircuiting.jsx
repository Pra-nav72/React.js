import React from 'react'

const ConditionalShortCircuiting = () => {
    const msg = 'hello this is a msg using short-circuiting'
  return (
    <div>
      {
        // if the msg is truthy (abc, 123, true) then h1 will display
        msg && <h1>{msg}</h1>
      }
    </div>
  )
}

export default ConditionalShortCircuiting
