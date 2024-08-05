import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import foodOne from "../../public/barbequenation.avif";
import GreenStar from "../../public/GreenStar.png";

const foodData = [
    { id: 1, imageLink: foodOne }, { id: 2, imageLink: foodOne }, { id: 3, imageLink: foodOne },
    { id: 4, imageLink: foodOne }, { id: 5, imageLink: foodOne }, { id: 6, imageLink: foodOne },
    { id: 7, imageLink: foodOne }, { id: 8, imageLink: foodOne }, { id: 9, imageLink: foodOne },
    { id: 10, imageLink: foodOne }, { id: 11, imageLink: foodOne }, { id: 12, imageLink: foodOne },
    { id: 13, imageLink: foodOne }, { id: 14, imageLink: foodOne }, { id: 15, imageLink: foodOne },
    { id: 16, imageLink: foodOne }, { id: 17, imageLink: foodOne }, { id: 18, imageLink: foodOne },
];

const SliderItem = ({ item }) => (
    <div className='flex-none 
                    w-1/7 
                    h-[200px] 
                    w-[250px] 
                    gap-5 
                    mt-[20px]'>
        <img src={item.imageLink} alt='Restaurant' className='object-cover h-[150px] w-full rounded-lg' />
        <p className='font-semibold text-[17px]'>Chinese Wok</p>
        <p className='flex items-center gap-1'>
            <span>
                <img className='h-[15px] mb-[2px]' src={GreenStar} alt="Star Rating" />
            </span>
            <span>4.1</span>
            <span className='font-semibold'>· 30-35 mins</span>
        </p>
        <p className='text-[13px] text-slate-500'>Chinese, Asian, Tibetan, Deserts Kirti Nagar Metro</p>
    </div>
);

const RestaurantChains = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = foodData.length;

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className='px-[30px] pb-[70px] lg:px-[200px]'>
            <div className='flex 
                            flex-col 
                            justify-between 
                            md:flex-row md:justify-between'>
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
            <div className='overflow-hidden'>
                <div className='transition-transform duration-300 flex gap-[30px] h-[300px]'
                    style={{
                        transform: `translateX(-${(currentSlide * 100) / 7}%)`,
                        width: `${totalSlides * (100 / 7)}%`
                    }}>
                    {foodData.map((item) => (
                        <SliderItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantChains;
