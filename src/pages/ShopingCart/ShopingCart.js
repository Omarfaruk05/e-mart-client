import { TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import productPhoto from "../../assets/discount-photo/disouunt-1.png"

const ShopingCart = ({showCart, setShowCart}) => {
    const cartItems= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    return (
        <div className={(showCart ? "z-30 overflow-auto fixed right-4 duration-500 ease-in-out block w-80 md:w-96 h-screen bg-base-100": "none w-0 h-0")}>
            <div className={(showCart? "block relative mb-48":'hidden')}>
                <div className='bg-slate-900 px-4 py-2 flex justify-between items-center sticky top-0'>
                    <h2 className='text-2xl font-bold text-white '>Your Cart</h2>
                    <button onClick={()=>setShowCart(!showCart)} className="btn btn-sm btn-circle btn-outline hover:bg-slate-600 font-extrabold text-white">X</button>
                </div>
                {
                    cartItems.map(cartItem => 
                    <>
                        <div className='hover:bg-slate-100'>
                            <div className='px-2 py-4 grid grid-cols-5 gap-3 justify-between'>
                                <div className=''>
                                    <img className='' src={productPhoto} alt="" />
                                </div>
                                <div className='text-lg mt-2 col-span-3'>
                                    <p className='text-normal'>Asus Zendpus 7</p>
                                    <p className='text-lg font-bold'>
                                        <span className='mr-2'>$120</span>
                                        <span className='mr-2'>X</span>
                                        <span className='mr-2'>1</span>
                                        <span className='mr-2'>=</span>
                                        <span>$120</span>
                                    </p>
                                </div>
                                <button className='btn btn-circle'><TrashIcon className='w-5 h-5' /></button> 
                            </div>
                            <hr />
                        </div>
                    </>)
                }
                <div className='fixed bottom-0 bg-base-100 w-60 md:w-96'>
                    <div className='bg-slate-300 p-3'>
                        <form>
                            <input className='input input-sm mr-4 w-48 md:w-60 rounded-sm' type="text" placeholder='Promo Code'/>
                            <input className='btn btn-sm btn-primary font-bold px-5 rounded-sm' type="submit" value="Apply" />
                        </form>
                    </div>
                    <div className='flex justify-between w-60 md:w-96 px-4 my-2'>
                        <p>Sub-Total</p>
                        <p className='font-bold'>$120000</p>
                    </div>
                    <hr />
                    <div className='flex justify-between w-60 md:w-96 px-4 my-2'>
                        <p>Total</p>
                        <p className='font-bold'>$120000</p>
                    </div>
                    <Link to={"cart-items"}><button  onClick={()=>setShowCart(!showCart)} className=' mt-1 btn w-60 md:w-96 rounded-none bg-orange-500 text-white font-bold'>Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;