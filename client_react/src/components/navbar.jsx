import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <>
      <nav className="bg-gradient-to-r from-slate-400 to-black p-4 flex justify-between items-center border-b-4 border-white h-24">
       <Link to="/">
        <div className="text-white text-2xl font-bold">MBB CONSULTANCY</div>
        </Link>
        <div className="flex space-x-4">
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