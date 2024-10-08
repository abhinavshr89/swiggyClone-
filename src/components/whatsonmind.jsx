import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import foodOne from "../../public/foodOne.avif";
import us1 from "../../public/upperslider/us1.avif";
import us2 from "../../public/upperslider/us2.avif";
import us3 from "../../public/upperslider/us3.avif";
import us4 from "../../public/upperslider/us4.avif";
import us5 from "../../public/upperslider/us5.avif";
import us6 from "../../public/upperslider/us6.avif";
import us7 from "../../public/upperslider/us7.avif";
import us8 from "../../public/upperslider/us8.avif";



const WhatsOnMind = () => {
    const foodData = [
        { id: 1, imageLink: foodOne }, { id: 1, imageLink: us1 }, { id: 1, imageLink: us2 },
        { id: 1, imageLink: us3 }, { id: 1, imageLink: us4 }, { id: 1, imageLink: us5 },
        { id: 1, imageLink: us6 }, { id: 1, imageLink:us7 }, { id: 1, imageLink: us8 },
      
       
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = foodData.length;


    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));

    };

    return (
        <>
            <div className='content-spacing '>
                <div className='flex 
                  flex-col 
                  justify-between
                  md:flex 
                  md:flex-row 
                  md:justify-between'>
                    <h1 className='heading-spacing'>What's on your mind?</h1>
                    <div className='flex gap-3 m-auto 
                    md:m-0'>
                        <div className='arrow-icon' onClick={handlePrevClick}>
                            <FaArrowLeft size={17} />
                        </div>
                        <div className='arrow-icon' onClick={handleNextClick}>
                            <FaArrowRight size={17} />
                        </div>
                    </div>
                </div>

                {/* Slider Content */}
                <div className='overflow-hidden border-b border-slate-400'>
                    <div className='transition-transform 
                    duration-300 
                    flex 
                    gap-5 pb-[50px]'
                        style={{
                            transform: `translateX(-${(currentSlide * 100) / 7}%)`,
                            width: `${totalSlides * (100 / 7)}%`
                        }}>
                        {foodData.map((item, index) => (
                            <div key={index} className='flex-none w-1/7 h-[200px]'>
                                <img src={item.imageLink} alt='' className='object-cover h-[200px] w-full' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>
    );
};

export default WhatsOnMind;
