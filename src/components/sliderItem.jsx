import React from 'react';
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
                    w-full 
                    h-[200px] 
                     
                    gap-5 
                    mt-[20px]'>
        <img src={item.imageLink} alt='Restaurant' 
        className='object-cover h-[150px] w-full rounded-lg' />
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

export default SliderItem;