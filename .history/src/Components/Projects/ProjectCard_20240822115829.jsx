import suryansh from "../../assets/suryansh.jpg";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="w-2/5 p-3 md:p-6 flex flex-col bg-white shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="p-4 rounded-3xl shadow-md shadow-black"
        src={suryansh}
        alt="bannerimage"
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-base leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;