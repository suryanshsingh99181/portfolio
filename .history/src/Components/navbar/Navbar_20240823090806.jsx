import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [menu, openMenu] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 md:px-20 bg-slate-800 ">
      <span className="text-2xl font-bold tracking-wide hover:text-blue-300">
        Suryansh.
      </span>
      <ul
        className={`mx-24 mt-3 py-2 font-semibold md:-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 ${
          menu ? "block" : "hidden"
        }`}
      >
        <a href="#Experience">
          <li className="text-md transition-all duration-500 p-1 md:p-0 hover:text-blue-300 hover:underline ">
            Experience
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-300 hover:underline">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-300 hover:underline">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-300 hover:underline">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu3Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
