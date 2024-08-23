import { FaHtml5 } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaCss3 />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
