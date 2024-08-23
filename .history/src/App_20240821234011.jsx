import About from "./Components/about/About";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import "./index.css";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
