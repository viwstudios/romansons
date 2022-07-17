import React from 'react'
import loginBgImage from '../../../../img/book3.jpg'
import logos from '../../../../img/romansonsLogo.png'

const LoginComp = () => {
    return (
        <>
            <div className="container-fluid h-100 g-0 login-bg">
                <div style={{ width: '100%', height: '100%', position: 'absolute', overflow: 'hidden' }}>
                    <svg id="Component_4_1" data-name="Component 4 – 1" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className='login-svg-4'>
                        <g id="Ellipse_7" data-name="Ellipse 7" fill="none" stroke="#206168" stroke-width="8">
                            <circle cx="27" cy="27" r="27" stroke="none" />
                            <circle cx="27" cy="27" r="23" fill="none" />
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" className="login-svg-5">
                        <circle id="Ellipse_6" data-name="Ellipse 6" cx="44" cy="44" r="44" fill="#0f93a2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="181.974" height="140.963" viewBox="0 0 181.974 140.963" style={{ position: 'absolute', left: '0', bottom: '0' }} className="login-svg-1">
                        <path id="Subtraction_2" data-name="Subtraction 2" d="M302.973,238.964H121V105.682c12.25-5.1,22.973-7.682,31.872-7.682a35.459,35.459,0,0,1,12.688,2.147,31.65,31.65,0,0,1,7.856,4.315,28.823,28.823,0,0,1,5.786,5.9,40.03,40.03,0,0,1,6.547,15.562c2.527,11.717,1.905,25.719,1.3,39.26-.482,10.86-.938,21.117.147,30.035,1.227,10.079,4.226,16.726,9.439,20.918,4.48,3.6,9.887,5.352,16.531,5.352,7.885,0,16.409-2.382,25.434-4.9l.7-.195c8.557-2.389,18.255-5.1,27.426-5.1a34.984,34.984,0,0,1,16.025,3.528,33.754,33.754,0,0,1,7.408,5.09,45.094,45.094,0,0,1,6.863,7.909,61.522,61.522,0,0,1,5.95,11.141h0Z" transform="translate(-121 -98)" fill="#206168" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="703.045" height="683.321" viewBox="0 0 703.045 683.321" className='login-svg-2'>
                        <g id="Group_3" data-name="Group 3" transform="translate(-1217.455 -397.179)">
                            <path id="Subtraction_3" data-name="Subtraction 3" d="M805.5,869.5H203.8c-21.6-22.421-40.009-42.8-54.728-60.578-7.827-9.453-14.768-18.36-20.63-26.476A257.813,257.813,0,0,1,113.3,759.229a103.668,103.668,0,0,1-6.994-14.712,62,62,0,0,1-3.41-12.965,40.81,40.81,0,0,1-.08-11.361,33.531,33.531,0,0,1,3-9.9,38.055,38.055,0,0,1,7.367-10.22,58.787,58.787,0,0,1,11.043-8.542c8.017-4.9,18.26-9.173,31.316-13.055,24.381-7.248,54.783-12,86.969-17.039,38.339-6,77.983-12.2,111.937-23.259,38.577-12.565,63.351-29.6,75.737-52.083a118.069,118.069,0,0,0,7.464-16.62,162.8,162.8,0,0,0,5.442-18.566,272.929,272.929,0,0,0,5.974-41.894c.98-13.319,1.422-28.511,1.35-46.443-.064-16-.522-32.694-.965-48.835-.736-26.831-1.5-54.576-.5-80.393.537-13.9,1.527-26.127,3.025-37.371a222.39,222.39,0,0,1,6.959-33.851,150.962,150.962,0,0,1,5.365-15.222,119.033,119.033,0,0,1,6.841-13.882,98.28,98.28,0,0,1,8.481-12.389A87.163,87.163,0,0,1,489.9,209.886a85.023,85.023,0,0,1,12.253-8.942,92.173,92.173,0,0,1,14.385-6.989,109.964,109.964,0,0,1,16.682-4.882,141.1,141.1,0,0,1,19.142-2.622c2.568-.181,5.215-.273,7.867-.273a139.065,139.065,0,0,1,27.488,2.922,201.887,201.887,0,0,1,29.043,8.359,294.434,294.434,0,0,1,30.274,13.187c10.01,5.007,20.5,10.863,31.18,17.405a663.514,663.514,0,0,1,63.78,45.026c20.234,15.984,41.6,34.349,63.507,54.583V869.5Z" transform="translate(1115 211)" fill="#0f93a2" opacity="0.8" />
                        </g>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="435" height="435" viewBox="0 0 435 435" className="login-svg-3">
                        <circle id="Ellipse_5" data-name="Ellipse 5" cx="217.5" cy="217.5" r="217.5" fill="#206067" />
                    </svg>
                </div>
                <div className="login-cont">
                    <div className='login-cont-left'>
                        <img src={loginBgImage}></img>
                    </div>
                    <div className='login-cont-right'>
                        <div className='login-form-cont'>
                            <div className='login-header'>Login</div>
                            <form action="" className="login-form">
                                <div className="inputContainer">
                                    <label className="login-label">Email</label>
                                    <input type="text" className="input" placeholder="a" />

                                </div>
                                <div className="inputContainer">
                                    <label className="login-label">Password</label>
                                    <input type="text" className="input" placeholder="a" />
                                </div>
                                <input type="submit" className="submitBtn" value="Login"></input>
                            </form>
                            <div><span>New to Romansons ?</span><span><a href={}> Join Now</a></span></div>
                        </div>
                        <img src={logos} className="login-right-logo"></img>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.568" height="60.667" viewBox="0 0 41.568 60.667" className="login-right-bookmark">
                            <path id="Path_3" data-name="Path 3" d="M1019.774,109.445,1040.234,134V73.333H998.667V134Z" transform="translate(-998.667 -73.333)" fill="#206168" />
                        </svg>

                        <div style={{ width: '100vw', height: '100vh', position: 'relative', transform: 'translate(-50%, -6%)', overflow: 'hidden' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="703.045" height="683.321" viewBox="0 0 703.045 683.321" className='login-svg-2' style={{ transform: 'scale(0.75)translate(45%, 27%)' }}>
                                <g id="Group_3" data-name="Group 3" transform="translate(-1217.455 -397.179)">
                                    <path id="Subtraction_3" data-name="Subtraction 3" d="M805.5,869.5H203.8c-21.6-22.421-40.009-42.8-54.728-60.578-7.827-9.453-14.768-18.36-20.63-26.476A257.813,257.813,0,0,1,113.3,759.229a103.668,103.668,0,0,1-6.994-14.712,62,62,0,0,1-3.41-12.965,40.81,40.81,0,0,1-.08-11.361,33.531,33.531,0,0,1,3-9.9,38.055,38.055,0,0,1,7.367-10.22,58.787,58.787,0,0,1,11.043-8.542c8.017-4.9,18.26-9.173,31.316-13.055,24.381-7.248,54.783-12,86.969-17.039,38.339-6,77.983-12.2,111.937-23.259,38.577-12.565,63.351-29.6,75.737-52.083a118.069,118.069,0,0,0,7.464-16.62,162.8,162.8,0,0,0,5.442-18.566,272.929,272.929,0,0,0,5.974-41.894c.98-13.319,1.422-28.511,1.35-46.443-.064-16-.522-32.694-.965-48.835-.736-26.831-1.5-54.576-.5-80.393.537-13.9,1.527-26.127,3.025-37.371a222.39,222.39,0,0,1,6.959-33.851,150.962,150.962,0,0,1,5.365-15.222,119.033,119.033,0,0,1,6.841-13.882,98.28,98.28,0,0,1,8.481-12.389A87.163,87.163,0,0,1,489.9,209.886a85.023,85.023,0,0,1,12.253-8.942,92.173,92.173,0,0,1,14.385-6.989,109.964,109.964,0,0,1,16.682-4.882,141.1,141.1,0,0,1,19.142-2.622c2.568-.181,5.215-.273,7.867-.273a139.065,139.065,0,0,1,27.488,2.922,201.887,201.887,0,0,1,29.043,8.359,294.434,294.434,0,0,1,30.274,13.187c10.01,5.007,20.5,10.863,31.18,17.405a663.514,663.514,0,0,1,63.78,45.026c20.234,15.984,41.6,34.349,63.507,54.583V869.5Z" transform="translate(1115 211)" fill="#0f93a2" opacity="1" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="login-cont-border">

                </div>
            </div>
        </>
    )
}

export default LoginComp