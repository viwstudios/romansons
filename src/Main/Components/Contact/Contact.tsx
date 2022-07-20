import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                        <h4 className="section-title">Contact Us</h4>
                        <h1 className="display-5 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                        <i style={{color: "#028ED3"}} className="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Address</p>
                                        <h3 className="mb-0">123 Street, New York, USA</h3>
                                    </div>
                                </div>
                                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                        <i className="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Call Us Now</p>
                                        <h3 className="mb-0">+012 345 6789</h3>
                                    </div>
                                </div>
                                <div className="bg-light d-flex align-items-center w-100 p-4">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                        <i className="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Mail Us Now</p>
                                        <h3 className="mb-0">info@example.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                                <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                                <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                                <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button style={{backgroundColor: "#028ED3"}} className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact