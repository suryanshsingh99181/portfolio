import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          imgSrc="C:\Users\suryansh\OneDrive\Desktop\Portfolio-React\Portfolio\src\assets\1.jpg"
          title="Authentication App"
          main="Tech Stack: MERN"
        />
        <ProjectCard
          imdSrc="C:\Users\suryansh\OneDrive\Desktop\Portfolio-React\Portfolio\src\assets\2.jpg"
          title="Social Media App"
          main="Tech Stack: ReactJs & Bootstrap"
        />
        <ProjectCard
          imdSrc="C:\Users\suryansh\OneDrive\Desktop\Portfolio-React\Portfolio\src\assets\3.png"
          title="Calculator"
          main="Tech Stack: ReactJs & TailwindCss"
        />
        <ProjectCard
          imdSrc="C:\Users\suryansh\OneDrive\Desktop\Portfolio-React\Portfolio\src\assets\6.png"
          title="Rock-Paper-Scissor Game"
          main="Tech Stack: HTML, TailwindCss & Javascript"
        />
        <ProjectCard
          imdSrc="C:\Users\suryansh\OneDrive\Desktop\Portfolio-React\Portfolio\src\assets\4.jpeg"
          title="Myntra Functional Clone"
          main="Tech Stack: HTML, TailwindCss & Javascript"
        />
        <ProjectCard
          imdSrc="C:\Users\suryansh\OneDrive\Desktop\Portfolio-React\Portfolio\src\assets\5.jpg"
          title="Amazon Clone UI"
          main="Tech Stack: HTML & CSS"
        />
      </div>
    </div>
  );
};

export default Projects;
