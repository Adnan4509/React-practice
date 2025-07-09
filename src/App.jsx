import './App.css'
import { useState, useEffect} from 'react'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <Navbar adjective={"good"}></Navbar>  {/*whenever count is changed this component is also rendered */}
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default App
