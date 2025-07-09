import { memo } from "react"        

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")               //Here navbar is rendered whenever count is changed in app.jsx
    return(
        <div>
            I am a {adjective} navbar.
            <button onClick={() => {getAdjective}}>{getAdjective}</button>
        </div>
    )
}

export default memo(Navbar)    // the memo method allows the component to re-render only when its changed