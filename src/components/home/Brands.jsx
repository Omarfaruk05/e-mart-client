import React from 'react';
import samsungBrand from "../../assets/brands/samsung.png"
import sonyBrand from "../../assets/brands/sony.png"
import lgBrand from "../../assets/brands/lg.png"
import toshibaBrand from "../../assets/brands/toshiba.png"
import sharpBrand from "../../assets/brands/sharp.png"
import panasonicBrand from "../../assets/brands/panasonic.png"

const Brands = () => {
    return (
        <div className='hidden md:flex justify-center w-full bg-gray-50'>
            <img className='cursor-pointer' src={sonyBrand} alt="" />
            <img className='cursor-pointer' src={samsungBrand} alt="" />
            <img className='cursor-pointer' src={lgBrand} alt="" />
            <img className='cursor-pointer' src={sharpBrand} alt="" />
            <img className='cursor-pointer' src={panasonicBrand} alt="" />
            <img className='cursor-pointer' src={toshibaBrand} alt="" />
        </div>
    );
};

export default Brands;