import React from 'react';
import Discount from '../Discount/Discount';

const Discounts = () => {
    const disconunts = [1, 2, 3];
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto py-8 px-2'>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center flex-wrap gap-3'>
                    {
                        disconunts.map(discount => <Discount discount= {discount}></Discount>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Discounts;