import './App.css'
import { useState, useRef } from 'react'
import Reference from './Hooks/useRefhook'


function App() {
  const [count, setCount] = useState(0)
const refBtn = useRef()

const colorChange = () => {
  const currentColor = refBtn.current.style.backgroundColor
  switch(currentColor){
    case ("red"):
     refBtn.current.style.backgroundColor = "white"
     break
    case("white"):
     refBtn.current.style.backgroundColor = "red"
     break
  }
}
                            

  return (
    <>
    <Reference/>
    <div className="card">
        <button ref={refBtn} onClick={() => {setCount((count) => count + 1)}} style={{backgroundColor: "white"}}>
          count is {count}
        </button>
        
      </div>
              <div>
            <p>using reference</p>
            <button onClick={colorChange}>color change</button>
        </div>
    </>
  )
}

export default App
