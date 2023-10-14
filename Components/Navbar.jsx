import React, { useState } from 'react'
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRef } from 'react';
import {BiMenu} from 'react-icons/bi'
import { RxCross1} from 'react-icons/rx'
import Link from 'next/link';
const inter = Inter({ subsets: ["latin"] });


const Navbar = () => {
    

  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const menuRef = useRef(null)
  const toggleMenu = ()=>{
    menuRef.current.classList.toggle('show-menu')
  }
    
  return (
      
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b mb-[80px] border-gray-200 dark:border-gray-600">
        <div  className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <div style={{flex:1}} className="flex">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image
              src="\assests\Frame 10.svg"
              alt="Example SVG"
              width={40}
              height={42}
            />
            <Image
              src="assests\All Document Editor.svg"
              alt="Example SVG"
              width={100}
              height={200}
              className="mx-2"
            />
          </a>
          </div>
          <div style={{flex:2}} className="navigation" ref={menuRef} onClick={toggleMenu}>
           <div className="menu flex justify-between items-center">
          <div
            className="items-center justify-between  w-full md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-red-500"
                
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
             href={'/merge'}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Merge Pdf
                </Link>
              </li>
              <li>
                <Link
                  href="/crop"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Crop Pdf
                </Link>
              </li>
              <li>
                <Link
                  href="/unlock"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Unlock Pdf
                </Link>
              </li>
              <li>
                <Link
                  href="/compress"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Compress Pdf
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            > 
              Log In
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              {/* className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> */}
              Sign up
            </button>
            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
          </div>
          </div>
          <span className='md:hidden' onClick={toggleMenu} > 
    
          <BiMenu  className='w-6 h-6 cursor-pointer'/> 
        
          </span>
        
        </div>
      </nav>
  
  )
}

export default Navbar