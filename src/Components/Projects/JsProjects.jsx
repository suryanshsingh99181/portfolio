import ProjectCard from "./ProjectCard";
import proj5 from "../../assets/4.jpeg";
import proj4 from "../../assets/6.png";
import proj1 from "../../assets/proj1.jpg";
import cal2 from "../../assets/cal2.jpg";

const JsProjects = () => {
  return (
    <div
      id="Projects"
      className=" bg-gradient-to-b from-black to to-slate-600 p-10 md:p-24 text-white"
    >
      <h1 className="text-2xl md:text-5xl text-white font-bold  pl-52 ">
        Projects
      </h1>
      <div className="carousel w-full mt-16">
        {/* page 1 */}
        <div id="item1" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj5}
            title="Myntra Functional Clone"
            main="Tech Stack: HTML, TailwindCss & Javascript"
            demoLink="https://suryanshsingh99181.github.io/myntra-funtional-clone/"
            srcLink="https://github.com/suryanshsingh99181/myntra-funtional-clone"
          />
          <ProjectCard
            imgSrc={proj4}
            title="Rock-Paper-Scissor Game"
            main="Tech Stack: HTML, TailwindCss & Javascript"
            demoLink="https://suryanshsingh99181.github.io/stone-paper-scissor/"
            srcLink="https://github.com/suryanshsingh99181/stone-paper-scissor"
          />
        </div>
        {/* page 2 */}

        <div id="item2" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={cal2}
            title="Calculator"
            main="Tech Stack: HTML, TailwindCss & Javascript"
            demoLink="https://suryanshsingh99181.github.io/calculator/"
            srcLink="https://github.com/suryanshsingh99181/calculator"
          />

          <ProjectCard
            imgSrc={proj1}
            title="Tic Tac Toe"
            main="Tech Stack: HTML, TailwindCss & Javascript"
            demoLink="#"
            srcLink="#"
          />
          {/*  */}
        </div>
      </div>
      <div className="absolute float-right right-5 top-1/2 flex flex-col justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-md btn-outline btn-error">
          1
        </a>
        <a href="#item2" className="btn btn-md btn-outline btn-error">
          2
        </a>
      </div>
    </div>
  );
};

export default JsProjects;
