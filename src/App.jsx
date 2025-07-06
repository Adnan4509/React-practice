import './App.css'
import { useState, useEffect} from 'react'
import Navbar from './Hooks/effect'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(()=> {
    alert("Count was changed")
    setColor(color + 1)
  },[count])

  return (
    <>
     <Navbar color = {"Dark " + "Green" + color}></Navbar>  
      {/* comment out the above Navbar component to see the effect of cleanUp function */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default App
