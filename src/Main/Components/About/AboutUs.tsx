import React from 'react'
import { useState, useEffect } from 'react'

const AboutUs = () => {
    const [counterState, setCounter] = useState<number>(0);
    useEffect(() => {
        setTimeout(() => {
            counterState < 60 ? setCounter(counterState + 1) : 0;
        }, 60);
    }, [counterState])

    const Counter = (): JSX.Element => {
        return (
            <h1 className="display-1 mb-n2 counter" data-toggle="counter-up">{counterState}</h1>
        )
    }
    return (
        <div>
            <div className="about-us">
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="about-img">
                                    <img className="img-fluid" src="img/book2.jpg" alt="" />
                                    <img className="img-fluid" src="/img/book4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h4 className="section-title">About Us</h4>
                                <h1 className="display-5 mb-4">Digital printing with world className quality</h1>
                                <p>using hi-end technology machines in the printing arena, have slotted Romanson Print
                                    House, a
                                    strong and concrete space in the market, catering to the entire Kerala state, from its
                                    Trivandrum head quarters.</p>
                                {/* <!-- <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum
                        amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                    </p> --> */}
                                <div className="d-flex align-items-center mb-5">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                                        style={{ width: "120px", height: "120px" }}>
                                        {/* <h1 className="display-1 mb-n2 counter" data-toggle="counter-up">0</h1> */}
                                        <Counter/>
                                    </div>
                                    <div className="ps-4">
                                        <h3>Years</h3>
                                        <h3>Working</h3>
                                        <h3 className="mb-0">Experience</h3>
                                    </div>
                                </div>
                                <a style={{ backgroundColor: "#028ED3" }} className="btn btn-primary py-3 px-5" href="">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs