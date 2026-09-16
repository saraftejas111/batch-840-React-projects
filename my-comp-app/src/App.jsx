import "./App.css";
import Navbar from "./comps/Navbar";
import Fashion from "./pages/Fashion";
import Kids from "./pages/kids";
import Mobiles from "./pages/Mobiles";
import Pay from "./pages/Pay";

function App() {

  return (
    <>
      <center>

        <h1>Hello welcome to my app</h1>

        <Navbar/>
        <Mobiles/>
        <Fashion/>
        <Kids/>
        <Pay/>
        
      </center>
    </>
  );
}

export default App;
