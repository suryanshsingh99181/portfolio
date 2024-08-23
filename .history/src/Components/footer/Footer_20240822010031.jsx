import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-2xl md:text-sm font-normal ">
          Feel Free to reachout
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail />
          MyEmail@gmail.com
        </li>
        <li>
          <CiLinkedin />
          linkedin/username
        </li>
        <li>
          <FaGithub />
          github/surynsh
        </li>
      </ul>
    </div>
  );
};

export default Footer;
<div></div>;
