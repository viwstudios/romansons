import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./Main/Components/Home/Features";
import Footer from "./Main/Components/Common/Footer";
import Hero from "./Main/Components/Home/Hero";
import Navbar from "./Main/Components/Common/Navbar";
import Pricing from "./Main/Components/Home/Pricing";
import AboutPage from "./Main/Pages/About/AboutPge";
import Landing from "./Main/Pages/Home/Landing";
import ServicePage from "./Main/Pages/Services/ServicePage";
import CalculPage from "./Main/Pages/Calculator/CalculPage";
import Projects from "./Main/Components/Projects/Projects";
import Testimonials from "./Main/Components/Testimonials/Testimonials";
import Contact from "./Main/Components/Contact/Contact";
import Login from './Main/Pages/Login/LoginPage';
import Signup from './Main/Pages/Login/SignupPage';

function App() {
  return (
    <>
      {(window.location.pathname =='/login') || (window.location.pathname =='/signup') ?<></> :<Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/explore' element={<CalculPage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {window.location.pathname =='/login' || (window.location.pathname =='/signup')?<></> :<Footer />}
    </>
  )
}

export default App;