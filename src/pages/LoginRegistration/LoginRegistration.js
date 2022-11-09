import React from 'react';
import { useState } from 'react';
import loginPhoto from '../../assets/login-ragistration/login.jpg'
import singUpPhoto from '../../assets/login-ragistration/sing-up.jpg'

const LoginRegistration = () => {
    const [login, setLogin] = useState(true);
    const [signUp, setSignUp] = useState(false);

    const handleLogin=()=>{
        setLogin(true);
        setSignUp(false);
    };
    
    const handleSignUp=()=>{
        setLogin(false);
        setSignUp(true);
    };

    return (
        <div>
            <input type="checkbox" id="login-registration-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-4xl rounded-md m-0 p-0 relative">
                    {/* delete modal  */}
                    <label htmlFor='login-registration-modal' className='btn btn-sm bg-red-500 text-white rounded-md absolute right-0'>x</label>
                    <div className='flex text-black'>
                        <button onClick={handleLogin} className={login ? `p-4 w-1/2 rounded-none text-lg font-bold bg-slate-800 text-green-600`: `p-4 w-1/2 rounded-none text-lg font-bold bg-slate-50`}>Longin</button>
                        <button onClick={handleSignUp} className={signUp ? `p-4 w-1/2 rounded-none text-lg font-bold text-green-600 bg-slate-800 duration-75`: `p-4 w-1/2 rounded-none text-lg font-bold bg-slate-50`}>Sign Up</button>
                    </div>
                    <div>
                        {/* login  */}
                        <div className={login ? 'flex items-center': 'hidden'}>
                            <div className='flex items-center px-4 md:w-1/2 h-[500px] text-gray-700 bg-slate-200'>
                                <div>
                                    <form>
                                        <div>
                                            <input className='input input-bordered rounded-sm w-full mb-4' type="email" name="email" id="" placeholder='Your Email: *' required />
                                            <input className='input input-bordered rounded-sm w-full mb-4' type="password" name="password" id="" placeholder='Password: *' required />
                                            <input className='btn btn-primary w-full rounded-sm font-bold' type="submit" value="Login" />
                                        </div>
                                    </form>
                                    <p onClick={handleSignUp} className='text-blue-500 underline mt-2 cursor-pointer'>Create a new account?</p>
                                </div>
                            </div>
                            <div className='hidden md:block w-1/2'>
                                <img src={loginPhoto} alt="" />
                            </div>
                        </div>
                        {/* singup  */}
                        <div className={signUp ? 'flex items-center': 'hidden'}>
                            <div className='hidden md:block w-1/2'>
                                <img src={singUpPhoto} alt="" />
                            </div>
                            <div className='flex items-center px-4 md:w-1/2 h-[500px] text-gray-700 bg-slate-200'>
                                <div>
                                    <form>
                                        <div>
                                            <div className='flex gap-2'>
                                                <input className='input input-bordered rounded-sm w-full mb-4' type="text" name="firstName" id="" placeholder='First Name: *' required />
                                                <input className='input input-bordered rounded-sm w-full mb-4' type="text" name="lastName" id="" placeholder='Last Name: *' required />
                                            </div>
                                            <input className='input input-bordered rounded-sm w-full mb-4' type="email" name="email" id="" placeholder='Your Email: *' required />
                                            <input className='input input-bordered rounded-sm w-full mb-4' type="password" name="password" id="" placeholder='Password: *' required />
                                            <input className='input input-bordered rounded-sm w-full mb-4' type="password" name="confirmPassword" id="" placeholder='Confirm Password: *' required />
                                            <input className='btn btn-primary w-full rounded-sm font-bold' type="submit" value="Sing Up" />
                                        </div>
                                    </form>
                                    <p onClick={handleLogin} className='text-blue-500 underline mt-2 cursor-pointer'>Alrady have an account!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegistration;