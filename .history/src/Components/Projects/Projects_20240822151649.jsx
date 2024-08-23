import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard title="Authentication App" main="Tech Stack: MERN" />
        <ProjectCard
          title="Myntra Clone"
          main="This is a Shopping Website created in ReactJs"
        />
      </div>
    </div>
  );
};

export default Projects;
