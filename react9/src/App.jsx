
import './App.css'
import ConditionalRendering from './components/ConditionalRendering';
import EventPropagation from './components/EventPropagation';

function App() {

  return (
  <div>
    <div className='bg-orange-900'>
      <h1>Event Handling</h1>
    <form action="" onSubmit={(ev)=>{
      ev.preventDefault();
      console.log(`on submit /w forms ${ev.bubbles}`)}}>

      <input className='border-2' type="text" placeholder='username' onChange={(evt)=>{
        console.log(evt.target.value);
        const p = document.getElementById('abcp');
        p.innerHTML = evt.target.value

      }} />

      <button>submit</button>
    </form>
      <p id='abcp'></p>
    </div>

      <EventPropagation />

      <ConditionalRendering />
  </div>
  )
}

export default App
