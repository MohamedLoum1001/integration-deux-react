import React from 'react';
import product1 from '../Assets/product1.png';
import product2 from '../Assets/product2.png';
import product3 from '../Assets/product3.png';
import product4 from '../Assets/product4.png';
import tag from '../Assets/tag.png';
import like from '../Assets/like.png';
import basket from '../Assets/basket.png';
import eyes from '../Assets/eyes.png';
import frame from '../Assets/Frame 4.png';
import Horloge from '../Assets/horloge.png';
import frame1 from '../Assets/Frame1.png';
import icon from '../Assets/Vector1.png';
import { FaAngleRight } from "react-icons/fa";

const ProductText = () => {
    return (
        <section id='product' className='prod mt-5'>
            <div className='container'>
                <div className='text-start mt-5'>
                    <p className='p'>Practice Advice</p>
                    <h1>Mike online education accessible</h1>
                    <p>Poblems trying to resolve between <br />
                        the two major realms of classical physics: Newtomian mechanicss</p>
                </div>
                <div className="product-text-container mt-5 ">
                    <div className='row g-5 mt-5 mb-5 mx-auto'>

                        <div className="col-md-6 col-lg-3">
                            <div className="COL">
                                <div className="tag p-3">
                                    <img src={tag} alt="tag" className='img-fluid ms-auto' />
                                </div>

                                <div className="icon d-flex flex-row justify-content-center mt-40 ml-11 mt-md-11">
                                    <img src={like} alt="like" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={basket} alt="basket" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={eyes} alt="eyes" className='img-fluid mx-auto p-1 mt-5' />
                                </div>

                                <div className="img">
                                    <img src={product1} alt="product1" className='img-fluid' />
                                </div>

                                <div className='english py-3 d-flex flex-row justify-content-around'>
                                    <h2 className='me-5'>English</h2>
                                    <img src={frame} alt="frame" className='img-fluid' />
                                </div>

                                <div className='title'>
                                    <h2>Graphic Design</h2>
                                    <p>We focus on ergonomics <br />
                                        and meting you</p>
                                </div>

                                <div className='img-text d-flex flex-row'>
                                    <img src={frame1} alt="frame1" className='img-fluid' />
                                    <p className='ml-3'>15 Sales</p>
                                </div>

                                <div className='TEXT d-flex flex-row'>
                                    <p className='p'>$16,48</p>
                                    <p className='ml-3'>$6,48</p>
                                </div>

                                <div className='img-icon d-flex flex-row'>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>Pro...</p>
                                    <img src={icon} alt="icon" className='img-fluid mt-1' />
                                    <p>64 Les...</p>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>22 Horl...</p>
                                </div>
                                <div className='btn d-flex flex-row rounded-5 bouton py-2'>
                                    <a href='#' className='py-2'>Learn More</a>
                                    <h1 className='mt-1 ml-3'><FaAngleRight /></h1>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="COL1">
                                <div className="tag p-3">
                                    <img src={tag} alt="tag" className='img-fluid ms-auto' />
                                </div>
                                <div className="icon d-flex flex-row justify-content-center mt-40 ml-7">
                                    <img src={like} alt="like" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={basket} alt="basket" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={eyes} alt="eyes" className='img-fluid mx-auto p-1 mt-5' />
                                </div>

                                <div className="img">
                                    <img src={product2} alt="product1" className='img-fluid' />
                                </div>

                                <div className='english py-3 d-flex flex-row justify-content-around'>
                                    <h2 className='me-5'>English</h2>
                                    <img src={frame} alt="frame" className='img-fluid' />
                                </div>

                                <div className='title'>
                                    <h2>Graphic Design</h2>
                                    <p>We focus on ergonomics <br />
                                        and meting you</p>
                                </div>

                                <div className='img-text d-flex flex-row'>
                                    <img src={frame1} alt="frame1" className='img-fluid' />
                                    <p className='ml-3'>15 Sales</p>
                                </div>

                                <div className='TEXT d-flex flex-row'>
                                    <p className='p'>$16,48</p>
                                    <p className='ml-3'>$6,48</p>
                                </div>

                                <div className='img-icon d-flex flex-row'>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>Pro...</p>
                                    <img src={icon} alt="icon" className='img-fluid mt-1' />
                                    <p>64 Les...</p>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>22 Horl...</p>
                                </div>
                                <div className='btn d-flex flex-row rounded-5 bouton py-2'>
                                    <a href='#' className='py-2'>Learn More</a>
                                    <h1 className='mt-1 ml-3'><FaAngleRight /></h1>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="COL2">
                                <div className="tag p-3">
                                    <img src={tag} alt="tag" className='img-fluid ms-auto' />
                                </div>
                                <div className="icon d-flex flex-row justify-content-center mt-40 ml-7">
                                    <img src={like} alt="like" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={basket} alt="basket" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={eyes} alt="eyes" className='img-fluid mx-auto p-1 mt-5' />
                                </div>
                                <div className="img">
                                    <img src={product3} alt="product1" className='img-fluid' />
                                </div>
                                <div className='english py-3 d-flex flex-row justify-content-around'>
                                    <h2 className='me-5'>English</h2>
                                    <img src={frame} alt="frame" className='img-fluid' />
                                </div>

                                <div className='title'>
                                    <h2>Graphic Design</h2>
                                    <p>We focus on ergonomics <br />
                                        and meting you</p>
                                </div>

                                <div className='img-text d-flex flex-row'>
                                    <img src={frame1} alt="frame1" className='img-fluid' />
                                    <p className='ml-3'>15 Sales</p>
                                </div>

                                <div className='TEXT d-flex flex-row'>
                                    <p className='p'>$16,48</p>
                                    <p className='ml-3'>$6,48</p>
                                </div>

                                <div className='img-icon d-flex flex-row'>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>Pro...</p>
                                    <img src={icon} alt="icon" className='img-fluid mt-1' />
                                    <p>64 Les...</p>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>22 Horl...</p>
                                </div>
                                <div className='btn d-flex flex-row rounded-5 bouton py-2'>
                                    <a href='#' className='py-2'>Learn More</a>
                                    <h1 className='mt-1 ml-3'><FaAngleRight /></h1>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-6 col-lg-3">
                            <div className="COL3">
                                <div className="tag p-3">
                                    <img src={tag} alt="tag" className='img-fluid ms-auto' />
                                </div>
                                <div className="icon d-flex flex-row justify-content-center mt-40 ml-7 flex-md-row justify-content-md-center">
                                    <img src={like} alt="like" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={basket} alt="basket" className='img-fluid mx-auto p-1 mt-5' />
                                    <img src={eyes} alt="eyes" className='img-fluid mx-auto p-1 mt-5' />
                                </div>


                                <div className="img">
                                    <img src={product4} alt="product1" className='img-fluid' />
                                </div>

                                <div className='english py-3 d-flex flex-row justify-content-around'>
                                    <h2 className='me-5'>English</h2>
                                    <img src={frame} alt="frame" className='img-fluid' />
                                </div>

                                <div className='title'>
                                    <h2>Graphic Design</h2>
                                    <p>We focus on ergonomics <br />
                                        and meting you</p>
                                </div>

                                <div className='img-text d-flex flex-row'>
                                    <img src={frame1} alt="frame1" className='img-fluid' />
                                    <p className='ml-3'>15 Sales</p>
                                </div>

                                <div className='TEXT d-flex flex-row'>
                                    <p className='p'>$16,48</p>
                                    <p className='ml-3'>$6,48</p>
                                </div>

                                <div className='img-icon d-flex flex-row'>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>Pro...</p>
                                    <img src={icon} alt="icon" className='img-fluid mt-1' />
                                    <p>64 Les...</p>
                                    <img src={Horloge} alt="Horloge" className='img-fluid mt-1' />
                                    <p>22 Horl...</p>
                                </div>
                                <div className='btn d-flex flex-row rounded-5 bouton py-2'>
                                    <a href='#' className='py-2'>Learn More</a>
                                    <h1 className='mt-1 ml-3'><FaAngleRight /></h1>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}

export default ProductText
