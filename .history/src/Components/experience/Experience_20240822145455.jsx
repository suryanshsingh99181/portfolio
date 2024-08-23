import { InboxArrowDownIcon } from "@heroicons/react/16/solid";
import { TfiArrowRight } from "react-icons/tfi";
import image from "../../assets/proj.png";
import allstate_logo from "../../assets/Allstate-Logo-2017.png";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Experience</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img
            className="md:h-80 -ml-28 pr-10"
            src={image}
            alt="Experience Image"
          />
          <ul>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
              <span className="text-white">
                <h2 className=" leading-tight ">
                  Associate Consultant at Allstate Solution Pvt Ltd
                </h2>
                <p className="text-sm leading-tight font-thin">
                  August 2022 - Nov 2023
                </p>
                <ul className="text-sm p-2">
                  <li>ServiceNow developer</li>
                </ul>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <TfiArrowRight />
              <span className="w-96">
                <p className="text-sm md:text-md leading-tight">
                  {" "}
                  Incident management, change management, problem management,
                  configuration management, asset management, and other
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <TfiArrowRight />
              <span className="w-96">
                <p className="text-sm md:text-md leading-tight">
                  {" "}
                  ServiceNow applications Workflow configuration, scheduled task
                  and other ServiceNow automation
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <TfiArrowRight />
              <span className="w-96">
                <p className="text-sm md:text-md leading-tight">
                  {" "}
                  Changed the workflow to flow as per the business needs
                  Performed the automation testing from user side as-well-as
                  server side
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
