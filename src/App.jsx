import Experience from "./Components/experience/Experience";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/skills/Skills";
import ToggleProject from "./Components/ToggleProject";
import "./index.css";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar></Navbar>
      <Home></Home>
      <Experience></Experience>
      <Skills></Skills>
      <ToggleProject />
      <Footer></Footer>
    </div>
  );
}

export default App;
