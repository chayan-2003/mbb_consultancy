import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="relative bottom-1 border-gray-800 border-spacing-2 m-1">
        <section
          className="bg-cover bg-center h-96"
          style={{
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            opacity: 0.5,
          }}
        ></section>

        <div className="absolute inset-0 bg-white opacity-30"></div>

        <div className="absolute inset-0 flex flex-col items-end text-black pr-4 sm:pr-8 md:pr-16 lg:pr-20 text-right p-2 sm:p-4 lg:p-8 max-h-max justify-between">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 lg:mb-16 relative right-16 sm:right-32 md:right-48 lg:right-64 bg-neutral-200 inline-block font-san mt-2 sm:mt-4 lg:mt-7">
            BUILD WITH MBB CONSULTANCY
          </div>
          <div className="pr-4 sm:pr-8 md:pr-12 lg:pr-20">
            <p className="font-serif text-lg sm:text-2xl lg:text-3xl mb-2 sm:mb-4 lg:mb-5 bg-neutral-200">
              "Building Tomorrow, Excelling Today: Crafting a Legacy of Precision and Innovation "
            </p>
            <p className="font-serif text-lg sm:text-2xl lg:text-3xl relative right-2 sm:right-4 lg:right-12 inline-block bg-neutral-200">
              "Elevating Infrastructure, Inspiring Confidence: Where Expertise Meets Vision "
            </p>
          </div>
          <Link to="/contacts">
            <button className="font-bold relative top-2 sm:top-4 lg:top-7 bg-blue-500 text-white py-1 sm:py-2 lg:py-3 px-2 sm:px-4 lg:px-6 mt-2 sm:mt-4 lg:mt-6 hover:bg-blue-400 mr-4 sm:mr-8 lg:mr-16 relative right-8 sm:right-16 lg:right-24 mt-4 sm:mt-8 lg:mt-16 rounded-lg h-8 sm:h-10 lg:h-12">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
