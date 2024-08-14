import React from "react";
import { Link as LinkScroll } from 'react-scroll';
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { VscTerminal } from "react-icons/vsc";

const Nav: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <LinkScroll spy={true} smooth={true} to="Proyectos" onClick={handleClick}>
            Proyectos
          </LinkScroll>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <LinkScroll spy={true} smooth={true} to="SobreMi" onClick={handleClick}>
            Sobre mí
          </LinkScroll>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <LinkScroll spy={true} smooth={true} to="Skills" onClick={handleClick}>
            Skills
          </LinkScroll>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <LinkScroll spy={true} smooth={true} to="Ebook" onClick={handleClick}>
            Lee mi Libro
          </LinkScroll>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <LinkScroll spy={true} smooth={true} to="Contact" onClick={handleClick}>
            Contacto
          </LinkScroll>
        </li>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="absolute top-0 left-0 right-0 h-10vh flex justify-between z-[999] bg-slate-900 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold"><VscTerminal /></span>
        </div>
        <div className="lg:flex items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18]">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <LinkScroll spy={true} smooth={true} to="Proyectos">
                  Proyectos
                </LinkScroll>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <LinkScroll spy={true} smooth={true} to="SobreMi">
                  Sobre mí
                </LinkScroll>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <LinkScroll spy={true} smooth={true} to="Skills">
                  Skills
                </LinkScroll>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <LinkScroll spy={true} smooth={true} to="Ebook">
                  Lee mi Libro
                </LinkScroll>
              </li>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                <LinkScroll spy={true} smooth={true} to="Contact">
                  Contacto
                </LinkScroll>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block lg:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
