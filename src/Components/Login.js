import React from "react";
import modalclose from "../images/modalclose.svg";
import userForm from "../images/userForm.svg";
import lock from "../images/lock.svg";
import eye from "../images/eye.svg";
import { Link } from "react-router-dom";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="h-full w-full overflow-y-auto flex justify-center items-center">
        <div
          className="relative w-full max-w-[541px] animate-fade-in"
          tabIndex={0}
        >
          <div className="px-[15px]">
            <div className="bg-[#F4F7F9] p-[20px_16px] s16:p-[32px_30px] rounded-[20px] relative overflow-auto">
              <div className="flex justify-between items-center pb-[10px] mb-5 s16:mb-[30px] border-b-[1px] border-black/15">
                <h4 className="text-darkblue text-xl s16:text-2xl font-medium">Login</h4>
                <button
                  onClick={onClose}
                  className="w-[38px] h-[38px] min-w-[38px] flex justify-center items-center border-[1px] rounded-md border-[rgba(0, 0, 0, 0.20)] bg-[rgba(0, 0, 0, 0.05)] hover:bg-gray-300 transition-all duration-[0.4s]"
                >
                  <img src={modalclose} alt="close" />
                </button>
              </div>
              <div>
                {/* Modal Content */}
                <div className="space-y-5">
                  {/* Phone Number Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-sm s15:text-base s18:text-lg font-normal text-[#374151] !leading-none mb-2 s15:mb-[10px]"
                    >
                      Phone Number
                    </label>
                    <div className="relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[18px] after:left-[38px] s18:after:left-[41px]  after:content-[''] after:bg-black/20">
                      <input
                        type="text"
                        id="phone"
                        placeholder="Phone Number"
                        className="block w-full py-2 px-12 s18:p-[13px_52px_13px_52px] bg-[#0000000c] border border-[#00000033] rounded-md focus:outline-none !leading-normal s18:!leading-none text-dark text-base s18:text-lg  font-normal placeholder:text-[#9599A1]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 pr-[10px]  flex items-center pointer-events-none">
                        <img
                          src={userForm}
                          alt="user"
                          className="object-contain w-3 xl:w-4 s16:w-4"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="text-sm s15:text-base s18:text-lg font-normal text-[#374151] !leading-none mb-2 s15:mb-[10px]"
                    >
                      Password
                    </label>
                    <div className="relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[18px] after:left-[38px] s18:after:left-[41px]  after:content-[''] after:bg-black/20">
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="block w-full py-2 px-12 s18:p-[13px_52px_13px_52px] bg-[#0000000c] border border-[#00000033] rounded-md focus:outline-none !leading-normal s18:!leading-none text-dark text-base s18:text-lg  font-normal placeholder:text-[#9599A1]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 pr-[10px]  flex items-center pointer-events-none">
                        <img src={lock} alt="lock" className="object-contain w-3 xl:w-4 s16:w-4" />
                      </span>
                      <span className="absolute top-1/2 -translate-y-1/2 right-[10px]">
                        <img src={eye} alt="eye" className="object-contain w-3 xl:w-4 s16:w-4 " />
                      </span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex max-[427px]:gap-3 justify-between gap-[30px]">
                    <Link
                      to="/"
                      className="text-[#9599A1] hover:text-darkblue max-[427px]:text-sm text-lg font-normal !leading-none transition-all duration-300 underline"
                    >
                      Forgot Password?
                    </Link>
                    <Link
                      to="/"
                      className="text-[#9599A1] hover:text-darkblue max-[427px]:text-sm text-lg font-normal !leading-none transition-all duration-300 underline"
                    >
                      Activate Account?
                    </Link>
                  </div>
                  {/* Buttons */}
                  <div className="flex space-x-[10px]">
                    <button className="w-full max-w-[349px] hover:bg-yellow/70 !leading-none p-[17px_17px] bg-yellow text-darkblue rounded-md font-medium">
                      Sign In
                    </button>
                    <button className="w-full max-w-[92px] hover:bg-darkblue/70 !leading-none p-[17px_17px] bg-darkblue text-yellow rounded-md font-medium">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
