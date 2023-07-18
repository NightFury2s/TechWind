import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Showcase = () => {
  return (
    <div className="font-link">
      <div className="mt-5 max-w-full mx-auto text-center flex flex-col justify-center">
        <h2 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 text-[#202020]">
          KHÁM PHÁ SẢN PHẨM CỦA CHÚNG TÔI
        </h2>
      </div>

      <div className="parentDiv p-2 m-4 flex items-center justify-center overflow-x-auto">
        <button className="m-20 absolute left-2 sm:left-4 transform text-[#e30017] cursor-pointer"><AiOutlineLeft size={40}/></button>
        <button className="m-20 absolute right-2 sm:right-4 transform text-[#e30017] cursor-pointer"><AiOutlineRight size={40}/></button>
        
        <div className="flex">
          <div className="w-[300px] text-center flex flex-col justify-center items-center">
            <div className="top">
              <img
                className="w-[200px] h-[200px] object-cover p-2"
                src="https://www.linkpicture.com/q/laptop.png"
                alt="img"
              />
            </div>
            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
              <div className="flex items-center my-2">
                <button className="px-3 py-1 font-bold sm:text-2xl md:text-1xl text-4xl mr-1 text-[#202020]">
                  Máy tính xách tay
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-[300px] text-center flex flex-col justify-center items-center">
            <div className="top">
              <img
                className="w-[200px] h-[200px] object-cover p-2"
                src="https://www.linkpicture.com/q/monitor.png"
                alt="img"
              />
            </div>
            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
              <div className="flex items-center my-2">
                <button className="px-3 py-1 font-bold sm:text-2xl md:text-1xl text-4xl mr-1 text-[#202020]">
                  Màn hình
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-[300px] text-center flex flex-col justify-center items-center">
            <div className="top">
              <img
                className="w-[200px] h-[200px] object-cover p-2"
                src="https://www.linkpicture.com/q/phone_5.png"
                alt="img"
              />
            </div>
            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
              <div className="flex items-center my-2">
                <button className="px-3 py-1 font-bold sm:text-2xl md:text-1xl text-4xl mr-1 text-[#202020]">
                  Điện thoại
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-[300px] text-center flex flex-col justify-center items-center">
            <div className="top">
              <img
                className="w-[200px] h-[200px] object-cover p-2"
                src="https://www.linkpicture.com/q/laptop.png"
                alt="img"
              />
            </div>
            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
              <div className="flex items-center my-2">
                <button className="px-3 py-1 font-bold sm:text-2xl md:text-1xl text-4xl mr-1 text-[#202020]">
                  Máy tính xách tay
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-[300px] text-center flex flex-col justify-center items-center">
            <div className="top">
              <img
                className="w-[200px] h-[200px] object-cover p-2"
                src="https://www.linkpicture.com/q/laptop.png"
                alt="img"
              />
            </div>
            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
              <div className="flex items-center my-2">
                <button className="px-3 py-1 font-bold sm:text-2xl md:text-1xl text-4xl mr-1 text-[#202020]">
                  Máy tính xách tay
                </button>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Showcase;
