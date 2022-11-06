import { ArrowsRightLeftIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useState } from 'react';

const ProductsFilter = () => {
    const [arroPrice, setArroPrice] = useState(true);
    const [arroStock, setArroStock] = useState(true);
    const [arroRam, setArroRam] = useState(true);

    return (
        <div className='hidden lg:block w-1/4'>
           <div>
                
                <div className='flex justify-between my-4 mx-2 rounded-lg px-4 py-2 bg-slate-100'>
                    <h3 className='text-2xl font-bold'>Filter</h3>
                    <ArrowsRightLeftIcon className='w-6'></ArrowsRightLeftIcon>
                </div>
               <div className='my-4 p-4 mx-2 rounded-lg bg-slate-100'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-2xl font-semibold mb-1'>Price Range</h3>
                        {
                            arroPrice ? <ChevronUpIcon onClick={()=>setArroPrice(!arroPrice)} className='w-8 cursor-pointer'></ChevronUpIcon> : <ChevronDownIcon onClick={()=>setArroPrice(!arroPrice)} className='w-8 cursor-pointer'></ChevronDownIcon>
                        }
                    </div>
                    <hr />
                    <div className={arroPrice ? 'flex gap-5 justify-between items-center mt-4': "hidden"}>
                        <input className='input  input-sm input-bordered w-full ' type="text" name="" id="" />
                        <p>to</p>
                        <input className='input input-sm input-bordered w-full' type="text" name="" id="" />
                    </div>
               </div>
               <div className='my-4 p-4 mx-2 rounded-lg bg-slate-100'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-2xl font-semibold mb-1'>Availability</h3>
                        {
                            arroStock ? <ChevronUpIcon onClick={()=>setArroStock(!arroStock)} className='w-8 cursor-pointer'></ChevronUpIcon> : <ChevronDownIcon onClick={()=>setArroStock(!arroStock)} className='w-8 cursor-pointer'></ChevronDownIcon>
                        }
                    </div>
                    <hr />
                    <div className={arroStock?'block': "hidden"}>
                        <div className="flex gap-2 items-center my-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">In Stock</span> 
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">Out Of Stock</span> 
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">Up Comming</span> 
                        </div>
                    </div>
               </div>
               <div className='my-4 p-4 mx-2 rounded-lg bg-slate-100'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-2xl font-semibold mb-1'>RAM</h3>
                        {
                            arroStock ? <ChevronUpIcon onClick={()=>setArroRam(!arroRam)} className='w-8 cursor-pointer'></ChevronUpIcon> : <ChevronDownIcon onClick={()=>setArroRam(!arroRam)} className='w-8 cursor-pointer'></ChevronDownIcon>
                        }
                    </div>
                    <hr />
                    <div className={arroRam?'block': "hidden"}>
                        <div className="flex gap-2 items-center my-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">1 GB</span> 
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">2 GB</span> 
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">4 GB</span> 
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">8 GB</span> 
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">16 GB</span> 
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">32 GB</span> 
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default ProductsFilter;