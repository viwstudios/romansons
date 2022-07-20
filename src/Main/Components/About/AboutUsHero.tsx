import React from "react";

const AboutUsHero = () => {
  return (
    <div>
      <div
        className="container-fluid page-header-about py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-1 text-white animated animatedText slideInDown" style={{fontSize: '50px', marginTop: '7%'}}>About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol style={{marginTop: '7%'}} className="breadcrumb text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  About
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
