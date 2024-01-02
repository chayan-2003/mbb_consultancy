import React from 'react'
import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/navbar'
import Footer  from '../../components/footer'
export default function About_pg() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
        <Navbar/>
        <AboutUs/>
        <div className="text-center mt-4">
        <p>&copy; {currentYear} MBB CONSULTANCY. All rights reserved.</p>
      </div>
    </div>
  )
}
