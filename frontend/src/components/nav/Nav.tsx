import React from "react";
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { VscTerminal } from "react-icons/vsc";

const Nav: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content: any = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <LinkScroll spy={true} smooth={true} to="Proyectos">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Proyectos</li>
        </LinkScroll>
        <LinkScroll spy={true} smooth={true} to="about">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Sobre mí</li>
        </LinkScroll>
        <LinkRouter to="/book">
        <LinkScroll spy={true} smooth={true} to="Skills">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Skills</li>
        </LinkScroll>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Lee mi Libro</li>
        </LinkRouter>
        <LinkScroll spy={true} smooth={true} to="contact">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
        </LinkScroll>
      </ul>
    </div>
  </>

  return (
    <nav>
      <div className="absolute top-0 left-0 right-0 h-10vh flex justify-between z-[999] bg-slate-900 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold"><VscTerminal /></span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18]">
              <LinkScroll spy={true} smooth={true} to="Proyectos">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Proyectos</li>
              </LinkScroll>
              <LinkScroll spy={true} smooth={true} to="SobreMi">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Sobre mi</li>
              </LinkScroll>
              <LinkScroll spy={true} smooth={true} to="Skills">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Skills</li>
              </LinkScroll>
              <LinkRouter to="/book">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Lee mi Libro</li>
              </LinkRouter>
              <LinkScroll spy={true} smooth={true} to="/contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contacto</li>
              </LinkScroll>
            </ul>
          </div>
        </div>
        <div>{click && content} </div>
        <button className="block sm:hidden transition" onClick={handleClick}>{ click ? <FaTimes/> : <CiMenuFries/>}</button>
      </div>
    </nav>

  );
};

export default Nav;