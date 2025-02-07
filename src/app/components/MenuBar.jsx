"use client"; 

import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Install with `npm install react-icons`


const MenuBar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b min-h-[100px]">
    
      <div className="font-bold text-xl exclusive ml-[15%]">Exclusive</div>


      {/* Navigation Links */}
      <nav className="flex space-x-8 text-xl">
        <a href="/" className="hover:text-gray-600">
          Home
        </a>
        <a href="/contact" className="hover:text-gray-600">
          Contact
        </a>

        <a href="/about" className="hover:text-gray-600">
          About
        </a>
        
        <a href="/signup" className="hover:text-gray-600">
          Sign Up
        </a>
      </nav>

      {/* Search Bar */}
      <div className="relative flex items-center mr-60">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        <img src="/basket.png" alt="Icon" className="w-[30px] h-[30px] absolute right-[-80]  " />
        <FiSearch className="absolute right-3 text-gray-400" />

        <img src="/mht.png" alt="Icon" className="w-[22px] h-[22px] absolute right-[-36] " />
        <FiSearch className="absolute right-3 text-gray-400" />

      </div>

      


    </header>
  );
};

export default MenuBar;
