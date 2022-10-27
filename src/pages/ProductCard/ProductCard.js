import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import product1 from "../../assets/discount-photo/disouunt-1.png"

const ProductCard = () => {
    return (
        <div>
            <div className='border border-green-300 rounded-sm shadow-sm mb-8'>
                <div className='mt-4 text-center p-5 h-[345px]'>
                    <div><img className='w-48 mx-auto' src={product1} alt="" /></div>
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
                <div className='fons-semibold text-center'>
                <p className='text-sm bg-green-300 px-2 py-1 mb-2 uppercase font-semibold font'>Buy Now</p>
                <p className='bg-green-300 text-sm py-1 px-2 uppercase font-semibold font'>Add to Cart</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;