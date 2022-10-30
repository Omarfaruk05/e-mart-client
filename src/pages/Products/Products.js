import React from 'react';
import { useState } from 'react';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import backgroundImage from "../../assets/banner/bg-t.png"
import ProductCard from '../ProductCard/ProductCard';


const Products = () => {
    const [minRange,setMinRange] = useState(0);
    const [maxRange,setMaxRange] = useState(1000);
    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    console.log(minRange, maxRange)
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='max-w-7xl mx-auto'>
                <div>
                    <div className='lg:flex gap-4 justify-between'>
                        <ProductsFilter 
                        minRange={minRange} 
                        maxRange={maxRange} 
                        setMinRange={setMinRange}
                        setMaxRange={setMaxRange}

                        className="w-1/4"></ProductsFilter>
                        <div className='lg:w-3/4'>
                            <div className='mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4 justify-center items-center'>
                                {
                                    products.map(prodcut => <ProductCard></ProductCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;