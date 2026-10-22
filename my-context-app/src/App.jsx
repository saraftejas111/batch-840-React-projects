import React from "react";
import "./App.css";
import Sum from "./Sum";
import Diff from "./Diff";
import Multiply from "./Multiply";
import NumsContext from "./NumsContext";
import ObjectContext from "./ObjectContext";
import ShowEmp from "./ShowEmp";

const App = () => {
  let a = 10;
  let b = 3;

  const employee = {name:'raj', role:'dev' , salary : 123456}

  return (
    <div>
      <center>
        <h1>Welcome to my context app</h1>

          {/*
           <Sum a={a} b={b} />
           <Diff a={a} b={b} />
           <Multiply a={a} b={b} /> 
          */}
        ---------------------------------------------------------------------------
        <NumsContext.Provider value={{a , b}} >

          <Sum />
          <Diff />
          <Multiply />

        </NumsContext.Provider>

<ObjectContext.Provider value={employee}>
  <ShowEmp/>
</ObjectContext.Provider>

      </center>
    </div>
  );
};

export default App;
