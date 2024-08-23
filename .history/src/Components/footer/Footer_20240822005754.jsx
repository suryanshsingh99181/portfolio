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
        <li>
          <MdOutlineEmail />
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
<div></div>;
