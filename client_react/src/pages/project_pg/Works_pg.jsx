import React from 'react'
import Works from '../../components/works'
import Navbar from '../../components/navbar'
export const Works_pg = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Navbar/>
      <Works/>
      <div className="text-center mt-4">
        <p>&copy; {currentYear} MBB CONSULTANCY. All rights reserved.</p>
      </div>
    </div>
  )
}
