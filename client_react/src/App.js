import React from "react";
import Navbar from "./components/navbar";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import TestimonialsSection from "./components/Comments";
import Services from "./components/Services";
import Form from "./components/Form";
 

function App() {
  return (
    <div>
      <Navbar />
      <AboutUs/>
      <Services/>
      <TestimonialsSection/>
      <div class="bg-slate-100">
      <Location/>
      <Form/>
      </div>

    </div>
  );
}

export default App;
