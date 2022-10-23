import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';
import product1 from "../../assets/discount-photo/disouunt-1.png"

const ProductCard = () => {
    return (
        <div>
            <div className='border shadow-sm'>
                <div className='mt-4 text-center p-5 h-[300px]'>
                    <div><img className='w-40 mx-auto' src={product1} alt="" /></div>
                    <div>
                    <h3 className="text-xl font-bold text-gray-600">Asus Zendpas 7</h3>
                    <h2 className="text-2xl font-semibold text-green-500">$120</h2>
                        <div className='flex justify-center items-center mt-4'>
                        <StarIcon className='h-5 w-5 text-orange-400'></StarIcon>
                        <StarIcon className='h-5 w-5 text-orange-400'></StarIcon>
                        <StarIcon className='h-5 w-5 text-orange-400'></StarIcon>
                        <StarIcon className='h-5 w-5 text-orange-400'></StarIcon>
                        <StarIcon className='h-5 w-5'></StarIcon>
                        </div>
                    </div> 
                </div>
                <div className='bg-green-600 hover:bg-green-700 cursor-pointer text-white fons-semibold text-center py-1'>
                    <p className='uppercase font-semibold font'>Add to Cart</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;