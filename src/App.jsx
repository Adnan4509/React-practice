import './App.css'
import { useState } from 'react'
import Reference from './Hooks/useRefhook'


function App() {
  const [count, setCount] = useState(0)

                                

  return (
    <>
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Reference/>
      </div>
    </>
  )
}

export default App
