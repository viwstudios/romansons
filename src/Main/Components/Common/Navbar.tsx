import React from 'react'
import '../../css/bootstrap.min.css';
import '../../css/style.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const nav = useNavigate();
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-primary m-0"><img className="me-3" src="./img/romansonsLogo.png" alt="Icon"/></h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <a href='about' className="nav-item nav-link">About</a>
                    <a href="services" className="nav-item nav-link">Services</a>
                    <a href="projects" className="nav-item nav-link">Projects</a>
                    <a href="testimonials" className="nav-item nav-link">Testimonials</a>
                    <a href="contact" className="nav-item nav-link">Contact</a>
                </div>
                <a href="" style={{backgroundColor: "#028ED3"}}
                    className="btn btn-primary py-2 px-4 d-none d-lg-block">Appointment</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar