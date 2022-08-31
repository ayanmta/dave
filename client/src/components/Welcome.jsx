import React, { useState } from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const Welcome = () => {
  const [isLoading, setLoading] = useState(false);

  const connectWallet = () => {
    alert("hey");
  };
  const handleSubmit = () => {
    alert("karlo submit");
  };
  const commonStyles =
    "min-h-[80px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  const Input = ({ placeholder, name, type, value, handleChanage }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChanage(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="md:text-left text-3xl sm:text-5xl text-white text-gradient py-1">
            send crypto <br /> accross the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrency easily on
            dave.
          </p>
          <button
            type="button"
            placeholder="hdfdfdhvhdvfh"
            onClick={() => connectWallet()}
            className="bg-[#2952e3] flex flex-row justify-center items-center my-5 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 ">
            <div className={`rounded-tl-2xl m-0 ${commonStyles}`}>
              Reliability
            </div>
            <div className={` m-0 ${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl m-0  ${commonStyles}`}>
              Etherium
            </div>
            <div className={`rounded-bl-2xl m-0  ${commonStyles}`}>Web 3.0</div>
            <div className={`  m-0 ${commonStyles}`}>Low fees</div>
            <div className={`rounded-br-2xl  m-0 ${commonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-1 ml-15 justify-end sm:justify-center items-center  w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 ml-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 m-1 rounded-full border-2 border-white flex justify-center items-center ">
                  <p className="text-white ">#</p>
                </div>
                <BsInfoCircle fontSize={17} color="#fff" className="m-1" />
              </div>
              <div className="m-20px">
                <p className="text-white flex-col font-light text-sm justify-start">
                  Address
                </p>
                <p className="text-white flex-col font-semibold text-lg mt-1">
                  Etherium
                </p>
              </div>
            </div>
            <div className="text-white mt-10 p-5 sm:w-95 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input
                placeholder="Address To"
                name="Address To"
                type="text"
                handleChange={() => {}}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={() => {}}
              />
              <Input
                placeholder="keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={() => {}}
              />
              <Input
                placeholder="message"
                name="mesage"
                type="text"
                handleChange={() => {}}
              />
              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {true ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:border-[#2d3e68] cursor-pointer rounded-full"
                >
                  {" "}
                  submit{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
