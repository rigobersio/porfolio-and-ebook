import React from 'react';
import { Link } from 'react-router-dom';
import "./navBar.css"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre mí</Link>
      <Link to="/book">Lee mi Libro</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
};

export default Navbar;