import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 ">
      <div className="flex justify-between h-16 fixed top-0 left-0 right-0">
        <div className="flex space-x-2">
          <img
            src="https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-6/277461979_363034872406215_9088215400092514248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hF-H2jf6qnwQ7kNvgHlTUcD&_nc_ht=scontent.fdel27-3.fna&oh=00_AYA_UDP9lf3dq_ucJXR07kONysC13WoqIqkh5nap2K8V8w&oe=664684EF"
            className="h-12 w-12 rounded-full mt-2 ml-6"
            alt=""
          />
          <h1 className="font-semibold text-xl cursor-pointer">
            Vaisha<span className="text-green-500 text-2xl">li</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8 mt-4 ml-20">
          <ul className="flex space-x-8 justify-end mr-8">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div onClick={() => setMenu(!menu)} className="md:hidden mt-2 text-2xl">
          {menu ? <AiOutlineMenu size={28} /> : <MdClose size={28} />}
        </div>
      </div>
      {menu && (
        <div>
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 ">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer font-semibold text-xl"
                key={id}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
