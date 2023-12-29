import React from 'react'
import Form from '../../components/contacts'
import Navbar from '../../components/navbar'
import {Link} from "react-router-dom"
export default function Form_Page () {
  return (
    <div> 
    <nav className="bg-gradient-to-r from-slate-400 to-black p-4 flex justify-between items-center border-b-4 border-white h-24">
    <Link to="/">
        <div className="text-white text-2xl font-bold">MBB CONSULTANCY</div>
        </Link>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Contact Us
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
    
    <Form />
    
    </div>
  )
}
