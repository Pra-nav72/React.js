import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1);
    console.log(count);
    
  }

  return (
    <div>
      <div>
        <br /><hr />
        <h1>Hello world</h1><hr />
      </div>
      <div>
        <br />
        <img src={heroImg} alt="x" width={"280px"} />
      </div>
      <div>
        <h2>calling component function from App &#40; &#41;</h2>
        <Component/>
      </div>

      <div>
        <button onClick={increment}>Increment</button><br />
        {count}
        <p>useState changes UI unlike simple variable when their value changes.</p><br />
        <p>useState returns Array, that's why we destructure it,
            index 0 = variable name, index 1 = function name.
            EX: &#91; count, setCount &93;
        </p>
        <br />
      </div>
    </div>
    
  )
}

function Component(){
  
  return(
    <div>
      <h1>Component</h1>
      <h3>component is the reusable piece of UI</h3>
      <p>when html & javascript mixed then the jsx's function is called Component</p>
      <br />
      <p>to call function Component &#40; &#41; we need to use it &lt;component /&gt;</p>

    </div>
  )
}

export default App
