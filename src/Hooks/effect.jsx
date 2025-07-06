import { useEffect } from "react";

const Navbar = ({ color }) => {
  //case 1 : Run on every render
  useEffect(() => {
    alert("Hey! I will run on every render");
  });

  //case 2 : Run only on first render
  useEffect(() => {
    alert("Hey! This is first render");
  },[]);

  //case 3 : Run only when certain values changes
  useEffect(() => {
    alert("Color was changed");
  }, [color]);

  //example of cleanUp function
  useEffect(()=>{
    alert("This is the first render of app.jsx")

    return() => {
      alert("The component was unMounted")
    }
  },[])

  return (
    <div>
      I am Navbar of {color} color
    </div>
  )
};

export default Navbar;
