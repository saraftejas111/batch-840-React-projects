import "./App.css";

function App() {
  
  let name = "Akshay";

  let num1 = 10;

  let num2 = 3 ; 
  
  let num3 = '5'

  let isActive = false ; 

  function greet (){
    console.log("Hello From Greet Funtion...")
  }


// in html tags attributes are in lowercase 
// in react jsx html tags attributes are in camelCase 

  return (
    <>
      <h1>Welcome to my App : {name}</h1>

      { isActive ? "Welcome" : "Not welcome" }

      {"Hello All... i am a normal text"}

      {/* {
        for(i = 1 ; i <= 5 ; i++){
           console.log(i)
        }
      } */}

      <button onClick={greet}>Greet Me</button>

      <h2>User is : {isActive ? "Online" : "Offline"}</h2>

      <h2>ab = {num1-num3}</h2>

      <h2>Sum = {num1 + num2}</h2>
      <h2>Diff = {num1 - num2}</h2>
      <h2>Multiply = {num1 * num2}</h2>
      <h2>Div = {num1 / num2}</h2>

      {/* <h3>try : {name+num1}</h3> */}
    </>
  );
}

export default App;

// Root Component
