import { StarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import productPhoto from "../../assets/discount-photo/disouunt-1.png";
import backgroundImage from "../../assets/banner/bg-t.png"
import { ShoppingCartIcon } from '@heroicons/react/24/outline';


const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(0);

    const maps= [1, 2, 3, 5, 6, 7, 8]

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

    const handleRating=(rating)=>{
        setRating(rating);
        console.log(rating)
    }
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
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
                        <h2 className='text-3xl font-bold mb-2 text-indigo-900'>Asuse Zendpas 7</h2>
                        <div className='flex flex-wrap gap-2'>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Offer Price: 120 $</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Price: 140 $</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Stock: In Stock</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Product Code: 1126</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Brand: Asuse</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Modle: Zendpus 7</span>
                            <span className='rounded-full bg-slate-100 p-1 shadow-sm px-5'>Warranty: 1 Year</span>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mt-4'>Kye Features:</h2>
                            <hr className='w-40'/>
                            <ul>
                                <li><span className='font-bold text-lg text-indigo-900'>Processor:</span> Helio G-670</li>
                                <li><span className='font-bold text-lg text-indigo-900'>Model:</span> Asus ZendPas 7</li>
                                <li><span className='font-bold text-lg text-indigo-900'>Ram:</span> 4/64 & 6/128</li>
                                <li><span className='font-bold text-lg text-indigo-900'>Deiplay:</span> Amoloyed</li>
                                <li><span className='font-bold text-lg text-indigo-900'>Battery:</span> 6000 Amh</li>
                            </ul>
                            <p className='text-orange-600 text-sm'>For more info, Please scroll down..</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 my-6'>
                            <div className='flex'>
                                <StarIcon className='w-6 text-orange-500'></StarIcon>
                                <StarIcon className='w-6 text-orange-500'></StarIcon>
                                <StarIcon className='w-6 text-orange-500'></StarIcon>
                                <StarIcon className='w-6 text-orange-500'></StarIcon>
                                <StarIcon className='w-6 '></StarIcon>
                            </div>
                            <p className='mt-1'><span className='hover:text-orange-500 cursor-pointer'>BASED ON 6 REVIEWS. </span><span className='hover:text-orange-500 cursor-pointer'>-WRITE A REVIEW</span></p>
                        </div>
                        <div className='sm:flex gap-5 mt-12'>
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

                {/* product specification section. */}
                <div className='md:flex jsutify-between gap-5 my-4'>
                    <div className='md:w-2/3 px-2'>

                        {/* spacifications */}
                        <div>
                            <h3 className='text-2xl font-bold my-4 px-2'>Specifications</h3>

                            {/* table  */}
                            <div className='w-full bg-base-100 rounded'>
                                <h4 className='text-xl font-bold bg-base-200 px-2 py-1 rounded-t-md'>Mobile</h4>
                                <hr />
                                <div className=' rounded-b-md'> 
                                {
                                    maps.map(x=>
                                        <>
                                            <div className='bg-slate-50 hover:bg-base-100 flex justify-start items-center gap-6 bg py-1 px-2'>
                                                <p className='w-1/4'>Screen Size</p>
                                                <p className='w-3/4'>6.5''</p>
                                            </div>  
                                            <hr className='mx-1'/>
                                        </>)
                                }
                                
                                </div>
                            </div>
                        </div>
                        <div className='my-4 p-4 bg-base-100 rounded'>
                            <h3 className='text-2xl font-bold my-4'>Description</h3>
                            <div><img className='w-full mx-auto' src={productPhoto} alt="" /></div>
                            <p>The MAG Series Was Born Through Rigorous Quality Testing And Designed To Be A Symbol Of Sturdiness And Durability. Focused On Providing The Best User Experience, The MAG Series Has A Simple Installation Process Coupled With A Friendly User Interface Making It The Best Choice For Entry Level Gamers. Visualize Your Victory With MSI Optix MAG245R2 Esports Gaming Monitor. Equipped With A 1920x1080, 170hz Refresh Rate, 1ms Response Time Panel, Optix MAG245R2 Will Give You The Competitive Edge You Need To Take Down Your Opponents. Enjoy Extremely Smooth, Tear-Free Gameplay With Built-In NVIDIA G-SYNC Compatible Technology When Paired With A Compatible NVIDIA Graphics Card. Make Sure You Can Hit Your Mark With All The Latest Technologies Built-In The MSI Esports Gaming Monitors For Competitive Play.MSI Gaming Monitors Are Equipped With A 170Hz Refresh Rate + 1ms Response Time IPS Panel Which Has The Most Benefit In Fast Moving Game Genres Such As First Person Shooters, Fighters, Racing Sims, Real-Time Strategy, And Sports. These Type Of Games Require Very Fast And Precise Movements, Which An Ultra-High Refresh Rate And Fast Response Time Monitor Will Put You Ahead Of Your Competition.</p>
                        </div>
                        {/* Review Section  */}
                        <div className='my-4'>
                        <h3 className='text-2xl font-bold my-1 mx-2'>Write A Review</h3>
                            <div className='border p-2 rounded border-slate-200'>
                                <form>
                                    <div className='flex items-start gap-3 mb-2'>
                                        <label className='w-1/3 mt-2'>Your Name*</label>
                                        <input className='input mb-3 w-full' type="text" name="" 
                                        id="" />
                                    </div>
                                    <div className='flex items-start gap-3'>
                                        <label className='w-1/3 mt-1'>Your Review*</label>
                                        <textarea className='textarea w-full text-lg' name="" id="" rows="6"></textarea>
                                    </div>
                                    <div className='flex items-start justify-start gap-3 mt-4'>
                                        <label className='w-1/3 mt-1'>Rating*</label>
                                        <div className="rating w-full">
                                            <input onClick={()=>handleRating(1)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" unchecked/>
                                            <input onClick={()=>handleRating(2)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500"  />
                                            <input onClick={()=>handleRating(3)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                            <input onClick={()=>handleRating(4)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                            <input onClick={()=>handleRating(5)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                        </div>
                                    </div>
                                    <div className='flex justify-end w-full'>
                                        <input className='btn btn-sm btn-primary' type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Related products */}
                    <div className='md:w-1/3'>
                        <h3 className='text-2xl font-bold my-1'>Related Products</h3>
                        <div className='py-2 rounded'>
                            {
                                maps.map(maps => 
                                <div className='flex items-center gap-3 p-2 m-4 bg-base-100 rounded hover:shadow-lg'>
                                    <div>
                                        <img className='w-28' src={productPhoto} alt="" />
                                        </div>
                                    <div>
                                        <h4>Asus Zendpas 7</h4>
                                        <p className='text-orange-500'>$120</p>
                                        <button className='btn btn-success px-6 btn-sm mt-3 text-white font-semibold uppercase'><span><ShoppingCartIcon className='w-5 mr-2'></ShoppingCartIcon></span><span className='block md:hidden lg:block'>Add To Cart</span></button>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;