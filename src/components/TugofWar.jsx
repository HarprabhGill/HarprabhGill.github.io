import React from 'react'
import '../index.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'
import image4 from '../assets/img4.jpg'
import image5 from '../assets/img5.jpg'
import image6 from '../assets/img6.jpg'
import image7 from '../assets/img7.jpg'
import image8 from '../assets/img8.jpg'
import image9 from '../assets/img9.jpg'
import image10 from '../assets/img10.jpg'

const TugofWar = () => {
    return (
        <div name='tug' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Tug of War
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                    <p className='text-2xl py-6 font-bold'>Initial Sketches:</p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={image1} className="sliderimg"/>
                        <img src={image2} className="sliderimg"/>
                        <img src={image3} className="sliderimg"/>
                        <img src={image4} className="sliderimg"/>
                        <img src={image5} className="sliderimg"/>
                        <img src={image6} className="sliderimg"/>
                        <img src={image7} className="sliderimg"/>
                        <img src={image8} className="sliderimg"/>
                        <img src={image9} className="sliderimg"/>
                        <img src={image10} className="sliderimg"/>
                    </AliceCarousel>
                </div>

                <div className='pb-8'>
                    <p className='text-2xl py-6 font-bold'>Detailed Sketches:</p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={image1} className="sliderimg"/>
                        <img src={image2} className="sliderimg"/>
                        <img src={image3} className="sliderimg"/>
                        <img src={image4} className="sliderimg"/>
                        <img src={image5} className="sliderimg"/>
                        <img src={image6} className="sliderimg"/>
                        <img src={image7} className="sliderimg"/>
                        <img src={image8} className="sliderimg"/>
                        <img src={image9} className="sliderimg"/>
                        <img src={image10} className="sliderimg"/>
                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
};

export default TugofWar
