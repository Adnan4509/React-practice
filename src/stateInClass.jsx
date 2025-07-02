import { Component } from "react";


export default class Exm extends Component {
    constructor(props){             
        super(props);               //this is passing the prop to upper tree i.e., component class

        this.state = {
            name: "",
            age: 100,
            isMale: true,
        };
    }
    render(){
        const { name, age, isMale} = this.state;        // we used this const to avoid writing "this.state.name", "age" and "isMale" 

        return(
            <div>
            <h1>My name is {name}</h1>
            <h2>I am {age} years old</h2>
            <h3>I am a {isMale ? "Male" : "Female"}</h3>

            <h4>I am feeling {this.props.emotion}</h4>              {/*"this" is pointing towards the instance of component which is emotion */}
        </div>
        );
    }
}