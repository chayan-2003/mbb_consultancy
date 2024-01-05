import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../../components/navbar.jsx";
import AboutUs from "../../components/AboutUs.jsx";
import Location from "../../components/Location.jsx";
import TestimonialsSection from "../../components/Comments.jsx";
import Services from "../../components/Services.jsx";
import Footer from "../../components/footer.jsx";
import Header from "../../components/Header.jsx";

const Home = () => {
  return (
    <div className="flex flex-col justify-center md:w-full">
      <Navbar />
      <Header />
      <Services />
      <div className="bg-slate-100">
        <div className="container mx-auto p-4 sm:w-full md:w-full lg:w-full">
          <div className="mb-3">
            <Location />
          </div>
          <TestimonialsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
