import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-500 to-black p-4  text-white py-8">
      <div className="container mx-auto flex  justify-around items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Information</h3>
          <ul className="text-lg">
            <li>Contact Number:  <span className='font-semibold'> 22429412 ,  65264472(o)</span></li>
            <li>Email ID:   <span className='font-semibold'> mbb62@rediffmail.com</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className=" ">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/client" className="text-white">
                Clients
              </Link>
            </li>
            
            <li>
              <Link to="/about" className="text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>&copy; {currentYear} MBB CONSULTANCY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;