import React from 'react'
import Form from '../../components/contacts'
import Navbar from '../../components/navbar';

export default function Form_Page () {
  const currentYear = new Date().getFullYear();
  return (
  <div> 
    <Navbar />
    <Form />
      <div className="text-center mt-40 text-sm sm:text-base lg:text-lg">
        <p>&copy; {currentYear} MBB CONSULTANCY. All rights reserved.</p>
      </div>
  </div>
  )
}
