import {
  FaCss3,
  FaFigma,
  FaGoogle,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiRadixui,
  SiTailwindcss,
} from "react-icons/si";
import allstate_logo from "../../assets/Allstate-Logo-2017.png";
import image from "../../assets/proj.png";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 className=" text-[#e34c26]" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaCss3 className=" text-[#2965f1]" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <SiTailwindcss className=" text-[#06b6d4]" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <SiBootstrap className=" text-[#712CF9]" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaJs className="text-[#f0db4f]" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaReact className=" text-[#61dbfb] " />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaNode className="text-[#4db33d]" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <SiMongodb className="text-[#4db33d]" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaJava className="text-[#712CF5]" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <SiExpress className="text-slate-300" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;