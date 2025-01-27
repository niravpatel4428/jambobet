import React from "react";
import modalclose from "../images/modalclose.svg";
import userForm from "../images/userForm.svg";
import lock from "../images/lock.svg";
import { Link } from "react-router-dom";
import eye from "../images/eye.svg"; 
import referral from "../images/referral.svg";

const Register = ({ isOpen, onClose }) => {
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
            <div className="bg-[#F4F7F9] max-[427px]:p-[20px_16px] p-[32px_30px] rounded-[10px_10px_0px_0px] relative overflow-auto">
              <div className="flex justify-between items-start pb-[10px] max-[427px]:mb-5 mb-[30px] border-b-[1px] border-black/15">
                <div className="flex flex-col gap-[15px]">
                  <h4 className="text-darkblue text-2xl font-medium">
                    Register
                  </h4>
                  <p className="text-darkblue/50 text-base font-normal">
                    Home to the best odds, instant payouts and many bonuses
                  </p>
                </div>
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
                      className="max-[427px]:text-base text-lg font-normal text-[#374151] !leading-none mb-[10px]"
                    >
                      Phone Number
                    </label>
                    <div className="relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[18px] after:left-[41px] after:content-[''] after:bg-black/20">
                      <input
                        type="text"
                        id="phone"
                        placeholder="Phone Number"
                        className="block w-full p-[13px_52px_13px_52px] bg-[#0000000c] border border-[#00000033] rounded-md focus:outline-none !leading-none text-dark text-lg font-normal placeholder:text-[#9599A1]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 pr-[10px] flex items-center pointer-events-none">
                        <img
                          src={userForm}
                          alt="user"
                          className="object-contain"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="max-[427px]:text-base text-lg font-normal text-[#374151] !leading-none mb-[10px]"
                    >
                      Password
                    </label>
                    <div className="relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[18px] after:left-[41px] after:content-[''] after:bg-black/20">
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="block w-full p-[13px_52px_13px_52px] bg-[#0000000c] border border-[#00000033] rounded-md focus:outline-none !leading-none text-dark text-lg font-normal placeholder:text-[#9599A1]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 pr-[10px] flex items-center pointer-events-none">
                        <img src={lock} alt="lock" className="object-contain" />
                      </span>
                      <span className="absolute top-1/2 -translate-y-1/2 right-[10px]">
                        <img src={eye} alt="eye" className="object-contain " />
                      </span>
                    </div>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="confirmPassword"
                      className="max-[427px]:text-base text-lg font-normal text-[#374151] !leading-none mb-[10px]"
                    >
                      Confirm Password
                    </label>
                    <div className="relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[18px] after:left-[41px] after:content-[''] after:bg-black/20">
                      <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        className="block w-full p-[13px_52px_13px_52px] bg-[#0000000c] border border-[#00000033] rounded-md focus:outline-none !leading-none text-dark text-lg font-normal placeholder:text-[#9599A1]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 pr-[10px] flex items-center pointer-events-none">
                        <img src={lock} alt="lock" className="object-contain" />
                      </span>
                      <span className="absolute top-1/2 -translate-y-1/2 right-[10px]">
                        <img src={eye} alt="eye" className="object-contain " />
                      </span>
                    </div>
                  </div>

                  {/* Referral Code Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="referralCode"
                      className="max-[427px]:text-base text-lg font-normal text-[#374151] !leading-none mb-[10px]"
                    >
                      Referral Code (optional)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="referralCode"
                        placeholder="Referral Code"
                        className="block w-full p-[13px_52px] bg-[#0000000c] border border-[#00000033] rounded-md focus:outline-none !leading-none text-dark text-lg font-normal placeholder:text-[#9599A1]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 pr-[10px] flex items-center pointer-events-none">
                        <img
                          src={referral}
                          alt="referral"
                          className="object-contain"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-[10px]">
                    <button className="w-full max-w-[349px] hover:bg-yellow/70 !leading-none p-[17px_17px] bg-yellow text-darkblue rounded-md font-medium">
                      Sign Up
                    </button>
                    <button className="w-full max-w-[92px] hover:bg-darkblue/70 !leading-none p-[17px_17px] bg-darkblue text-yellow rounded-md font-medium">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[10px] mt-5">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-white rounded-[10px] border border-black/20 mt-1"
                />
                <p className="text-base font-normal text-[#9599A1] ">
                  By clicking the checkbox, you agree to our website Terms &
                  Conditions, Privacy Notice and Terms of use.
                </p>
              </div>
            </div>
            {/* Disclaimer */}
            <p className="text-[#9599A1] text-sm text-center bg-[#FCF5DC] shadow-[0px_0px_1px_1px] border-t border-yellow py-3  rounded-[0px_0px_10px_10px]">
              You must be 18 yrs and above in order to sign up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
