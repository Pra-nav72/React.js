import React from 'react'

const FruitCard = (props) => {
  return (
    <div>
      <h1>{props.thing}</h1>
      <ul>
        <li>{props.arr}</li>
        <li>{props.arr[0]}</li>
        <li>{props.arr[1]}</li>
        <li>{props.arr[2]}</li>
      </ul>
    </div>
  )
}

export default FruitCard
