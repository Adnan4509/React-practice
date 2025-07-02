import { useState} from "react";

function Exm1(props){
    const [name, setName] = useState("");
    const [age, setAge] = useState(100);
    const [isMale, setIsMale] = useState(true);

    return(
        <div>
            <h1>My name is {name}</h1>
            <h2>I am {age} years old</h2>
            <h3>I am a {isMale ? "Male" : "Female"}</h3>

            <h4>I am feeling {props.emotion}</h4>
        </div>
    )
}

export default Exm1;