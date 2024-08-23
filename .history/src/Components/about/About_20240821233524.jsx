import { InboxArrowDownIcon } from "@heroicons/react/16/solid";

const About = () => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="about Image" />
          <ul>
            <div className="flex gap-3 py-4">
              <InboxArrowDownIcon size={30} className="mt-1" />
              <span className="w-96">Front-End Developer</span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
