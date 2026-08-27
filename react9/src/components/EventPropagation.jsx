import React from 'react'

const EventPropagation = () => {

    function parentDiv() {
        console.log('parent div is clicked');
    }

    function childButton(event) {
        // without this the event will be bubbled, means when clicked on child the parent will also be clicked, if grandparent exist, it will be clicked too, so on. 
        event.stopPropagation(); // prevent bubbled event, ONLY CHILD BEHAVIOR AFFECTED
        console.log('child button inside parent div clicked');
        
    }
  return (
    <div className='bg-blue-800'>
      <div onClick={parentDiv} className='border-2 border-white p-4 m-3'>
        parent div
        <button onClick={childButton} className='border-red-200 border-2 p-3'> child</button>
      </div>
    </div>
  )
}

export default EventPropagation
