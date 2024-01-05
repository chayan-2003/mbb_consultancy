import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="relative bottom-1 border-gray-800  sm:w-full">
        <section
  className="bg-cover bg-center h-80 w-full "
  style={{
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    opacity: 0.5,
  }}
></section>


        <div className="absolute inset-0 bg-white opacity-30"></div>

        <div className="absolute inset-0 flex flex-col items-center text-black pr-4 lg:pr-20 text-center p-2 lg:p-8 max-h-max justify-between">
          <div className="text-xl lg:text-4xl font-bold mb-2 lg:mb-8 bg-neutral-200 inline-block font-san mt-2 lg:mt-4">
            BUILD WITH MBB CONSULTANCY
          </div>
          <div className="pr-4 lg:pr-8">
            <p className="font-serif text-base lg:text-2xl mb-2 lg:mb-4 bg-neutral-200">
              "Building Tomorrow, Excelling Today: Crafting a Legacy of Precision and Innovation "
            </p>
            <p className="font-serif text-base lg:text-2xl inline-block bg-neutral-200">
              "Elevating Infrastructure, Inspiring Confidence: Where Expertise Meets Vision "
            </p>
          </div>
          
          <Link to="/contacts" className="flex justify-center mt-2 lg:mt-4">
          <button className="font-bold bg-blue-500 text-white py-2 px-4 lg:py-3 lg:px-6 mt-2 lg:mt-4 hover:bg-blue-400 rounded-lg">
            Contact Us
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
