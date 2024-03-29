import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);  //first variable, second function
  //console.log(num);

  //let x = 1;

  const handleAdd = () => {
    // x = x + 1; // x++; x+=1;
    // console.log("x", x);

    setNum((currValue) =>{
      return currValue + 1;
    });
  };
  console.log(num);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;
