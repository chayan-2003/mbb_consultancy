import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Form_Page from "./pages/contacts/form.jsx";
import About_pg from "./pages/Aboutus/About_pg.jsx";
import Client from "./pages/client_pg/client.jsx";
import { Works_pg } from "./pages/project_pg/Works_pg.jsx";

function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/contacts"  element={<Form_Page/>}/>
    <Route path="/about"  element={<About_pg/>}/>
    <Route path="/client"  element={<Client/>}/>
    <Route path="/projects"  element={<Works_pg/>}/>
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
