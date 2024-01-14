import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const isMobile = window.innerWidth <= 640;

  const toggleMenu = () => {
    setIsMenuBarOpen(!isMenuBarOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-400 to-black p-4 flex flex-col sm:items-center sm:flex-row sm:justify-between border-b-4 border-white h-auto sm:h-24">
        <Link to="/">
          <div className="text-white text-2xl sm:text-3xl font-bold">MBB Consultancy</div>
        </Link>
        {isMobile && (
          <i className="fa fa-bars absolute right-3 cursor-pointer" style={{ fontSize: "36px", color: "white" }} onClick={toggleMenu}></i>
        )}
        
        <div className={`flex flex-col mt-4 sm:mt-0 sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 ${isMobile ? (isMenuBarOpen ? 'block' : 'hidden') : 'block'}`}>
          <Link to="/contacts">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Contact Us
            </a>
          </Link>
          <Link to="/client">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Clients
            </a>
          </Link>
          <Link to="/projects">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Projects
            </a>
          </Link>
          <Link to="/about">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About Us
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
