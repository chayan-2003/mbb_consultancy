import React from 'react';
import Navbar from './navbar';

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center p-8 bg-slate-300 relative bottom-1">
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-8">
          <h2 className="text-4xl font-bold uppercase mb-4 relative lg:bottom-10 font-serif">ABOUT US</h2>
          <div className="font-medium text-xl text-center lg:text-left">
            <p>
              MBB Consultancy is a leading engineering firm committed to excellence in providing
            </p>
            <p>
              innovative and sustainable solutions. With a team of dedicated professionals, we specialize in transforming ideas into reality.
            </p>
            <p>
              Our mission is to deliver high-quality engineering services, contributing to the development of resilient infrastructure.
              We pride ourselves on our commitment to precision, creativity,
              and client satisfaction.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1625722662233-297060231b85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l2aWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="About Us Image"
            className="w-full lg:w-96 p-4 lg:p-20"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
