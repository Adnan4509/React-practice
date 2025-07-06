import { useState, useMemo } from "react";

const nums = new Array(50_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 49_00_000,
  };
});

function ExpensiveCount() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(nums);

//   const magical = number.find(item => item.isMagical===true) //expensive computation
  const magical = useMemo(()=>number.find((item) => item.isMagical === true),[number])  //using useMemo to re-render it once or based on dependency
  


  return (
    <div>
      <span><p>Magical number is: {magical.index}</p></span>
      <div>
    <button onClick={()=> {
        setCount((count) => count + 1);
        if(count == 10){
            setNumber(new Array(10_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 9_00_000,
  }
}))
        }
        }}>count is: {count}
        </button>
        <h1>hi</h1>
      </div>
    </div>
  );
}
export default ExpensiveCount;
