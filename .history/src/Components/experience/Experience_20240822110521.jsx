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

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
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
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={allstate_logo} className="w-20 text-[#0033A0]" />
          <span className="text-white">
            <h2 className=" leading-tight ">
              Associate Consultant at Allstate Solution Pvt Ltd
            </h2>
            <p className="text-sm leading-tight font-thin">
              August 2022 - Nov 2023
            </p>
            <ul className="text-sm p-2">
              <li>Worked as Software developer</li>
              <li>Senior Developer</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
