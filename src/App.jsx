import './App.css'
import { useState, useCallback} from 'react'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  // function getAdjective(){
  //   return  "another" + count                 // whenever re-render happens this function changes
  // }

// using useCallback to freeze function
  const getAdjective = useCallback(() =>{
    return "another" + count                    // Here the function will re-render whenever count is changed
  },[count])                                       

  return (
    <>
     <Navbar adjective={"good"} getAdjective={getAdjective()}></Navbar>  {/*whenever count is changed this component is also rendered */}
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default App
