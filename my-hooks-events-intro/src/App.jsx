import { useState } from "react";
import "./App.css";

function App() {
  let num1 = 0;

  // hooks - useState - dynamic variable

  let [num2, setNum2] = useState(0);

  const increament = () => {
    setNum2(num2 + 1);
    console.log("num2 = ", num2);
  };
  const deccreament = () => {
    if (num2 > 0) {
      setNum2(num2 - 1);
      console.log("num2 = ", num2);
    }else{
      alert('you cannot decrease the value from 0')
    }
  };
  const reset = () => {
    if (num2 == 0) {
      alert("Already Zero");
    } else {
      setNum2(0);
      console.log("num2 = ", num2);
    }
  };

  const greet = (name) => {
    console.log("good morning : ", name);
  };

  // const wishAdmin =()=>{
  //     greet('admin')
  // }
  // const wishUser =()=>{
  //     greet('user')
  // }
  return (
    <>
      <center>
        <button onClick={() => greet("admin")}>Greet Admin</button>{" "}
        <button onClick={() => greet("user")}>Greet User</button>
        <h1>Welcome to my App</h1>
        <h2 style={{ backgroundColor: "yellow" }}>Counter App</h2>
        <h2>Num2 = {num2}</h2>
        <button onClick={increament}>Increase</button> {"  "}
        <button onClick={deccreament}>Decrease</button> {"  "}
        <button onClick={reset}>Reset</button>
        {"  "}
        {/* 
        <button onClick={()=>setNum2(num2+1)}>Increase</button> {"  "}
        <button onClick={()=>setNum2(num2-1)}>Decrease</button> {"  "}
        <button onClick={()=>setNum2(0)}>Reset</button>{"  "} 
        */}
      </center>
    </>
  );
}

export default App;

// Hook --> useState ---> dynamic variable

// event --> onClick ---> to execute a function when button is clicked
