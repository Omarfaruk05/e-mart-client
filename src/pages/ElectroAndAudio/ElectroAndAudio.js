import React from 'react';
import sidePic1 from "../../assets/discount-photo/about-1.jpg"
import sidePic2 from "../../assets/discount-photo/about-2.jpg"
import Brands from '../Brands/Brands';
import ElectroAndaudioNav from '../ElectroAndAudioNav/ElectroAndaudioNav';
import ProductCard from '../ProductCard/ProductCard';

const ElectroAndAudio = () => {
    const products= [1, 2, 3, 4, 5, 6]
    const navItemNames = ["SmartTv", "Laptop", "HeadPhone"]
    return (
        <div>
            <div className='max-w-7xl mx-auto my-12 px-2'>
                <div className='md:flex justify-center gap-10'>
                    <div className='hidden mt-14 lg:block md:w-2/5'>
                        <div className='mb-2'><img className='w-full' src={sidePic1} alt="" /></div>
                        <div><img className='w-full' src={sidePic2} alt="" /></div>
                    </div>
                    <div className='md:w-full'>
                       <ElectroAndaudioNav navItemNames={navItemNames}></ElectroAndaudioNav>
                       <Brands></Brands>
                       <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 my-4'>
                        {
                            products.map(product => <ProductCard></ProductCard>)
                        }
                       </div>
                       <div className='text-center'>
                            <button className=' bg-green-400 px-5 py-1 rounded-sm font-semibold uppercase'>See More</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectroAndAudio;