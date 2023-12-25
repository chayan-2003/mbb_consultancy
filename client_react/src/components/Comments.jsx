import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: '- John Doe',
      content: 'This service is amazing! I highly recommend it.I have never experienced such great service before. Kudos!The team is very professional and responsive. Thumbs up!',
      sign: '. . .',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'I have never experienced such great service before. Kudos!',
    },
    {
      id: 3,
      author: 'Sam Johnson',
      content: 'The team is very professional and responsive. Thumbs up!',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNextClick = () => {
    setCurrentTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="max-w-screen-3xl h-64 text-center p-8 bg-green-50 shadow-lg pt-10">
      <div className="relative">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none text-5xl pl-16"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none text-5xl pr-16"
          onClick={handleNextClick}
        >
          &gt;
        </button>
        <div className="text-center">
          {/* <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2> */}
          <p className="text-black text-2xl text-left pl-48 pr-44 font-bold">{testimonials[currentTestimonial].content}</p>
          <p className="text-gray-800 text-lg text-left pl-48 mt-2 ">{testimonials[currentTestimonial].author}</p>
          <p className="text-gray-800 text-3xl text-left pl-48 mt-2 font-extrabold">{testimonials[currentTestimonial].sign}</p>
        </div>
      </div>
    </div>
    
  );
};

export default TestimonialsSection;