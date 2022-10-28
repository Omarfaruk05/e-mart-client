import React, { useState } from 'react';
import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import ShopingCart from '../ShopingCart/ShopingCart';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const NavComponent = ({children}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);


    const handleSearch = () => {
        setShowSearch(!showSearch);
    }
    return (
        <div className=''>
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className='bg-slate-800 w-full'>
                <Header></Header>
                <div className="md:mt-0 mx-auto w-full max-w-7xl text-center top-7 flex justify-between navbar">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-white inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <Link to="/home"><div className="flex justify-between text-xl font-bold text-primary px-2 mx-2">E Mart</div></Link>

                <div className='hidden md:block'>
                        <form>
                        <input type="text" placeholder="Search here..." className="input input-bordered w-32 md:w-60 lg:w-96" />
                        <input className='btn btn-primary ml-2' type="submit" value="Search" />
                        </form>
                </div>
                <div className="flex-none text-center text-white">
                    
                    <MagnifyingGlassIcon  onClick= {handleSearch} className=' w-6 mr-3 block md:hidden'></MagnifyingGlassIcon>

                    <ul className="menu menu-horizontal">

                    {/* <!-- Navbar menu content here --> */}
                    <li><a><UserIcon className=' h-6 w-6'></UserIcon></a></li>
                    <li onClick={()=>setShowCart(!showCart)}>
                        <a>
                            <ShoppingCartIcon  className=' h-6 w-6'></ShoppingCartIcon> 
                        </a>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
                <div className={(showSearch ?"block text-center mb-3 z-20":  "hidden" )}>
                    <form>
                        <input type="text" placeholder="Type here" className="input input-bordered w-60" />
                        <input className='btn btn-primary ml-2' type="submit" value="Serch" />
                    </form>
                </div>
                {/* <!-- Page content here --> */}
               { children}
               <ShopingCart showCart={showCart} setShowCart={setShowCart}></ShopingCart>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-40 bg-base-100">
                {/* <!-- Sidebar content here --> */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default NavComponent;