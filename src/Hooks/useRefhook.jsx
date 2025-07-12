import { useEffect} from "react"

const Reference = () => {
    
    
    useEffect(() => {
        console.log("rendering...")
    },)

    return(                         //Now the value of a changes with respect to each render
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Reference