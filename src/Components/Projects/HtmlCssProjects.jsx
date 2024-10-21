import ProjectCard from "./ProjectCard";
import proj6 from "../../assets/5.jpg";

const HtmlCssProjects = () => {
  return (
    <div
      id="Projects"
      className=" bg-gradient-to-tr from-black to to-slate-600 p-10 md:p-24 text-white"
    >
      <h1 className="text-2xl md:text-5xl text-white font-bold  pl-52 ">
        Projects
      </h1>
      <div className="carousel w-full mt-16">
        {/* page 1 */}
        <div id="item1" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj6}
            title="Amazon Clone UI"
            main="Tech Stack: HTML & CSS"
            demoLink="https://suryanshsingh99181.github.io/amazon-clone-UI/"
            srcLink="https://github.com/suryanshsingh99181/amazon-clone-UI"
          />
        </div>
      </div>
    </div>
  );
};

export default HtmlCssProjects;
