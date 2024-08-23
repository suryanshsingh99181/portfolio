import { Progress } from "@material-tailwind/react";
import "daisyui/dist/full.css";
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

import image from "../../assets/proj.png";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="mt-5">
        <div className=" flex flex-wrap justify-evenly w-auto gap-2">
          {/* flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 
          flex flex-wrap items-center justify-around*/}
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <FaHtml5 className=" text-[#e34c26] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
              color="#e34c26"
            ></progress>
          </div>
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <FaCss3 className=" text-[#2965f1] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <SiTailwindcss className=" text-[#06b6d4] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <SiBootstrap className=" text-[#712CF9] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <FaJs className="text-[#f0db4f] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <FaReact className=" text-[#61dbfb] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>{" "}
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <FaNode className="text-[#4db33d] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>{" "}
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <SiMongodb className="text-[#4db33d] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <FaJava className="text-[#712CF5] w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>{" "}
          <div className="w-1/4">
            <span className="p-3 bg-zinc-950 flex items-center rounded-full w-1/4">
              <SiExpress className="text-slate-300 w-10 h-10" />
            </span>
            <progress
              className="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
