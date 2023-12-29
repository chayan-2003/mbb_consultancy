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
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Projects
          </a>
          <Link to="/about">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            About Us
          </a>
          </Link>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Support
          </a>
        </div>
      </nav>

      <div className="relative bottom-1  border-gray-800 border-spacing-2 shadow-2xl shadow-gray-900 m-1  ">
        <section
          className="bg-cover bg-center h-96"
          style={{
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            opacity: 0.5, // Adjust the opacity value (0 is fully transparent, 1 is fully opaque)
          }}
        ></section>

        <div className="absolute inset-0 bg-white opacity-30"></div>

        < div className="absolute inset-0 flex flex-col items-end text-black pr-20 text-right p-8 max-h-max  justify-between">
          <div className="  text-5xl font-bold mb-16 relative right-64  bg-neutral-200  inline-block  font-san  mt-7">
             BUILD WITH MBB CONSULTANCY
          </div>
          <div class="pr-20">
            <p class=" font-serif text-3xl mb-5  bg-neutral-200 ">
"Building Tomorrow, Excelling Today: Crafting a Legacy of Precision and Innovation "</p>
            <p class=" font-serif text-3xl relative right-12  inline-block bg-neutral-200" >
"Elevating Infrastructure, Inspiring Confidence: Where Expertise Meets Vision "</p>
          </div>
          <Link to ="/contacts">
          <button className=" font-bold relative top-7 bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-400   mr-24 relative right-96  mr-52  mt-16 rounded-lg  h-12 ">
            Contact Us
          </button>
          </Link>
        </div>
     </div>
    </>
  );
};

export default Navbar;