import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: '- John Doe',
      content:
        'This service is amazing! I highly recommend it. I have never experienced such great service before. Kudos! The team is very professional and responsive. Thumbs up!',
    },
    {
      id: 2,
      author: '- Jane Smith',
      content: 'I have never experienced such great service before. Kudos!',
    },
    {
      id: 3,
      author: '- Sam Johnson',
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
    <div className="relative h-64 text-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-gradient-to-r from-blue-100 to-blue-200 bg-center bg-no-repeat shadow-sm shadow-black mb-2">
      <div className="absolute top-1/4 left-4 transform focus:outline-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-32 pr-4 sm:pr-8 md:pr-16 lg:pr-32">
        <button onClick={handlePrevClick}>&lt;</button>
      </div>
      <div className="absolute top-1/4 right-4 transform focus:outline-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pr-4 sm:pr-8 md:pr-16 lg:pr-32">
        <button onClick={handleNextClick}>&gt;</button>
      </div>
      <div className="text-center">
        <p className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-left pl-4 sm:pl-8 md:pl-16 lg:pl-32 pr-4 sm:pr-8 md:pr-16 lg:pr-32 font-bold">
          {testimonials[currentTestimonial].content}
        </p>
        <p className="text-gray-800 text-lg md:text-xl lg:text-2xl xl:text-3xl text-left pl-4 sm:pl-8 md:pl-16 lg:pl-32 mt-2">
          {testimonials[currentTestimonial].author}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
