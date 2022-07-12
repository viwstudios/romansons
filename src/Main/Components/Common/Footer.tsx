import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Social Media</h3>
                        {/* <!-- <p className="mb-2"><i style={{color: "#fff"}} className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p> */}
                    {/* <p className="mb-2"><i style={{color: "#fff"}} className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i style={{color: "#fff"}} className="fa fa-envelope text-primary me-3"></i>info@example.com</p> */}
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-body me-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-body me-1" href="#"><i
                                    className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-body me-1" href="#"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-body me-0" href="#"><i
                                    className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Services</h3>
                        <a className="btn btn-link" href="#">Branding</a>
                        <a className="btn btn-link" href="#">Creativity</a>
                        <a className="btn btn-link" href="#">Web Design</a>
                        <a className="btn btn-link" href="#">Offset Printing</a>
                        <a className="btn btn-link" href="#">Digital Printing</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Quick Links</h3>
                        <a className="btn btn-link" href="/">Home</a>
                        <a className="btn btn-link" href="about">About Us</a>
                        <a className="btn btn-link" href="services">Our Services</a>
                        <a className="btn btn-link" href="projects">Projects</a>
                        <a className="btn btn-link" href="testimonials">Tesitmonials</a>
                        <a className="btn btn-link" href="contact">Contact Us</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Newsletter</h3>
                        <p>Subscribe to our Newsletter</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                placeholder="Your email"/>
                            <button style={{backgroundColor: "#028ED3"}} type="button"
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="#">Romansons</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a href="https://www.instagram.com/viwicodes">viwstudios</a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer