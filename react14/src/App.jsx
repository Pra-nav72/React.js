import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import ContactDetails from './components/ContactDetails'
import Founders from './components/Founders'
import Company from './components/Company'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>

        {/* Nested Routing: /about/child */}
        <Route path='/about' element={<About />}>
          <Route path='founder' element={<Founders />} />
          <Route path='company' element={<Company />} />
        </Route>


        <Route path='/contacts' element={<Contacts />} />
        {/* dynamic routing */}
        <Route path='/contacts/:id' element={<ContactDetails />}/>
      </Routes>
    </div>
  )
}

export default App
