import React from 'react';
import img1 from "../../assets/img/heroimg1.png";
import img2 from "../../assets/img/heroimg22.png";
import img3 from "../../assets/img/heroimg3.png";
import img4 from "../../assets/img/heroimg4.png";
import Hero2 from '../Hero2';

const Hero = () => {
    return (
        <div id='hero'>
            <div className="container">
                <div className="hero">
                    <h1>Направления</h1>
                <div className="hero--img">
                <div className="hero--img__img1">
                    <img src={img1} alt="img" width={500}/>
                    <div className='hero--img__img1--one'>
                        <h4>Для взрослых</h4>
                     

                    </div>
                    <button>ПОДРОБНЕЕ</button>
                </div>
                <div className="hero--img__img1">
                    <img src={img2} alt="img"width={500} />
                    <div className='hero--img__img1--one'>
                        <h4>Для детей</h4>
                     

                    </div>
                    <button>ПОДРОБНЕЕ</button>

                </div>
            

                </div>
           
        <div className="hero--h1">
        <h2>Услуги и цены</h2>
        </div>
        

                <div className="hero--img">
                <div className="hero--img__img1">
                    <img src={img3} alt="img" width={500}/>
                    <div className='hero--img__img1--one'>
                        <h4>Для взрослых</h4>
                     

                    </div>
                    <button>ПОДРОБНЕЕ</button>
                </div>
                <div className="hero--img__img1">
                    <img src={img4} alt="img"width={500} />
                    <div className='hero--img__img1--one'>
                        <h4>Для детей</h4>
                     

                    </div>
                    <button>ПОДРОБНЕЕ</button>

                </div>
            

                </div>

                </div>
            </div>
            
        </div>
    );
};

export default Hero;