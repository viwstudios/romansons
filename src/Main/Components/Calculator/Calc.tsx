import React, { useState } from 'react'
import './style.css'
import './jquery.min.js'
import './script.js'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Calc = () => {
    const [slider1, setSlider1] = useState(0);
    const [slider2, setSlider2] = useState(0)

    const [type, setType] = useState('Basic')

    const [price, setPrice] = useState(0);

    const handleSlider1 = (event: Event, value: number | number[], activeThumb: number) => {
        setSlider1(value as number)
        slider1 <= 300 ? setPrice(price) : setPrice(price + slider1)
    }
    const handleSlider2 = (event: Event, value: number | number[], activeThumb: number) => {
        setSlider2(value as number)
        setPrice(price + slider2)
    }
    return (
        <div>
            <form className="pricing-calculator">
                <div className="price_form_wrap">

                    <div className="selection-wrap">
                        <h2>Calculate your price</h2>
                        <div className="toggle">
                            <input onClick={()=>{setPrice(100);setType('Basic')}} type="radio" name="level" value="Branded" id="levelBranded" />
                            <label htmlFor="levelBranded">Basic</label>
                            <input onClick={()=>{setPrice(150);setType('Advanced')}} type="radio" name="level" value="Personalized" id="levelPersonalized" />
                            <label htmlFor="levelPersonalized">Advanced</label>
                            <input onClick={()=>{setPrice(200);setType('Premium')}} type="radio" name="level" value="Ultimate" id="levelUltimate" />
                            <label htmlFor="levelUltimate">Pro</label>
                        </div>
                        <div className="input_container">
                            <label htmlFor="copypages">Copywriting # Of Pages: <span>{slider1}</span></label>
                            {/* <input type="range" min="0" max="100" value="0" className="slider" name="copypages" id="myRange"/> */}
                            <Box>
                                <Slider min={300} max={1000} onChange={handleSlider1} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                            </Box>

                        </div>
                        <div className="input_container">
                            <label htmlFor="noncopypages">Non-Copywriting Pages: <span>10</span></label>
                            {/* <input type="range" min="0" max="100" value="10" className="slider" name="noncopypages" id="myRange" /> */}
                            <Box>
                                <Slider onChange={handleSlider2} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                            </Box>
                        </div>
                        <div className="toggle">
                            <input type="radio" name="delivery" value="Basic" id="deliveryBasic" />
                            <label htmlFor="deliveryBasic">Basic <span>8-12 weeks</span></label>
                            <input type="radio" name="delivery" value="Fast" id="deliveryFast" />
                            <label htmlFor="deliveryFast">Fast <span>4-8 weeks</span></label>
                            <input type="radio" name="delivery" value="Express" id="deliveryExpress" />
                            <label htmlFor="deliveryExpress">Express <span>2-4 weeks</span></label>
                        </div>
                        <div className="toggle">
                            <input type="checkbox" name="seo" value="SEO" id="seo" />
                            <label htmlFor="deliveryBasic">SEO</label>
                            <input type="checkbox" name="ssl" value="SSL" id="ssl" />
                            <label htmlFor="ssl">SSL</label>
                            <input type="checkbox" name="ecommerce" value="Ecommerce" id="ecommerce" />
                            <label htmlFor="ecommerce">Ecommerce</label>
                        </div>
                    </div>
                    <div className="total-wrap">
                        <div className="total">
                            <span>Total Price</span>
                            <span>{price}</span>
                        </div>
                        <div className="review">
                            <div>Website Type: {type}<span></span></div>
                            <div>Copywriting Pages: {slider1}<span></span></div>
                            <div>Non-Copywriting Pages: {slider2}<span></span></div>
                            <div id="delivery">Delivery: <span></span></div>
                            <br/>
                            <Button variant="contained">Book my order</Button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Calc