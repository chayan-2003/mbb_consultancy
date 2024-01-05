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
    <div
      className="relative h-64 text-center p-14 bg-gradient-to-r from-blue-100 to-blue-200 bg-center bg-no-repeat shadow-sm shadow-black mb-2"
      // style={{
      //   backgroundImage: 'url("")',
      //   backgroundSize: '100% 100%', // Fit the entire image without shrinking
      //   backgroundColor: 'rgba(255, 255, 255, 0.9)',
      //   backdropFilter: 'blur(5px)', // Set opacity by adjusting the alpha value
      // }}
    >
      <div className="absolute top-1/4 left-4 transform focus:outline-none text-5xl pl-16">
        <button onClick={handlePrevClick}>&lt;</button>
      </div>
      <div className="absolute top-1/4 right-4 transform focus:outline-none text-5xl pr-16">
        <button onClick={handleNextClick}>&gt;</button>
      </div>
      <div className="text-center">
        {/* <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2> */}
        <p className="text-black text-2xl text-left pl-48 pr-44 font-bold">
          {testimonials[currentTestimonial].content}
        </p>
        <p className="text-gray-800 text-lg text-left pl-48 mt-2">
          {testimonials[currentTestimonial].author}
        </p>
        {/* Note: The sign property is not present in the testimonials data, so it's commented out to prevent errors */}
        {/* <p className="text-gray-800 text-3xl text-left pl-48 mt-2 font-extrabold">
          {testimonials[currentTestimonial].sign}
        </p> */}
      </div>
    </div>
  );
};

export default TestimonialsSection;