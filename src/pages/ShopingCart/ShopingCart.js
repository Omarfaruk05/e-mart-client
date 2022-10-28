import React from 'react';

const ShopingCart = ({showCart, setShowCart}) => {
    console.log(showCart)
    return (
        <div className={(showCart ? "z-30 overflow-hidden fixed right-0 p-4 duration-500 ease-in-out rounded-tl-box block w-60 md:w-96 h-[2000px] bg-green-100": "none w-0 h-0")}>
            <button onClick={()=>setShowCart(!showCart)} className={(showCart ? "btn btn-circle btn-outline font-extrabold" : "hidden")}>X</button>
            <div className={(showCart? "block":'hidden')}>
                <h2>asdfaksf;asfafa;fafl;</h2>
            </div>
        </div>
    );
};

export default ShopingCart;