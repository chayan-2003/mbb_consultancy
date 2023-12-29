import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-400 to-black p-4 text-white text-center mt-10">
      <p>&copy; {currentYear} MBB CONSULTANCY. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
