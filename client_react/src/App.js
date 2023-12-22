import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import AboutUs from "./components/AboutUs";

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("http://localhost:8800")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <Navbar />
      <AboutUs/>
    </div>
  );
}

export default App;
