import React from 'react';
import Image from '../assets/Image.jpg';
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="md:h-4/5 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container mx-auto p-4 pt-20 md:px-2 lg:px-12 xl:p-24">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.5)] bg-b p-4 md:p-6 lg:p-12 xl:p-24">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <img
                src={Image}
                alt="Anurag Yadav"
                className="object-cover rounded-3xl h-3/4 w-2/3 md:w-1/3 md:h-3/4"
              />
              <div className="ml-4 md:ml-6 lg:ml-12 xl:ml-24 text-center md:text-left">
                <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:mt-2">
                  Anurag Yadav
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-1 md:mt-2">
                  Full Stack Developer
                </p>
                <p className="text-md md:text-lg lg:text-xl xl:text-2xl md:mt-2">
                  I'm a passionate full stack developer with a strong background in web development. I've worked on a variety of projects, from small startups to large enterprises.
                </p>
                <NavLink to='#'  rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                  <button className='bg-black font-bold text-white mt-2 md:mt-6 p-1 md:p-3 px-3 md:px-8 rounded-lg cursor-pointer hover:bg-gray-800 hover:scale-105 duration-300'>
                    Hire Me
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;