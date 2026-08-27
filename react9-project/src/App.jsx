
import { use, useState } from 'react'
import './App.css'
import PopUp from './assets/components/PopUp'

function App() {
  const [deletePopup, setDeletePopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);


  return (

   <div >
    <div className="min-h-screen flex items-center justify-center">

        <button onClick={()=>{setDeletePopup(true)}}
          className='bg-gray-50 px-6 py-2 m-3'>Delete</button>
        {deletePopup && <PopUp popup={deletePopup} setPopup={setDeletePopup} title="delete" />}

        <button id='btn-E' onClick={()=>{setEditPopup(true)}}
          className='bg-gray-50 px-6 py-2 m-3'>Edit</button>
        {editPopup && <PopUp popup={editPopup} setPopup={setEditPopup} title="edit" />}
    </div>
      
   </div>
  )
}

export default App
