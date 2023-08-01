import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

//styles & images
import './App.css';

//pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              <Route exact path="/" element = {  <Home/>  } />
              <Route path="/contact" element = {  <Contact/> } />
              <Route path="/privacy" element = { <Privacy/>  } />
              <Route path="/terms" element = {  <Terms/>  } />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
