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
      <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
        <div className="carousel-item bg-green-200">
          <ProjectCard
            className="w-full"
            imgSrc={proj6}
            title="Amazon Clone UI"
            main="Tech Stack: HTML & CSS"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
