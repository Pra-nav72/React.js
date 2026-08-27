
import { useState } from 'react'
import './App.css'
import PopUp from './assets/components/PopUp'

function App() {
  const [update, setUpdate] = useState('');
  const [x, setX] = useState(false);
  let Content = ''

  if (x===true) {
    if (update==='delete') {
      Content = <PopUp task={update} func={handleExit}/>
    }
    else if (update === 'edit') {
      Content = <PopUp task={update} func={handleExit}/>
    }
  }


  function handleExit() {
    const btnDelete = document.getElementById('btn-D')
    const btnEdit= document.getElementById('btn-E')
    btnDelete.hidden = false
    btnEdit.hidden = false
    setUpdate('')
  }
  function handleDelete() {
      const btnDelete = document.getElementById('btn-D')
      const btnEdit= document.getElementById('btn-E')
    setUpdate('delete'); 
    setX(true);
    btnDelete.hidden = true;
    btnEdit.hidden = true
  }

  function handleEdit() {
    const btnDelete = document.getElementById('btn-D')
    const btnEdit= document.getElementById('btn-E')
    setUpdate('edit'); 
    setX(true);
    btnDelete.hidden = true;
    btnEdit.hidden = true
  }
  return (

   <div >
      {
        
        <div className="min-h-screen flex items-center justify-center">
          <button id='btn-D' onClick={handleDelete}
            className='bg-gray-50 px-6 py-2 m-3'>Delete</button>
          <button id='btn-E' onClick={handleEdit}
            className='bg-gray-50 px-6 py-2 m-3'>Edit</button>
            {Content}
        </div>
      }
      
   </div>
  )
}

export default App
