import React from 'react'

const AboutBasic = () => {
    return (
        <div>
            <div className="about-us">
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="about-img">
                                    <img className="img-fluid" src="img/basic1.jpg" alt="" />
                                    <img className="img-fluid" src="/img/basic2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h4 className="section-title">About BAsic Plan</h4>
                                <h1 className="display-5 mb-4">Digital printing with world className quality</h1>
                                <p>We provide : Printing services for a ready to print file.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBasic