import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="bg-[#272B2E]">
        <div className="flex justify-between items-center h-20 max-w-[1300px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#ffff] m-4">TechWind</h1>

        <div className="hidden md:flex flex-2 justify-center w-[100%] pr-5">
            <form className="flex justify-between items-center w-full max-w-md">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search" required />
            </div>
            </form>
        </div>

        <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Products</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Login</li>
        </ul>

        <div className="md:hidden">
            <div onClick={handleNav} className="block md:hidden">{!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}</div>

            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full bg-[#272B2E] ease-in-out duration-500 z-20" : "fixed left-[-100%]"}> {/* Add z-20 class to adjust the z-index */}
              <h1 className="w-full text-3xl font-bold text-[#ffff] m-4">TechWind</h1>

              <ul className="uppercase pt-4">
                  <li className="p-4 border-b border-gray-600">Home</li>
                  <li className="p-4 border-b border-gray-600">Products</li>
                  <li className="p-4 border-b border-gray-600">Resources</li>
                  <li className="p-4 border-b border-gray-600">About</li>
                  <li className="p-4">Contact</li>
              </ul>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Navbar;
