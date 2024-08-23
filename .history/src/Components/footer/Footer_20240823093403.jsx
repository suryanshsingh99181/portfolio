import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-gradient-to-tr from-black to to-slate-600 text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="ml-2 text-2xl md:text-sm font-normal ">
          Feel Free to reachout..
        </h3>
      </div>
      <HiOutlineArrowUpCircle className="text-5xl " />
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail />
          suryanshsingh99181@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkedin.com/in/suryansh_s1
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/surynshsingh99181
        </li>
      </ul>
    </div>
  );
};

export default Footer;
<div></div>;
