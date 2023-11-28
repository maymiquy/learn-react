import Button from "./components/Elements/Button";
import { Link } from "react-router-dom";

function App() {
 return (
  <div className="flex flex-col justify-center bg-slate-200 items-center h-screen">
   <div className="flex justify-center items-center">
    <h1 className="font-semibold text-slate-700 text-3xl">Learn Library React</h1>
   </div>
   <div className="flex justify-center items-center my-5">
    <Button classname="bg-green-600 shadow-xl mx-2">
     <Link to="/login">Login</Link>
    </Button>
    <Button classname="bg-blue-600 shadow-xl mx-2">
     <Link to="/register">Register</Link>
    </Button>
   </div>
  </div>
 );
}

export default App;
