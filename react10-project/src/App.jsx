
import './App.css'
import Product from './components/Product'
import coll from './data.json'
function App() {

  return (
    <>
      {
        coll.map((data, index)=>(
          <div key={index}>
            <Product data={data} />
          </div>
        ))
      }
    </>
  )
} 

export default App
