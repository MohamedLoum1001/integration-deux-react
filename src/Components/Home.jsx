import React from 'react';
import { useState, useEffect } from "react";
import 'animate.css';
import icon1 from '../Assets/icon1.png';
import icon2 from '../Assets/icon2.png';
import icon3 from '../Assets/icon3.png';
import Fixed from '../Assets/fixed.png';
import FixedWhite from '../Assets/fixed-white.png';

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["internet like a pro"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row g-5 d-flex flex-column justify-content-center align-items-center mx-auto">
          <div className="col-12 text-center">
            <p className='p fs-5 fw-100'>Welcom</p>
            <h1 className='text-light py-3'>{`Sellling on the`} <br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "internet like a pro"]'><span className="wrap">{text}</span></span></h1>
            <h1 ></h1>
            <p className='text-light fs-5 '>We kow how large objects will act, but things on a <br />
              small scale just do not act that way.</p>
          </div>

        </div>
        {/* Boutons */}
        <div className="row g-5 mb-3 mx-auto">
          <div className="col text-center d-flex flex-column justify-content-around align-items-center flex-md-row justify-content-md-center align-items-md-center mx-auto">
            <div className="vvd">
              <button className='py-3 me-4 ms-0'>Get Quote Now</button>
            </div>

            <div className="vvd mt-4 mt-md-0">
              <button className='py-3 me-4 ms-0'>Learn More</button>
            </div>
          </div>
        </div>

        {/* CARTES 1*/}
        <div className="row g-5 mt-5 mb-3  mx-auto d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-center align-items-md-center me-5">
          <div className="col-md-4 col-lg-4 mx-auto">
            <div className='carte1 bg-white mx-2 px-2 py-3 w-100'>
              <div className="img mt-3 mb-3">
                <img src={icon1} alt="icon1" className='img-fluid w-50 py-3 ml-4' />
              </div>

              <div className="titre mt-3">
                <h2 className='text-dark'>Training courses</h2>
              </div>

              <div>
                <img src={Fixed} alt="Fixed" className='img-fluid' />
              </div>

              <div className="para mt-3 text-left">
                <p>The gradual accumaulation of <br /> information about atomic and <br /> small-scale behaviour...</p>
              </div>

            </div>

          </div>
          {/* CARTES 2*/}
          <div className="col-md-4 col-lg-4 mx-auto">
            <div className='carte2 bg-white  mx-2 px-2 py-3 w-100'>
              <div className="img mt-3 mb-3">
                <img src={icon2} alt="icon2" className='img-fluid w-50 py-3 ml-4' />
              </div>

              <div className="titre mt-3">
                <h2 className='text-dark'>2,769 online courses</h2>
              </div>

              <div>
                <img src={Fixed} alt="Fixed" className='img-fluid' />
              </div>

              <div className="para mt-3 text-left">
                <p>The gradual accumaulation of <br /> information about atomic and <br /> small-scale behaviour...</p>
              </div>

            </div>

          </div>
          {/* CARTES 3*/}
          <div className="col-md-4 col-lg-4 mx-auto">
            <div className='carte3  mx-2 px-2 py-3 w-100'>
              <div className="img mt-3 mb-3">
                <img src={icon3} alt="icon3" className='img-fluid w-50 py-3 ml-4' />
              </div>

              <div className="titre mt-3">
                <h2 className=' text-white'>Training courses</h2>
              </div>

              <div>
                <img src={FixedWhite} alt="FixedWhite"  className='img-fluid' />
              </div>

              <div className="para mt-3 text-left">
                <p>The gradual accumaulation of <br /> information about atomic and <br /> small-scale behaviour...</p>
              </div>

            </div>

          </div>

          
        </div>
      </div>
    </section>
  )
}

export default Home
