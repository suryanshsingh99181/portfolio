import { useState } from "react";
import FullStackProjects from "./Projects/FullStackProjects";
import ReactProjects from "./Projects/ReactProjects";
import JsProjects from "./Projects/JsProjects";
import HtmlCssProjects from "./Projects/HtmlCssProjects";

const ToggleProject = () => {
  const [projectPage, setProjectPage] = useState("full-stack");
  const handleProjectBtn = (e) => {
    setProjectPage(e);
  };
  return (
    <div className="relative">
      <span className="absolute float-left left-2 top-1/2 flex flex-col">
        <a
          className="  bg-blue-500 mt-5 md:md-10 cursor-pointer text-white py-2 px-3 text-sm md:text-lg md:px-4 hover: duration-200 hover:bg-black  hover:border-2 hover:border-[#FF7C00] font-semibold rounded-3xl"
          onClick={() => {
            handleProjectBtn("full-stack");
          }}
        >
          Full Stack Projects
        </a>
        <a
          className=" bg-blue-500 mt-5 md:md-10 cursor-pointer text-white py-2 px-3 text-sm md:text-lg md:px-4 hover: duration-200 hover:bg-black hover:border-2 hover:border-[#FF7C00] font-semibold rounded-3xl"
          onClick={() => {
            handleProjectBtn("react");
          }}
        >
          React.Js Projects
        </a>
        <a
          className=" bg-blue-500 mt-5 md:md-10 cursor-pointer text-white py-2 px-3 text-sm md:text-lg md:px-4 hover: duration-200 hover:bg-black hover:border-2 hover:border-[#FF7C00] font-semibold rounded-3xl"
          onClick={() => {
            handleProjectBtn("javascript");
          }}
        >
          JavaScript
        </a>
        <a
          className=" bg-blue-500 mt-5 md:md-10 cursor-pointer text-white py-2 px-3 text-sm md:text-lg md:px-4 hover: duration-200 hover:bg-black hover:border-2 hover:border-[#FF7C00] font-semibold rounded-3xl"
          onClick={() => {
            handleProjectBtn("html-css");
          }}
        >
          HTML & CSS
        </a>
      </span>

      {projectPage === "full-stack" && <FullStackProjects />}
      {projectPage === "react" && <ReactProjects />}
      {projectPage === "javascript" && <JsProjects />}
      {projectPage === "html-css" && <HtmlCssProjects />}
    </div>
  );
};

export default ToggleProject;
