import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex justify-between items-center border-b-4 border-white">
        <div className="text-white text-xl font-bold">MBB CONSULTANCY</div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Support
          </a>
        </div>
      </nav>

      <div className="relative">
        <section
          className="bg-cover bg-center h-96"
          style={{
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            opacity: 0.5, // Adjust the opacity value (0 is fully transparent, 1 is fully opaque)
          }}
        ></section>

        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-end text-black pr-20 text-right p-8">
          <div className="text-4xl font-bold mb-4">
            MBB CONSULTANCY
          </div>
          <div class="pr-20">
            <p>Your custom text line 1</p>
            <p>Your custom text line 2</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-400 transition duration-300   ">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
