import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-slate-300 ">
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-4xl font-bold uppercase mb-4">ABOUT US</h2>
        <p>
          MBB Consultancy is a leading engineering firm committed to excellence in providing innovative and sustainable solutions. With a team of dedicated professionals, we specialize in transforming ideas into reality.
        </p>
        <p>
          Our mission is to deliver high-quality engineering services, contributing to the development of resilient infrastructure. We pride ourselves on our commitment to precision, creativity, and client satisfaction.
        </p>
      </div>
      <div className="ml-8 ">
        <img
          src="https://images.unsplash.com/photo-1625722662233-297060231b85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l2aWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D" // Replace with the actual path to your image
          alt="About Us Image"
          className="w-300   p-20 "
        />
      </div>
    </div>
  );
};

export default AboutUs;
