import React from 'react';

const ElectroAndaudioNav = () => {
    return (
        <>
        <div className="navbar bg-base-100 mb-0">
            <div className="flex-1">
                <a className="font-semibold text-white normal-case bg-green-500 p-[2px] md:p-2 md:px-4" alt="">Electronics</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a className='md:font-semibold'>SmartTV</a></li>
                <li><a className='md:font-semibold'>HeadPhone</a></li>
                <li><a className='md:font-semibold'>Laptop</a></li>
                </ul>
            </div>
        </div>
        <div className='-mt-2 h-1 w-full bg-green-400'></div>
        </>
    );
};

export default ElectroAndaudioNav;