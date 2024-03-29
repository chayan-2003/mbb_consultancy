import React from 'react'
import Clients from '../../components/clients'
import Navbar from '../../components/navbar'

export default function Client() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
        <Navbar/>
        <Clients/>
        <div className="text-center mt-4">
        <p>&copy; {currentYear} MBB CONSULTANCY. All rights reserved.</p>
      </div>
    </div>
  )
}
