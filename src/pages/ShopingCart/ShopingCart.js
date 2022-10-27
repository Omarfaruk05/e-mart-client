import React from 'react';

const ShopingCart = ({showCart, setShowCart}) => {
    console.log(showCart)
    return (
        <div className={(showCart ? "z-30 overflow-hidden fixed right-0 mt-2 md:mt-3 p-4 duration-500 ease-in-out rounded-tl-box block w-60 md:w-96 h-[2000px] top-24 md:top-20 lg:top-20 bg-green-100": "none w-0 h-0")}>
            <button onClick={()=>setShowCart(!showCart)} className={(showCart ? "btn btn-circle btn-outline" : "hidden")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className={(showCart? "block":'hidden')}>
                <h2>asdfaksf;asfafa;fafl;</h2>
            </div>
        </div>
    );
};

export default ShopingCart;