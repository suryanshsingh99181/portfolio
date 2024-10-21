import ProjectCard from "./ProjectCard";
import proj1 from "../../assets/1.jpg";
import proj2 from "../../assets/2.jpg";
import proj3 from "../../assets/3.png";
import proj4 from "../../assets/6.png";
import proj5 from "../../assets/4.jpeg";
import proj6 from "../../assets/5.jpg";
import proj7 from "../../assets/proj7.png";
import proj8 from "../../assets/7.jpg";
import proj9 from "../../assets/8.jpg";
import proj10 from "../../assets/9.jpg";

const FullStackProjects = () => {
  return (
    <div
      id="Projects"
      className=" bg-gradient-to-tr from-black to to-slate-600 p-10 md:p-20 text-white"
    >
      <h1 className="text-2xl md:text-5xl text-white font-bold  pl-52 ">
        Projects
      </h1>
      <div className="carousel w-full mt-16">
        {/* page 1 */}
        <div id="item1" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj7}
            title="Image Processor"
            main="Tech Stack: ReactJs,Typescript, Multer, Sharp, NodeJs & TailwindCss"
            demoLink="https://image-processor-tawny.vercel.app/"
            srcLink="https://github.com/suryanshsingh99181/image-processor"
          />
          <ProjectCard
            imgSrc={proj1}
            title="Authentication App"
            main="Tech Stack: MERN"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/Authentication-App"
          />
        </div>
      </div>
    </div>
  );
};

export default FullStackProjects;
