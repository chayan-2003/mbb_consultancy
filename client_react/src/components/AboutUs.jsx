import React from 'react';
import Navbar from './navbar';

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-16 sm:p-8 md:p-24 lg:p-16 bg-slate-300 relative bottom-1">
        <div className="flex flex-col justify-center items-start mb-4 sm:mb-0">
          <h2 className="text-4xl font-bold uppercase mb-2 sm:mb-4 relative bottom-10 font-serif">
            ABOUT US
          </h2>
          <div className="font-medium text-xl">
            <p>
              <ul>
                MBB Consultancy is a leading engineering firm committed to excellence in providing
              </ul>
              <ul>
                innovative and sustainable solutions. With a team of dedicated professionals, we
                specialize in transforming ideas into reality.
              </ul>
            </p>
            <p>
              <ul>Our mission is to deliver high-quality engineering services, contributing to the development of resilient infrastructure.</ul>
              <ul>We pride ourselves on our commitment to precision, creativity, and client satisfaction.</ul>
            </p>
          </div>
        </div>
        <div className="ml-0 sm:ml-8">
        <img
  src="https://images.unsplash.com/photo-1625722662233-297060231b85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l2aWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
  alt="About Us Image"
  className="p-6 sm:p-20"
  style={{ width: '100%', height: 'auto' }}
/>
</div>

      </div>
    </>
  );
};

export default AboutUs;
