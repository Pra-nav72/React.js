import React from 'react'

const StudentCard = (props) => {
  return (
    <div>
        <h1>{props.student.name}</h1>
        <h3>{props.student.age}</h3>
        <h3>{props.student.degree}</h3>
        <h3>{props.student.year}</h3>
        <h3>{props.student.college}</h3>
    </div>
  )
}

export default StudentCard
