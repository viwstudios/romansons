import React, { ChangeEvent, useState } from 'react'
import './style.css'
import './jquery.min.js'
import './script.js'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';

const Calc = () => {
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const [size, setSize] = useState(0);
    const [sizename, setSizename] = useState("")
    const [bw, setBw] = useState(0);
    const [bwnum, setBwnum] = useState(0)
    const [color, setColor] = useState(0)
    const [colornum, setColornum] = useState(0)
    const [total, setTotal] = useState(0)
    const [quality, setQuality] = useState(0)
    const [qualitype, setQualitype] = useState("")
    const [copies, setCopies] = useState(0)
    const [cover, setCover] = useState("")
    const calculPrice = () => {
        console.log(bw, color)
    }

    return (
        <div>
            <div style={{ marginTop: "10%" }}>
                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: "600px" }}
                >
                    <h4 className="section-title">Basic Plan Calculator</h4>
                    <h1 className="display-5 mb-4">
                        Calculate cost for publishing
                    </h1>
                </div>
            </div>
            <form className="pricing-calculator">
                <div className="price_form_wrap">

                    <div className="selection-wrap">
                        <h2 className='h2-styling'>Page size</h2>
                        <Box className='padding-bottom' sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem onClick={() => {setSize(10);setSizename('1/4 Demy')}} value={10}>1/4 Demy</MenuItem>
                                    <MenuItem onClick={() => {setSize(20);setSizename('1/8 Demy')}} value={20}>1/8 Demy</MenuItem>
                                    <MenuItem onClick={() => {setSize(30);setSizename('1/4 Crown')}} value={30}>1/4 Crown</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <div className="input_container">
                            <h2 className='h2-styling'>Pages</h2>
                            <Box
                                className='padding-bottom'
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField onChange={e => { let a = Number(e.target.value); setBwnum(a); setBw(Number(a / 100) * 53.57) }} id="outlined-basic" label="No. of B/W pages" variant="outlined" />
                                <TextField onChange={e => { let b = Number(e.target.value); setColornum(b); setColor(total + (b / 50) * 146.60) }} id="outlined-basic" label="No. of Coloured pages" variant="outlined" />
                            </Box>
                        </div>

                        <div className="input_container">
                            <h2 className='h2-styling'>Page Quality</h2>
                        </div>
                        <div className="input_container padding-bottom">
                            <div className="toggle">
                                <input onClick={() => {setQuality(10);setQualitype('Maplitho Natural')}} type="radio" name="delivery" value="Basic" id="deliveryBasic" />
                                <label htmlFor="deliveryBasic">Maplitho <span>Natural (70 GSM)</span></label>
                                <input onClick={() => {setQuality(20);setQualitype('Maplitho White')}} type="radio" name="delivery" value="Fast" id="deliveryFast" />
                                <label htmlFor="deliveryFast">Maplitho <span>White (70 GSM)</span></label>
                                <input onClick={() => {setQuality(30);setQualitype('Art Paper')}} type="radio" name="delivery" value="Express" id="deliveryExpress" />
                                <label htmlFor="deliveryExpress">Art Paper <span>100 GSM</span></label>
                            </div>
                        </div>

                        <div className="input_container">
                            <h2 className='h2-styling'>Cover Type</h2>
                            <Box className='padding-bottom' sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                    >
                                        <MenuItem onClick={() => setCover('Paper Back')} value={10}>Paper Back</MenuItem>
                                        <MenuItem onClick={() => setCover('Hard Back')} value={20}>Hard Back</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Stack className='padding-bottom' direction="row" alignItems="center" spacing={2}>
                                <Button variant="contained" component="label">
                                    Select cover page
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </Stack>
                        </div>


                        <div className="input_container">
                            <h2 className='h2-styling'>No. of copies</h2>
                            <Box
                                className='padding-bottom'
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField onChange={(e) => setCopies(Number(e.target.value))} id="outlined-basic" label="No. copies" variant="outlined" />
                            </Box>
                        </div>

                        <div className="input_container">
                            <h2 className='h2-styling'>Upload book file</h2>
                            <Stack className='padding-bottom' direction="row" alignItems="center" spacing={2}>
                                <Button variant="contained" component="label">
                                    Select book file
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </Stack>
                        </div>
                    </div>
                    <div className="total-wrap">
                        <div className="total">
                            <span>Total Price</span>
                            <span>{(bw + color + quality) * copies}</span>
                        </div>
                        <div className="review">
                            <div>Size : <span>{sizename}</span></div>
                            <div>B/W Pages : <span>{bwnum}</span></div>
                            <div>Color Pages : <span>{colornum}</span></div>
                            <div>Page Quality : <span>{qualitype}</span></div>
                            <div>Cover Type : <span></span>{cover}</div>
                            <div>Copies : <span>{copies}</span></div>
                            <div>Per book : <span>{bw + color + quality}</span></div>
                            {/* <div id="delivery">Delivery: <span></span></div> */}
                            <br />
                            <Button variant="contained">Book my order</Button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Calc