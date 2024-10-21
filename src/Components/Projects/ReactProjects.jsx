import ProjectCard from "./ProjectCard";
import proj2 from "../../assets/2.jpg";
import proj3 from "../../assets/3.png";
import proj7 from "../../assets/proj7.png";
import proj8 from "../../assets/7.jpg";
import proj9 from "../../assets/8.jpg";
import proj10 from "../../assets/9.jpg";
import MusicPlayerUi from "../../assets/music1.png";

const ReactProjects = () => {
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
            imgSrc={MusicPlayerUi}
            title="Music Player"
            main="Tech Stack: React.Js, Javascript, REST API & TailwindCss"
            demoLink="https://music-player-ui-topaz.vercel.app/"
            srcLink="https://github.com/suryanshsingh99181/Music-Player-UI"
          />
          <ProjectCard
            imgSrc={proj7}
            title="Image Processor"
            main="Tech Stack: ReactJs,Typescript, Multer, Sharp, NodeJs & TailwindCss"
            demoLink="https://image-processor-tawny.vercel.app/"
            srcLink="https://github.com/suryanshsingh99181/image-processor"
          />
        </div>
        {/* page 2 */}

        <div id="item2" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj8}
            title="Myntra Functional React Clone"
            main="Tech Stack: React.Js, Redux, Node.Js & Bootstrap"
            demoLink="https://myntra-functional-clone-react.vercel.app/"
            srcLink="https://suryanshsingh99181.github.io/myntra-funtional-clone-react/"
          />

          <ProjectCard
            imgSrc={proj2}
            title="Social Media App"
            main="Tech Stack: ReactJs & Bootstrap"
            demoLink="https://social-media-app-eight-alpha.vercel.app/"
            srcLink="https://github.com/suryanshsingh99181/social-media-app"
          />
          {/*  */}
        </div>
        {/* page 3 */}
        <div id="item3" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj3}
            title="Calculator"
            main="Tech Stack: ReactJs & TailwindCss"
            demoLink="https://suryanshsingh99181.github.io/calculator/"
            srcLink="https://github.com/suryanshsingh99181/calculator"
          />
          <ProjectCard
            imgSrc={proj9}
            title="Counter with React"
            main="Tech Stack: React.Js & Bootstrap"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/counter"
          />
        </div>

        {/* page 4 */}
        <div id="item4" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj10}
            title="To-Do App React"
            main="Tech Stack: React.Js & Bootstrap"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/todo_app-react"
          />
        </div>
      </div>
      <div className="absolute float-right right-5 top-1/2 flex flex-col justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-md btn-outline btn-error">
          1
        </a>
        <a href="#item2" className="btn btn-md btn-outline btn-error">
          2
        </a>
        <a href="#item3" className="btn btn-md btn-outline btn-error">
          3
        </a>
        <a href="#item4" className="btn btn-md btn-outline btn-error">
          4
        </a>
      </div>
    </div>
  );
};

export default ReactProjects;
