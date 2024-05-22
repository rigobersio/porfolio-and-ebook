import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content: any = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <link spy={true} smooth={true} to="/">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Inicio</li>
        </link>
        <link spy={true} smooth={true} to="/about">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Sobre mí</li>
        </link>
        <link spy={true} smooth={true} to="/book">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Lee mi Libro</li>
        </link>
        <link spy={true} smooth={true} to="/contact">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
        </link>
      </ul>
    </div>
  </>

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18]">
              <link spy={true} smooth={true} to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Inicio</li>
              </link>
              <link spy={true} smooth={true} to="/about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Sobre mi</li>
              </link>
              <link spy={true} smooth={true} to="/book">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Lee mi Libro</li>
              </link>
              <link spy={true} smooth={true} to="/contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contacto</li>
              </link>
            </ul>
          </div>
        </div>
        <div>{click && content} </div>
        <button className="block sm:hidden transtion" onClick={handClick}>{ click ? <FaTimes/> : <CiMenuFries/>}</button>
      </div>
    </nav>

  );
};

export default Nav;