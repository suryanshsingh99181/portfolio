import React from "react";
const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul className="mx-24 py-2 mt-4 font-semibold md:-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6">
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          About
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          Experience
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          Projects
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
