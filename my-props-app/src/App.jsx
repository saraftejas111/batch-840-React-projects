import React, { useState } from "react";
import "./App.css";
import Sum from "./Sum";
import Substraction from "./Substraction";
import Mutiply from "./Mutiply";
import RecieveFun from "./RecieveFun";
import SendFun from "./SendFun";
import RevSum from "./RevSum";
import ShowEmp from "./industrylevel/ShowEmp";
import EmpForm from "./industrylevel/EmpForm";

const App = () => {
  const [a , setA] = useState(0)
  const [b , setB] = useState(0)

  const [ref , setRef] = useState(0)

  const myName =()=>{
    return "TKA" ;
  }

  const getChildMsg = (msg) => {
    console.log(msg)
  }

  const revSum = (a,b) => {

        console.log("sum = " , (a+b))
  }

  return (
    <div>
      <center>
        {/* <h1>Welcome to my-props-app</h1> */}

        {/* 1st value = <input type="number" onChange={(e)=>setA(Number(e.target.value))}/> <br /><br />
        2nd value = <input type="number" onChange={(e)=>setB(Number(e.target.value))}/> <br /><br /> */}
   
{/* ============================================================================================= */}
        {/* <Sum a={a} b={b}/>

        <Substraction a={a} b={b}/>

        <Mutiply x={a} y={b}/> */}

  {/* parent to child comp communication using props  */}

  {/* <RecieveFun getData={myName}/>

  <SendFun sendData={getChildMsg}/> <br /><br />

  <RevSum revSum={revSum}/> */}

<EmpForm refresh={(e)=>setRef(ref+e)}/>

  <ShowEmp doRefresh={ref}/>

      </center>
    </div>
  );
};

export default App;
