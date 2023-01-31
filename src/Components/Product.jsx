import React from 'react';

import fleche from '../Assets/fleche.png';
import Fixe from '../Assets/fixed.png';
import Thumb from '../Assets/thumb.png';


const Product = () => {
  return (
    <section id='product' className='product mb-5'>
        <div className='container'>
            <div className="row d-flex justify-content-around">
                <div className='col-12 mt-5'>
                    <div className="pord-container">
                      <div className='row'>
                        <div className="col-md-5 col-lg-6">
                            <div className='rectagle mt-5'>
                                <img src={Fixe}alt="Fixe" className='img-fluid'/>
                            </div>

                            <div className="titre mt-3">
                                <h1>Packages that are <br /> aprodable</h1>
                                <p>Problems tryning to resolve the conflict between <br />
                                thr realms of classical physics: <br />
                                Newtoninan mechanics</p>
                            </div>
                            <div className="link mt-4">
                                <a href="#">Learn More</a> <img src={ fleche } alt="fleche" className='img-fluid ml-2'/>
                            </div>
                        </div>
                        
                        <div className='col-md-7 col-lg-6 mt-5'>
                            <div className='image-card'>
                                <img src={Thumb} alt="Thumb" className='img-fluid mx-auto'/>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </section>
  )
}

export default Product
