import React from "react";
import image from "../../assets/suryansh.jpg";
import TextChanger from "../../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 mt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter ">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl leading-tight tracking-tight font-serif mt-4">
          a MERN stack developer...
        </p>
        <button className=" bg-blue-500 mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover: duration-300 hover:scale-105 hover:bg-transparent hover:border-[#FF7C00] font-semibold rounded-3xl bg-[#46]">
          Contact Me
        </button>
      </div>
      <div>
        <img
          className="h-96 w-96 rounded-full object-cover object-center p-2 border-4 border-[#FF7C00] shadow-[0_0_0_5px_rgba(0,0,0,1)]"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
