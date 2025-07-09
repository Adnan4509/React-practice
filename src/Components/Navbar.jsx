

const Navbar = ({adjective}) => {
    console.log("Navbar is rendered")               //Here navbar is rendered whenever count is changed in app.jsx
    return(
        <div>
            I am a {adjective} navbar.
        </div>
    )
}

export default Navbar