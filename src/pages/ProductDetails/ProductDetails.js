import { StarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import productPhoto from "../../assets/discount-photo/disouunt-1.png"

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity =(operator) => {
        if(operator === "increase"){
            setQuantity(quantity + 1);
            return;
        }
        if(operator === "decrease" && quantity===1){
            return;
        }
        if(operator === "decrease" && quantity>1){
            setQuantity(quantity -1);
            return;
        }
    }
    return (
        <div className='bg-base-200'>
            <div className='max-w-7xl mx-auto my-4'>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 justify-between bg-white p-4 rounded'>
                    <div className='col-span-2'>
                        <div>
                            <img className='text-center w-full' src={productPhoto} alt="" />
                        </div>
                        <div className='flex gap-2 mt-4 justify-center'>
                            <img className='w-24 border ' src={productPhoto} alt="" />
                            <img className='w-24 border ' src={productPhoto} alt="" />
                            <img className='w-24 border ' src={productPhoto} alt="" />
                            <img className='w-24 border ' src={productPhoto} alt="" />
                        </div>
                    </div>
                    <div className='col-span-3 px-4'>
                        <h2 className='text-3xl font-bold mb-8'>Asuse Zendpas 7</h2>
                        <div className='flex flex-wrap gap-2'>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Offer Price: 120 $</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Price: 140 $</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Stock: In Stock</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Product Code: 1126</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Brand: Asuse</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Modle: Zendpus 7</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Warranty: 1 Year</span>
                        </div>
                        <div className='flex justify-start items-center gap-4 my-6'>
                            <div className='flex'>
                                <StarIcon className='w-6'></StarIcon>
                                <StarIcon className='w-6'></StarIcon>
                                <StarIcon className='w-6'></StarIcon>
                                <StarIcon className='w-6'></StarIcon>
                                <StarIcon className='w-6'></StarIcon>
                            </div>
                            <p className='mt-1'><span className='hover:text-orange-500'>BASED ON 6 REVIEWS. </span><span className='hover:text-orange-500'>-WRITE A REVIEW</span></p>
                        </div>
                        <div className='sm:flex gap-5'>
                            <div className='border border-blue-900 p-2 w-full mb-4 rounded'>
                                <h3 className='text-xl font-semibold my-1'>Cash Discount Price</h3>
                                <h2 className='text-2xl font-bold text-orange-500'>120$</h2>
                                <div>
                                    <small className='text-sm'>Check Available Payment Method</small><br />
                                    <small className='text-sm'><span className='text-orange-500'>Contact For Bulk Quantity:</span><span>+8801567900262</span></small>
                                </div>
                            </div>
                            <div className='border border-blue-900 bg-slate-100 p-2 w-full rounded mb-4'>
                                <h3 className='text-xl font-semibold my-1'>EMI Price*</h3>
                                <h2 className='text-2xl font-bold text-orange-500'>140$</h2>
                                <div>
                                    <small className='text-sm'>Starting From 50$/Month. For Discount Price</small><br />
                                    <small className='text-sm'><span className='text-orange-500'>Click Here To View 27 Banks EMI Plans</span></small>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='fons-semibold text-center sm:flex items-center gap-4'>
                                <div className='flex justify-center items-center gap-3'>
                                    <div className='flex gap-1 items-center -mt-1'>
                                        <button onClick={()=>handleQuantity("decrease")} className='btn px-4 border-2 border-gray-400'>-</button>
                                        <input type="text" name="" value={quantity} className='input input-bordered w-16 mx-1' id="" />
                                        <button onClick={()=>handleQuantity("increase")} className='btn px-4'>+</button>
                                    </div>
                                    <p className='btn btn-success text-white font-semibold font mb-2'>Add to Cart</p>
                                </div>
                                <p className= 'btn btn-success text-white font-semibold font px-7 mb-2'>Buy Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;