import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import foodOne from "../../public/barbequenation.avif";
import GreenStar from "../../public/GreenStar.png";
import SliderItem from './sliderItem';
import foodFiveSlider from '../../public/sliderimages/foodFiveSlider.avif';
import foodFourSlider from '../../public/sliderimages/foodfourSlider.avif';
import foodThreeSlider from '../../public/sliderimages/foodthreeslider.avif';
import foodTwoSlider from '../../public/sliderimages/foodTwoslider.avif';


const foodData = [
    { id: 1, imageLink: foodOne }, { id: 2, imageLink: foodFiveSlider }, { id: 3, imageLink: foodFourSlider },
    { id: 4, imageLink: foodTwoSlider }
];



const RestaurantChains = () => {
  
    return (
        <div className='lg:px-[200px] 
                        '>
            <div className='flex 
                            flex-col 
                            justify-between 
                            md:flex-row 
                            md:justify-between
                            '>
                <h1 className='heading-spacing'>Top restaurant chains in Delhi</h1>
                <div className='flex gap-3 m-auto md:m-0'>
                    <div className='arrow-icon' onClick={handlePrevClick}>
                        <FaArrowLeft size={17} />
                    </div>
                    <div className='arrow-icon' onClick={handleNextClick}>
                        <FaArrowRight size={17} />
                    </div>
                </div>
            </div>
            {/* Slider Content */}
            <div className='overflow-hidden 
                            border-b 
                          border-slate-400'>
                <div className='transition-transform duration-300 flex gap-[37px] h-[300px]'
                    >
                    {foodData.map((item) => (
                        <SliderItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantChains;
