import React from 'react';
import Link from 'next/link';

function success() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const renew = `${current.getDate()}/${current.getMonth() + 1}/${
    current.getFullYear() + 1
  }`;
  const handleClick = (e, path) => {
    if (path === '/') {
      console.log('I clicked on the cancel Page');
    }
    // if (path === "/posts") {
    //   console.log("I clicked on the Posts Page");
    // }
  };
  return (
    <div className="flex h-screen justify-center items-center bg-[#1e4c90]">
      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex w-full space-x-2  items-center md:w-3/4">
          <a href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Current Plan Details
            </h5>
          </a>
          <span className="p-1 bg-red-100 text-red-800 text-xs font-semibold rounded dark:bg-red-200 dark:text-red-800">
            Cancelled   
          </span>
        </div>
       
        <p>Premium</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Phone+Tablet+Computer+TV
        </p>
        <p className="mb-3 text-3xl font-medium">7,000/yr</p>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link href="/">
          <a onClick={(e) => handleClick(e, '/')}>Choose Plan</a>
        </Link>
        </button>
        <p className="pt-4 w-50 ">
          <div className="bg-[#2a2a2a]/10">
            Your subscription was cancelled. You will loose access to services on {date}.
          </div>
        </p>
      </div>
    </div>
  );
}

export default success;
