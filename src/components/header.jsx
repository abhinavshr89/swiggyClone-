import React from 'react'
import swiggyLogo from "../../public/swiggyLogo.png"
import { PiSuitcaseSimple } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { TbCirclePercentage } from "react-icons/tb";
import { TbPokeball } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
    return (
        <nav className='px-[20px] py-[30px] h-[70px] justify-between flex shadow-sm shadow-slate-300
        xl:px-[150px]
        
        '>
            <div className='
            flex 
            items-center
            gap-4
            '>
                <img src={swiggyLogo} className='
                 h-[70px]
                ' alt="" />
                <h3 className='font-bold
                text-slate-600 
                pb-1
                border-b-[2px] 
                border-b-slate-600
                text-[13px]
                '>Other</h3>
            </div>

            {/* Second part of the Header */}
            <div className='gap-[20px] hidden
            lg:flex md:gap-[40px]
            
            
            '>
                <div className='header-icon-spacing'>
                    <PiSuitcaseSimple size={20} className='mt-[2px]' />
                    <p className='font-medium'>Swiggy Corporate</p>
                </div>
                <div className='header-icon-spacing'>
                    <IoIosSearch size={20}  />
                    <p className='font-medium'>Search</p>
                </div>
                <div className='header-icon-spacing relative'>
                    <TbCirclePercentage size={20}  />
                    <p className='font-medium'>Offers</p>
                    <p className='absolute
                    text-[10px] 
                    right-[-23px] 
                    top-[-10px] 
                    font-bold 
                    text-orange-400
                    '>NEW
                    </p>
                </div>
                <div className='header-icon-spacing'>
                    <TbPokeball size={20}  />
                    <p className='font-medium'>Help</p>
                </div>
                <div className='header-icon-spacing'>
                    <IoPersonOutline size={20}  />
                    <p className='font-medium'>Sign In</p>
                </div>
                <div className='header-icon-spacing'>
                    <CiShoppingCart size={20}  />
                    <p className='font-medium'>Cart</p>
                </div>

            </div>
        </nav>
    )
}

export default Header