import React from "react";
import "./App.css";
import Sum from "./Sum";
import Diff from "./Diff";

const App = () => {
  return (
    <div>
      <center>
        <h1>Welcome to my-redux-app</h1>

            <Sum/>
            <Diff/>

      </center>
    </div>
  );
};

export default App;
