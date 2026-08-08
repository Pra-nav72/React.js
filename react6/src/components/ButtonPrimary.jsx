import React from 'react'

const ButtonPrimary = (props) => {
  return (
    <div>
        <h1></h1>
      <button onClick={props.display}>{props.name}</button>
    </div>
  )
}

export default ButtonPrimary
