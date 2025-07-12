import { useEffect, useRef } from "react"

const Reference = () => {
    const a = useRef(0)
    
    useEffect(() => {
        a.current =  a.current + 1

    })
    return(                         //Now the value of a changes with respect to each render
        <div>
            <p>{a.current}</p>   
        </div>
    )
}

export default Reference