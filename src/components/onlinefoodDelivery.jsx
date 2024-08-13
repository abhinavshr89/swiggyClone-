import React from 'react';
import foodOne from "../../public/barbequenation.avif";
import GreenStar from "../../public/GreenStar.png";
import SliderItem from './sliderItem';
import mg1 from "../../public/maingrid/mg1.avif";
import mg2 from "../../public/maingrid/mg2.avif";
import mg3 from "../../public/maingrid/mg3.avif";
import mg4 from "../../public/maingrid/mg4.avif";
import mg5 from "../../public/maingrid/mg5.avif";
import mg6 from "../../public/maingrid/mg6.avif";
import mg7 from "../../public/maingrid/mg7.avif";
import mg8 from "../../public/maingrid/mg8.avif";
import mg9 from "../../public/maingrid/mg9.avif";
import mg10 from "../../public/maingrid/mg10.avif";
import mg11 from "../../public/maingrid/mg11.avif";
import mg12 from "../../public/maingrid/mg12.avif";
import mg13 from "../../public/maingrid/mg13.avif";
import mg14 from "../../public/maingrid/mg14.avif";
import mg15 from "../../public/maingrid/mg15.avif";
import mg16 from "../../public/maingrid/mg16.avif";
import mg17 from "../../public/maingrid/mg17.avif";
import mg18 from "../../public/maingrid/mg18.avif";
import mg19 from "../../public/maingrid/mg19.avif";
import mg20 from "../../public/maingrid/mg20.avif";


const foodData = [
    { id: 1, imageLink: mg1 }, { id: 2, imageLink: mg2 }, { id: 3, imageLink: mg3 },
    { id: 4, imageLink: mg4 }, { id: 5, imageLink: mg5 }, { id: 6, imageLink: mg6 },
    { id: 7, imageLink: mg7 }, { id: 8, imageLink: mg8 }, { id: 9, imageLink: mg9 },
    { id: 10, imageLink: mg10 }, { id: 11, imageLink: mg11 }, { id: 12, imageLink: mg12 },
    { id: 13, imageLink: mg13 }, { id: 14, imageLink: mg14 }, { id: 15, imageLink: mg15 },
    { id: 16, imageLink: mg16 }, { id: 17, imageLink: mg17 }, { id: 18, imageLink: mg18 },
    {id: 19, imageLink: mg19 }, { id: 20, imageLink: mg20 }, 
];




const OnlineFoodDelivery = () => {
    return (
        <div className='px-[30px]  
                        lg:px-[200px]
                     
                        mt-[40px] '>
            <div className='flex 
                            flex-col 
                            justify-between 
                            md:flex-row 
                            md:justify-between'>
                <h1 className='heading-spacing'>Top restaurant chains in Delhi</h1>
            </div>
            {/* Grid Content */}
            <div className='grid grid-cols-1
                            gap-y-[70px] gap-x-[30px] 
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            xl:grid-cols-4 '>
                {foodData.map((item) => (
                    <SliderItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default OnlineFoodDelivery;
