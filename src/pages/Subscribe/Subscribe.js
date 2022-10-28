import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className='text-center max-w-7xl mx-auto py-12'>
                <div className='mb-4'>
                   <h1 className='text-4xl font-bold'>Newsletter</h1> 
                   <p>Subscribe to receive coupons and gift cards</p>
                </div>
                <div>
                    <form>
                        <input className='w-80 mr-4 rounded border p-2 text-lg' type="text" name="" id="" />
                        <input className='btn btn-md bg-orange-600 text-white' type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;