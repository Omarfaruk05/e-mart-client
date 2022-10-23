import React from 'react';

const ShopingCart = ({showCart, setShowCart}) => {
    console.log(showCart)
    return (
        <div className={(showCart ? "z-10 overflow-hidden fixed right-0 mt-2 md:mt-3 p-4 duration-500 ease-in-out rounded-tl-box block w-60 md:w-96 h-[2000px] top-24 md:top-20 2xl:top-5 bg-green-100": "none w-0 h-0")}>
            <button onClick={()=>setShowCart(!showCart)} class={(showCart ? "btn btn-circle btn-outline" : "hidden")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className={(showCart? "block":'hidden')}>
                <h2>asdfaksf;asfafa;fafl;</h2>
            </div>
        </div>
    );
};

export default ShopingCart;