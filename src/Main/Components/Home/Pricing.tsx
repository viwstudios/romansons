import React from "react";
import "../../../../mine/style.css";

const Pricing = () => {
  return (
    <div>
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px" }}
      >
        <h4 className="section-title">Our Services</h4>
        <h1 className="display-5 mb-4">
          We have a plan for your need
        </h1>
      </div>
      <div className="container-xxl mb-5" style={{ height: "500px" }}>
        <div className="row h-100 align-items-center justify-content-center">
          <div
            className="col-3 p-0 price-table-cont"
            style={{ position: "relative" }}
          >
            <div className="price-table-header-cont">
              <div className="price-table-heading">
                <span className="price-table-header-text">
                  BASIC
                </span>
                <span style={{ marginLeft: "20%" }}>Starts at 50$</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{
                position: "absolute",
                bottom: "33%",
                left: "29%",
                transform: "scale(1.6)scalex(-1)",
              }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="rgba(39,39,39,0.7)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{
                position: "absolute",
                bottom: "30%",
                left: "53%",
                transform: "scale(1.6)",
              }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="rgba(39,39,39,0.7)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{ transform: "translate(20%, 166%)scale(1.5)" }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="#272727"
              ></path>
            </svg>
            <div
              style={{
                height: "50%",
                width: "100%",
                backgroundColor: "#272727",
                position: "absolute",
                bottom: 0,
              }}
            >
              <ul className="p-0 m-0 text-center g-0 price-table-content">
                <li>Publishing with ISBN</li>
                <li>Printing</li>
                <li>No.of copies</li>
                <li>No proof reading</li>
              </ul>
              <div className="h-20 price-table-button">
                <div className="price-table-button-border"></div>
                <a href="explore" className="linear-gradient-text">Explore</a>
              </div>
            </div>
          </div>
          <div
            className="col-3 p-0 price-table-cont price-table-mid"
            style={{ position: "relative" }}
          >
            <div className="price-table-header-cont" style={{ height: "30%" }}>
              <div className="price-table-heading">
                <span className="price-table-header-text">
                  ADVANCED
                </span>
                <span style={{ marginLeft: "20%" }}>Starts at 100$</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{
                position: "absolute",
                bottom: "43%",
                left: "40%",
                marginBottom: "50px",
                transform: "scale(1.6)scalex(-1)",
              }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="rgba(39,39,39,0.7)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{
                position: "absolute",
                bottom: "43%",
                left: "40%",
                transform: "scale(1.6)",
              }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="rgba(39,39,39,0.7)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{ transform: "translate(0px, 140%)scale(1.5)" }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="#272727"
              ></path>
            </svg>
            <div
              style={{
                height: "60%",
                width: "100%",
                backgroundColor: "#272727",
                position: "absolute",
                bottom: "0",
              }}
            >
              <ul className="p-0 m-0 text-center g-0 price-table-content">
                <li>Basic Package +</li>
                <li>DTP</li>
                <li>Layout</li>
                <li>Cover Design</li>
                <li>Book distribution shop</li>
                <li>Social Media</li>
                <li>Proof reading</li>
                {/* <li>Royalty to author 20% of selling price</li> */}
              </ul>
              <div className="h-20 price-table-button">
                <div className="price-table-button-border"></div>
                <a href="explore" className="linear-gradient-text">Explore</a>
              </div>
            </div>
          </div>
          <div
            className="col-3 p-0 price-table-cont"
            style={{ position: "relative" }}
          >
            <div className="price-table-header-cont">
              <div className="price-table-heading">
                <span className="price-table-header-text">
                  PREMIUM
                </span>
                <span style={{ marginLeft: "20%" }}>Starts at 150$</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{
                position: "absolute",
                bottom: "31%",
                left: "30%",
                transform: "scale(1.6)scalex(-1)",
              }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="rgba(39,39,39,0.7)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{
                position: "absolute",
                bottom: "29%",
                left: "41%",
                transform: "scale(1.6)",
              }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="rgba(39,39,39,0.7)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="274.667"
              height="111.333"
              viewBox="0 0 274.667 111.333"
              style={{ transform: "translate(21px, 168%)scale(1.5)" }}
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,140.667s29.458-17.333,76.667-17.333,76.667,35.5,125.333,42,72.667-4,72.667-4v73.333H0Z"
                transform="translate(0 -123.333)"
                fill="#272727"
              ></path>
            </svg>
            <div
              style={{
                height: "50%",
                width: "100%",
                backgroundColor: "#272727",
                position: "absolute",
                bottom: 0,
              }}
            >
              <ul className="p-0 m-0 text-center g-0 price-table-content">
                <li>Advanced Package +</li>
                <li>Book release event</li>
                <li>Interview</li>
                <li>Book fairs</li>
              </ul>
              <div className="h-20 price-table-button">
                <div className="price-table-button-border"></div>
                <a href="explore" className="linear-gradient-text">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
