import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import "./index.css";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Proje>
    </div>
  );
}

export default App;
