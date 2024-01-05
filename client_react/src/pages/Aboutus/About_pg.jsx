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
        <div className="text-center text-sm sm:text-base lg:text-lg md:mt-96 md:fixed md:bottom-0 md:w-full">
  <p>&copy; {currentYear} MBB CONSULTANCY. All rights reserved.</p>
</div>
    </div>
  )
}
