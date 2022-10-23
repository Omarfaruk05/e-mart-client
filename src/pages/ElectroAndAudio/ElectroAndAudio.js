import React from 'react';
import sidePic1 from "../../assets/discount-photo/about-1.jpg"
import sidePic2 from "../../assets/discount-photo/about-2.jpg"
import ElectroAndaudioNav from '../ElectroAndAudioNav/ElectroAndaudioNav';
import ProductCard from '../ProductCard/ProductCard';

const ElectroAndAudio = () => {
    const products= [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div>
            <div className='max-w-7xl mx-auto mt-12 px-2'>
                <div className='md:flex justify-center gap-2'>
                    <div className='hidden mt-3 lg:block md:w-2/5'>
                        <div className='mb-2'><img className='w-full' src={sidePic1} alt="" /></div>
                        <div><img className='w-full' src={sidePic2} alt="" /></div>
                    </div>
                    <div className='md:w-full'>
                       <ElectroAndaudioNav></ElectroAndaudioNav>
                       <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 mt-4 mb-12'>
                        {
                            products.map(product => <ProductCard></ProductCard>)
                        }
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectroAndAudio;