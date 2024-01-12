import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import FormPage from "./pages/contacts/form.jsx";
import AboutPage from "./pages/Aboutus/About_pg.jsx";
import Client from "./pages/client_pg/client.jsx";
import Works_pg from "./pages/project_pg/Works_pg.jsx";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWithBackendData />} />
        <Route path="/contacts" element={<FormPage />} />
        <Route path="/about" element={<AboutPageWithBackendData />} />
        <Route path="/client" element={<ClientWithBackendData />} />
        <Route path="/projects" element={<WorksPageWithBackendData />} />
      </Routes>
    </BrowserRouter>
  );
}

const HomeWithBackendData = () => {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PROD_URL  || 'http://localhost:8800');
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchData();
  }, []);

  return <Home backendData={backendData} />;
};

const AboutPageWithBackendData = () => {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PROD_URL || 'http://localhost:8800'}/about-us`);
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchData();
  }, []);

  return <AboutPage backendData={backendData} />;
};

const ClientWithBackendData = () => {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PROD_URL || 'http://localhost:8800'}/clients`);
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchData();
  }, []);

  return <Client backendData={backendData} />;
};

const WorksPageWithBackendData = () => {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PROD_URL || 'http://localhost:8800'}/projects`);
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchData();
  }, []);

  return <Works_pg backendData={backendData} />;
};

export default App;
