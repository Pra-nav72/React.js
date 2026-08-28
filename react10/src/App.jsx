
import './App.css'

function App() {
  // simple array
  const arr = ["pranav", "shristika", "kumar", "1928"]

  // array of objects
  const users = [
    {id:1, name: "prnv", age: 22},
    {id:2, name: "shristika", age: 21},
    {id:3, name: "relationasip", age:0}
  ]

  // arary of arrays
  const data=[
    ['html', 'css', 'javascript', 'angular', 'react'],
    ['java', 'python', 'node-js', 'mongoDB']
  ]

  return (
    <>
      <h1>List Rendering</h1>
      <h2>simple array</h2>
      <ul style={{backgroundColor:"beige", color:"black"}}>
        {
          
          arr.map((value, index)=>(
            (<li key={index}>{value.toUpperCase()}</li>)
          ))
          
        }
      </ul>

        <h2>Array of object</h2>
        <ul style={{backgroundColor:"beige", color:"black"}}>

          <li>NAME ... AGE </li><hr />
          {
            users.map((user)=>{
              return(
                <li key={user.id}>{user.name} --- {user.age} </li>
              )
            })
          }

        </ul>


        <h2>Array of Arrays</h2>
        {
          data.map((group, i)=>(
            <ul key={i}>
              {
                group.map((item, j)=>(
                  <li key={j}>{item}</li>
                ))
              }
            </ul>
          ))
        }
    </>
  )
}

export default App
