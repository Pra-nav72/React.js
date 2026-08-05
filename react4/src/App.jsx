import Card from './Card.jsx'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Home/Header.jsx'
import Footer from './Home/Footer.jsx'

function App() {
  return (
    <div>
      <Header />
      <h1
        style={{backgroundColor: "wheat", color: "black", padding: "1rem 1.5rem"}}>
        start tailwind!
      </h1>
      <Card />
      <Footer />
    </div>
  )
}

export default App

