import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../../../assets/banner/bg-t.png";
import productPhoto from "../../../assets/discount-photo/disouunt-1.png"


const Receipt = () => {
    const cartItems = [1, 2, 3, 5, 6, 7, 8];

    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='max-w-7xl mx-auto'>
                <div className='bg-base-100 rounded-b-lg'>
                    <div className='pt-10 pb-4 mb-8'>
                        <ul className="steps text-2xl w-full">
                            <li data-content="✓" className="step step-primary"><span className='text-lg uppercase mt-2 text-primary'>Cart Items</span></li>
                            <li data-content="✓" className="step step-primary"><span className='text-lg uppercase mt-2 text-green-500'>Confirm Order</span></li>
                            <li data-content="✓" className="step step-primary"><span className='text-lg uppercase mt-2 text-green-500'>Payment</span></li>
                            <li data-content="◉" className="step step-primary"><span className='text-lg uppercase mt-2 text-orange-500'>Receipt</span></li>
                        </ul>
                    </div>
                </div>
                <div className='rounded-lg mt-4'>
                    <div className='hidden md:grid justify-between items-center grid-cols-4 mx-2 rounded-t-lg p-2 bg-slate-200'>
                        {/* heading  */}
                        <h3 className='text-lg font-bold uppercase col-span-2'>Product</h3>
                        <h3 className='text-lg font-bold uppercase'>Quantity</h3>
                        <div className='grid grid-cols-2 items-center'>
                            <h3 className='text-lg font-bold uppercase'>Unite Price</h3>
                            <h3 className='text-lg font-bold uppercase'>Total Price</h3>
                        </div>
                    </div>
                    {
                        cartItems.map(cartItem => 
                            <>
                            <div className='grid justify-between items-center grid-cols-1 md:grid-cols-4 gap-2 bg-base-100 mx-2 text-center md:text-start relative'>
                                {/* product  */}
                                <div className='md:col-span-2 flex items-center justify-center md:justify-start'>
                                    <div>
                                        <img className='w-32 h-28' src={productPhoto} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold uppercase'>Asus Zendpus 7</h2>
                                        <p><span className='font-bold'>Model:</span> <span className='text-orange-500'>Zendpus 7</span></p>          
                                    </div>
                                </div>
                                {/* quantity  */}
                                <div className='mx-auto md:mx-0'>
                                    <div className='flex gap-1 items-center w-full text-center'>
                                        <input type="text" name="" value={"2"} className='input input-bordered w-12 p-1 mx-1 text-center' id="" disabled />
                                    </div>
                                </div>
                                {/* price  */}
                                <div className='mt-4 md:mt-0 md:grid grid-cols-2 items-center gap-2 '>
                                    <h2 className='text-xl font-bold'> <span className='inline md:hidden mr-2'>Unite Price:</span> $120</h2>
                                    <h2 className='text-xl font-bold'> <span className='inline md:hidden mr-2'>Total Price:</span> $120</h2>
                                </div>
                            </div>
                            <hr className='mx-2'/>
                            </>
                        )
                    }
                    <div className='flex justify-between items-center mx-2 p-4 bg-base-100'>
                        <p className='text-lg font-bold'>Discount 15%</p>
                        <p>$ 12</p>
                    </div>
                    <hr  className='mx-2'/>
                    <div className='flex justify-between items-center mx-2 p-4 bg-base-100'>
                        <p className='text-lg font-bold'>Shipping</p>
                        <p>$ 30</p>
                    </div>
                    <hr  className='mx-2'/>
                    <div className='flex justify-between items-center mx-2 p-4 bg-base-100'>
                        <p className='text-lg font-bold'>Vat</p>
                        <p>$ 12</p>
                    </div>
                    <hr  className='mx-2'/>
                    <div className='flex text-xl font-bold text-orange-600 justify-between items-center mx-2 p-4 bg-base-100'>
                        <h3 className=''>Total</h3>
                        <h3>$ 140</h3>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-center'>
                            <Link to={"/payment"}>
                                <button className='mx-2 btn btn-outline font-bold my-4 rounded-sm'>
                                    <span><ArrowLeftIcon className='w-5'></ArrowLeftIcon></span>
                                    <span className='mt-1 ml-2 pr-3'>Back</span>
                                </button>
                            </Link>
                        </div>
                        <div className='text-center'>
                            <button className='mx-2 btn btn-accent text-white font-bold my-4 rounded-sm'>
                                <span className='mt-1 mx-4'>Print</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;