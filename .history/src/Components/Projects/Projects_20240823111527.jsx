import ProjectCard from "./ProjectCard";
import proj1 from "../../assets/1.jpg";
import proj2 from "../../assets/2.jpg";
import proj3 from "../../assets/3.png";
import proj4 from "../../assets/6.png";
import proj5 from "../../assets/4.jpeg";
import proj6 from "../../assets/5.jpg";

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" bg-gradient-to-tr from-black to to-slate-600p-10 md:p-24 text-white"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

      {/* <div className="py-12 flex flex-wrap justify-evenly gap-y-3">
        <ProjectCard
          imgSrc={proj1}
          title="Authentication App"
          main="Tech Stack: MERN"
        />
        <ProjectCard
          imgSrc={proj2}
          title="Social Media App"
          main="Tech Stack: ReactJs & Bootstrap"
        />
        <ProjectCard
          imgSrc={proj3}
          title="Calculator"
          main="Tech Stack: ReactJs & TailwindCss"
        />
        <ProjectCard
          imgSrc={proj4}
          title="Rock-Paper-Scissor Game"
          main="Tech Stack: HTML, TailwindCss & Javascript"
        />
        <ProjectCard
          imgSrc={proj5}
          title="Myntra Functional Clone"
          main="Tech Stack: HTML, TailwindCss & Javascript"
        />
        <ProjectCard
          imgSrc={proj6}
          title="Amazon Clone UI"
          main="Tech Stack: HTML & CSS"
        />
      </div> */}
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj1}
            title="Authentication App"
            main="Tech Stack: MERN"
          />
          <ProjectCard
            imgSrc={proj2}
            title="Social Media App"
            main="Tech Stack: ReactJs & Bootstrap"
          />
        </div>
        <div id="item2" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj3}
            title="Calculator"
            main="Tech Stack: ReactJs & TailwindCss"
          />
          <ProjectCard
            imgSrc={proj4}
            title="Rock-Paper-Scissor Game"
            main="Tech Stack: HTML, TailwindCss & Javascript"
          />
        </div>
        <div id="item3" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj5}
            title="Myntra Functional Clone"
            main="Tech Stack: HTML, TailwindCss & Javascript"
          />
          <ProjectCard
            imgSrc={proj6}
            title="Amazon Clone UI"
            main="Tech Stack: HTML & CSS"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-md">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Projects;
