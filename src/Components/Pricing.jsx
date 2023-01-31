import React from 'react';
import testimonial1 from '../Assets/testimonial1.png';
import testimonial2 from '../Assets/testimonial2.png';
import Etoile from '../Assets/étoile.png';
import start from '../Assets/start.png';

const Pricing = () => {
    return (
        <section id='pricing' className='pricing'>
            <div className='container'>

                <div className='text-start mt-5'>
                    <p>Practice Advice</p>
                    <h1 className='h1'>Our Experts Teacher </h1>
                    <p className="P">Problems trying to resolve the conflict betweeen <br />
                        the two major realms of classical physics: Newtonian mechanics</p>
                </div>


                <div className='row g-5 mt-5 mb-5 mx-auto'>

                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className="img mx-auto mt-5">
                            <img src={testimonial1} alt="testimonial1" className='img-fluid rounded-circle  mx-auto' />
                            <p className='text-center mt-2'>Slate hepls you see how many more days <br />
                                you need to work to reach you financial <br />
                                goal for the month and year.</p>
                        </div>

                        <div className="etoile mx-auto text-center d-flex flex-row justify-content-center align-items-center">
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={start} alt="Start" className='img-fluid' />
                        </div>

                        <h2 className='h2 text-center mt-3'>Rogina Miles</h2>
                        <p className='p text-center'>Designer</p>


                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className="img mx-auto mt-5">
                            <img src={testimonial2} alt="testimonial1" className='img-fluid rounded-circle  mx-auto' />
                            <p className='text-center mt-2'>Slate hepls you see how many more days <br />
                                you need to work to reach you financial <br />
                                goal for the month and year.</p>
                        </div>

                        <div className="etoile mx-auto text-center d-flex flex-row justify-content-center align-items-center">
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={Etoile} alt="Etoile" className='img-fluid' />
                            <img src={start} alt="Start" className='img-fluid' />
                        </div>

                        <h2 className='h2 text-center mt-3'>Rogina Miles</h2>
                        <p className='p text-center'>Designer</p>

                    </div>



                </div>
            </div>

        </section>
    )
}

export default Pricing
