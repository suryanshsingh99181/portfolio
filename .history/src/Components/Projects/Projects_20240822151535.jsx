import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          imageSrc=""
          title="Blogging Website"
          main="This is a blogging Website created in ReactJs"
        />
        <ProjectCard
          imageSrc=""
          title="Myntra Clone"
          main="This is a Shopping Website created in ReactJs"
        />
      </div>
    </div>
  );
};

export default Projects;
