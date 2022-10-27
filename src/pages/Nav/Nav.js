import React from 'react';

const Nav = () => {
    return (
       <div className='sticky top-0 z-20 bg-green-500 hidden md:block w-full'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex items-center gap-5  text-white font-semibold'>
                    <div className="dropdown py-2 px-8 bg-yellow-400 text-black">
                        <label tabIndex={0}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block mb-1 mr-1 text-green-800 w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <label tabIndex={0}>CATAGORY</label>
                        <ul tabIndex={0} className="dropdown-content menu m-1 shadow bg-base-100 w-52 font-normal text-sm ">
                            <li className=' border-b'><a>Computer & Accessories</a></li>
                            <li className=' border-b'><a>Mobile & Tablet</a></li>
                            <li className=' border-b'><a>Camera & Video</a></li>
                            <li className=' border-b'><a>Audio & Headphones</a></li>
                            <li className=' border-b'><a>Telivition & Desplay</a></li>
                            <li className=' border-b'><a>Electronics</a></li>
                            <li className=' border-b'><a>Office Supplies</a></li>
                            <li><a>Printer & Ink</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Home</p>
                    </div>
                    <div>
                        <p>Shop</p>
                    </div>
                    <div>
                        <p>Blog</p>
                    </div>
                    <div>
                        <p>Contact</p>
                    </div>
                    <div>
                        <p>About</p>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Nav;