import { Component } from 'react'                

// class based component
class Exm extends Component{
  render(){                                     //without this render function we cannot output the return
  return(
    <h1>Hello</h1>
  )
}
}
export default Exm

//previously only class components have state in a component but now we have hooks such as state hook to support state in functional components
