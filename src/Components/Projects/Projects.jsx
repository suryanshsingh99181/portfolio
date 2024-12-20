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

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" bg-gradient-to-tr from-black to to-slate-600p-10 md:p-24 text-white"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

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
            imgSrc={proj8}
            title="Myntra Functional React Clone"
            main="Tech Stack: React.Js, Redux, Node.Js & Bootstrap"
            demoLink="https://myntra-functional-clone-react.vercel.app/"
            srcLink="https://suryanshsingh99181.github.io/myntra-funtional-clone-react/"
          />
        </div>
        {/* page 2 */}

        <div id="item2" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj1}
            title="Authentication App"
            main="Tech Stack: MERN"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/Authentication-App"
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

        {/* page 4 */}
        <div id="item4" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj3}
            title="Calculator"
            main="Tech Stack: ReactJs & TailwindCss"
            demoLink="https://suryanshsingh99181.github.io/calculator/"
            srcLink="https://github.com/suryanshsingh99181/calculator"
          />

          <ProjectCard
            imgSrc={proj6}
            title="Amazon Clone UI"
            main="Tech Stack: HTML & CSS"
            demoLink="https://suryanshsingh99181.github.io/amazon-clone-UI/"
            srcLink="https://github.com/suryanshsingh99181/amazon-clone-UI"
          />
        </div>
        {/* page 5 */}
        <div id="item5" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj9}
            title="Counter with React"
            main="Tech Stack: React.Js & Bootstrap"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/counter"
          />

          <ProjectCard
            imgSrc={proj10}
            title="To-Do App React"
            main="Tech Stack: React.Js & Bootstrap"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/todo_app-react"
          />
        </div>
        {/* page 6
        <div id="item6" className="carousel-item w-full justify-evenly">
          <ProjectCard
            imgSrc={proj9}
            title="Counter with React"
            main="Tech Stack: React.Js & Bootstrap"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/counter"
          />

          <ProjectCard
            imgSrc={proj10}
            title="To-Do App React"
            main="Tech Stack: React.Js & Bootstrap"
            demoLink=""
            srcLink="https://github.com/suryanshsingh99181/todo_app-react"
          />
        </div> */}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
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
        <a href="#item5" className="btn btn-md btn-outline btn-error">
          5
        </a>
      </div>
    </div>
  );
};

export default Projects;
