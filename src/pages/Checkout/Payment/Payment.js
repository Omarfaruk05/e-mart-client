import React from 'react';
import backgroundImage from "../../../assets/banner/bg-t.png";


const Payment = () => {
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='max-w-7xl mx-auto'>
                <div className='bg-base-100 rounded-b-lg'>
                    <div className='pt-10 pb-4 mb-8'>
                        <ul className="steps text-2xl w-full">
                            <li data-content="✓" className="step step-primary"><span className='text-lg uppercase mt-2 text-primary'>Cart Items</span></li>
                            <li data-content="✓" className="step step-primary"><span className='text-lg uppercase mt-2 text-green-500'>Delivery</span></li>
                            <li data-content="✓" className="step step-primary"><span className='text-lg uppercase mt-2 text-green-500'>Payment</span></li>
                            <li data-content="✕" className="step step-natural"><span className='text-lg uppercase mt-2 text-orange-500'>Receipt</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;