import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginPhoto from "../../assets/login-ragistration/login.jpg";
import singUpPhoto from "../../assets/login-ragistration/sing-up.jpg";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/user/userApi";
import { getUserInfo, storeUserInfo } from "../../services/auth.service";
import { toast } from "react-toastify";
import { storeUserInRedux } from "../../redux/features/user/userSlice";

const LoginRegistration = () => {
  const dispatch = useDispatch();
  const [loginUser, setLoginUser] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [login] = useLoginMutation();
  const { user } = useSelector((state) => state.user);

  const handleLogin = () => {
    setLoginUser(true);
    setSignUp(false);
  };

  const handleSignUp = () => {
    setLoginUser(false);
    setSignUp(true);
  };

  const handleLoginSubmit = async (data) => {
    try {
      JSON.stringify(data);
      const res = await login(data).unwrap();
      console.log(res);

      if (res?.data) {
        toast.success(res?.message);
        await storeUserInfo({ accessToken: res?.data?.token });
        dispatch(storeUserInRedux(res?.data?.user));
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  const { email } = getUserInfo();
  console.log(email);

  return (
    <div>
      {!email && (
        <div>
          {" "}
          <input
            type="checkbox"
            id="login-registration-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box max-w-4xl rounded-md m-0 p-0 relative">
              {/* delete modal  */}
              <label
                htmlFor="login-registration-modal"
                className="btn btn-sm bg-red-500 text-white rounded-md absolute right-0"
              >
                x
              </label>
              <div className="flex text-black">
                <button
                  onClick={handleLogin}
                  className={
                    loginUser
                      ? `p-4 w-1/2 rounded-none text-lg font-bold bg-slate-800 text-green-600`
                      : `p-4 w-1/2 rounded-none text-lg font-bold bg-slate-50`
                  }
                >
                  Longin
                </button>
                <button
                  onClick={handleSignUp}
                  className={
                    signUp
                      ? `p-4 w-1/2 rounded-none text-lg font-bold text-green-600 bg-slate-800 duration-75`
                      : `p-4 w-1/2 rounded-none text-lg font-bold bg-slate-50`
                  }
                >
                  Sign Up
                </button>
              </div>
              <div>
                {/* login  */}
                <div className={loginUser ? "flex items-center" : "hidden"}>
                  <div className="flex items-center px-4 md:w-1/2 h-[500px] text-gray-700 bg-slate-200">
                    <div className="w-full">
                      <form onSubmit={handleSubmit(handleLoginSubmit)}>
                        <div className="">
                          <div className="mb-2">
                            <input
                              className="input input-bordered rounded-sm w-full mb-1"
                              type="email"
                              {...register("email", {
                                required: "Email is required.",
                              })}
                              aria-invalid={errors.email ? "true" : "false"}
                              placeholder="Your Email: *"
                              required
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs" role="alert">
                                {errors.email?.message}
                              </p>
                            )}
                          </div>
                          <div className="mb-2">
                            <input
                              className="input input-bordered rounded-sm w-full mb-1"
                              type="password"
                              {...register("password", {
                                required: "Password is required.",
                              })}
                              aria-invalid={errors.password ? "true" : "false"}
                              placeholder="Password: *"
                              required
                            />
                            {errors.password && (
                              <p className="text-red-500 text-xs" role="alert">
                                {errors.password?.message}
                              </p>
                            )}
                          </div>
                          <input
                            className="btn btn-primary w-full rounded-sm font-bold"
                            type="submit"
                            value="Login"
                          />
                        </div>
                      </form>
                      <p
                        onClick={handleSignUp}
                        className="text-blue-500 underline mt-2 cursor-pointer"
                      >
                        Create a new account?
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2">
                    <img src={loginPhoto} alt="" />
                  </div>
                </div>
                {/* singup  */}
                <div className={signUp ? "flex items-center" : "hidden"}>
                  <div className="hidden md:block w-1/2">
                    <img src={singUpPhoto} alt="" />
                  </div>
                  <div className="flex items-center px-4 md:w-1/2 h-[500px] text-gray-700 bg-slate-200">
                    <div>
                      <form>
                        <div>
                          <div className="flex gap-2">
                            <input
                              className="input input-bordered rounded-sm w-full mb-4"
                              type="text"
                              name="firstName"
                              placeholder="First Name: *"
                              required
                            />
                            <input
                              className="input input-bordered rounded-sm w-full mb-4"
                              type="text"
                              name="lastName"
                              placeholder="Last Name: *"
                              required
                            />
                          </div>
                          <input
                            className="input input-bordered rounded-sm w-full mb-4"
                            type="email"
                            name="email"
                            placeholder="Your Email: *"
                            required
                          />
                          <input
                            className="input input-bordered rounded-sm w-full mb-4"
                            type="password"
                            name="password"
                            placeholder="Password: *"
                            required
                          />
                          <input
                            className="input input-bordered rounded-sm w-full mb-4"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password: *"
                            required
                          />
                          <input
                            className="btn btn-primary w-full rounded-sm font-bold"
                            type="submit"
                            value="Sing Up"
                          />
                        </div>
                      </form>
                      <p
                        onClick={handleLogin}
                        className="text-blue-500 underline mt-2 cursor-pointer"
                      >
                        Alrady have an account!
                      </p>
                      <p className="text-orange-600">
                        {user ? user.message : <p>loading</p>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginRegistration;
