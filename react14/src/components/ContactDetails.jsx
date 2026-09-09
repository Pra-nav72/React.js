import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
    const details = useParams()
  return (
    <div>
      <h1>this is details of user with id: {details.id}</h1>
    </div>
  )
}

export default ContactDetails
