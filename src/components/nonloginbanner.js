import React from "react";
import banner_5 from "../assets/images/banner_4.jpg";

const Nonloginbanner = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <img
        className="object-cover h-[70vh] w-full absolute -z-10"
        src={banner_5}
        alt="banner_new_user"
      />
      <div className="w-full h-[90%] flex flex-col font-link justify-center items-center text-white px-4 text-center">
        <h1 className="font-bold text-5xl">JOIN TECHWIND MEMBERSHIP</h1>
        <p className="text-xl py-4">
          When you sign up for TECHWIND membership, you'll gain access to a
          variety of features, including browsing content, <br /> generating
          personal blogs, engaging in discussions, and providing feedback on our
          extensive product range. Get started and sign up now.
        </p>
        <div className="">
          <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <a href="/login">SIGN UP</a>
          </button>
          <button type="button" class="text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nonloginbanner;
