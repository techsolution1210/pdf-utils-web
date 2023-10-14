import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
  
      
<footer className="bg-black w-full dark:bg-gray-900">
<div 
className="container px-14 md:px-28  grid place-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-0 md:gap-28 lg:gap-[200px] mx-auto p-4 py-6 lg:py-8">
 
      <div className="mb-6 ">
    
        <a href="https://flowbite.com/" className="flex items-center gap-5 m-2">
          <Image
            src="/assests/Frame 10.svg"
            alt="Example SVG"
            width={40}
            height={42}
          />
         <p className=' text-[#f5f7fa] font-[600]  '> All Document Editor</p>
     
        </a>
        {/* <h2 className="text-sm font-semibold text-[#F5F7FA] dark:text-white mt-2">
          &copy; 2016-2023 All Document Editor
        </h2> */}
        <span className="text-gray-500 dark:text-gray-400">
        &copy; 2016-2023 All Document Editor <br /> All Rights Reserved
        </span>
      </div>
      <div className="mb-6 flex flex-col justify-center items-center">
        {/* <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Home
        </h2> */}
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
        <li className="mb-4">
            <Link
              href="/"
              className="hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="mb-4">
            <a
              href="https://github.com/themesberg/flowbite"
              className="hover:underline"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/4eeurUVvTy"
              className="hover:underline"
            >
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-6 flex flex-col justify-center items-center ">
        {/* <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Privacy Policy
        </h2> */}
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
        <li className="mb-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
 
</div>
</footer>
  )
}

export default Footer
