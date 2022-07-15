import React from 'react'
import '../../../Extras/animatedText.css'
import '../../../Extras/contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Hero = () => {
    return (
        <>
            <div className="container-fluid p-0 pb- wow fadeIn mb-5" style={{overflow:'hidden'}} data-wow-delay="0.1s">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                        <img className="img-fluid" src="../img/about.jpg" alt="" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="1916" height="396" viewBox="0 0 1916 396" style={{position: 'absolute',width: '100%',bottom: '-128px',zIndex: '1',left: '0'}}>
                                <path id="Path_1" data-name="Path 1" d="M0,924l428,276,1488-156v276H0Z" transform="translate(0 -924)" fill="#fff" />
                            </svg>
                        <div className="owl-carousel-inner">
                            <div className="container">
                                <div className="justify-content-start">
                                    <div className="col-12 col-lg-5">
                                        <div className='check'>
                                            <h1 className="animatedText slideInDown">Printing and<br /> publication house</h1>
                                        </div>
                                        <h1 className="fs-2 fw-large text-white mb-1 pb-4">We'll sell your books for you.</h1>
                                        <p className='text-white hero-p col-9'>Worried how to sell your book?<br /> With our team of experts, publish your paperback and ebook and sell globally in 140+ countries, earning 100% of the profit. Start your publishing journey with #1 book publishing in India.</p>
                                        <br />
                                        <br />
                                        <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero