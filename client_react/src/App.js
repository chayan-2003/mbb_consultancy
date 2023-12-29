import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Form_Page from "./pages/contacts/form.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Client from "./pages/client_pg/client.jsx";

function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/contacts"  element={<Form_Page/>}/>
    <Route path="/about"  element={<AboutUs/>}/>
    <Route path="/client"  element={<Client/>}/>
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
