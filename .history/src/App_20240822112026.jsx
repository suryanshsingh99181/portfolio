import About from "./Components/about/About";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/skills/Skills";
import "./index.css";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
