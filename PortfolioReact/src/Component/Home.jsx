import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1" >
          <span>Welcome to my Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            {/* <span className="text-red-700 font-bold">Developer</span> */}
            <ReactTyped className="text-red-700 font-bold"
         
          strings={["Developer", "Programer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
          </div>
          <br />
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium reiciendis in nulla tempore aut ratione expedita, nisi
            quod dolore, aliquid recusandae voluptatem, suscipit natus sapiente
            mollitia omnis fugiat maiores? Vel, nostrum facilis. Cumque nesciunt
            non sunt consequuntur labore laudantium ipsum!
          </p>
          <br />
          {/* social media icons */}
          <div className="flex flex-col text-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="text-center">
              <h3 className="font-semibold">Avaliable on</h3>
              <ul className="flex space-x-4 m:text-center">
                <li className="text-2xl cursor-pointer">
                 
                  <FaSquareFacebook />
                </li>
                <li className="text-2xl cursor-pointer">
                  <FaLinkedin />
                </li>
                <li className="text-2xl cursor-pointer">
                  <IoLogoYoutube />
                </li>
                <li className="text-2xl cursor-pointer">
                  <FaTelegram />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold flex  ">Currently Working on</h3>
              <ul className="flex space-x-4 pb-3 ">
                <li className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full cursor-pointer">
                  <SiExpress />
                </li>
                <li className="text-xl md:text-3xl hover:scale-100 cursor-pointer duration-200 rounded-full">
                  <SiMongodb />
                </li>
                <li className="text-xl md:text-3xl hover:scale-100 cursor-pointer duration-200 rounded-full">
                  <FaReact />
                </li>
                <li className="text-xl md:text-3xl hover:scale-100 cursor-pointer duration-200 rounded-full">
                  <FaNodeJs />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2">
          <img src="https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-6/277461979_363034872406215_9088215400092514248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hF-H2jf6qnwQ7kNvgHlTUcD&_nc_ht=scontent.fdel27-3.fna&oh=00_AYA_UDP9lf3dq_ucJXR07kONysC13WoqIqkh5nap2K8V8w&oe=664684EF" className="rounded-full md:h-[400px] md:w-[400px] m:w-[250px] m:h-[250px] m:mt-4" alt="" />
        </div>
      </div>
      <hr />
    </div>
   
  );
};

export default Home;
