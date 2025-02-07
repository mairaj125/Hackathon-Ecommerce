"use client"
import { FiChevronDown  } from 'react-icons/fi';
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

import MenuBar from './components/MenuBar';
import TopBar from './components/TopBar';
import FlashSales from "./components/FlashSales";
import Categories from "./components/Categories";
import BestSellingProducts from "./components/BestSellingProducts";
import NewArrival from "./components/NewArrival";
import ProductGrid from "./components/ProductGrid";

import Footer from './components/Footer';

import './globals.css';

export default function Home() {


  return (
     <div>
     <TopBar />
    <MenuBar />
   
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[25%] bg-white   border-r border-gray-300 h-horibar h-[32%] ml-[5%]">
        <ul className="space-y-4 p-6 text-lg font-semibold text-gray-700  mt-[40px] ml-[100px] ">
          <li className="hover:text-black cursor-pointer text-[18px] font-thin flex space-x-32">
            <span>Woman's Fashion</span>
            <span><img src="/gt.png" alt="Icon" className="w-[30px] h-[25px]" /></span>
          </li>
          <li className="hover:text-black cursor-pointer text-[18px] font-thin flex space-x-32">
            
             <span>Woman's Fashion</span>
             <span><img src="/gt.png" alt="Icon" className="w-[30px] h-[25px]" /></span>
            
             </li>


          <li className="hover:text-black cursor-pointer text-[18px] font-thin">Electronics</li>
          <li className="hover:text-black cursor-pointer text-[18px] font-thin">Home & Lifestyle</li>
          <li className="hover:text-black cursor-pointer text-[18px] font-thin">Medicine</li>
          <li className="hover:text-black cursor-pointer text-[18px] font-thin">Sports & Outdoor</li>
          <li className="hover:text-black cursor-pointer text-[18px] font-thin">Baby & Toys</li>
          <li className="hover:text-black cursor-pointer text-[18px] font-thin">Groceries & Pets</li>
          <li className="hover:text-black cursor-pointer text-[18px] font-thin">Health & Beauty</li>
        </ul>
      </div>

      {/* Promotional Banner */}
      <div className="w-3/4 relative">
        <img
          src="/bannerico.png" // Replace with the actual path to your image
          alt="Promotional Banner"
          className="w-[90%] h-full object-cover mt-[53px] ml-[37px]"
        />
      </div>
    </div>

    <div>
      <FlashSales />
    </div>

    <div>
      <Categories />
    </div>

    <div className="w-[90%] border-t border-gray-300 my-6 ml-[60px]"></div>

  
    <div>
      <BestSellingProducts />
    </div>

    <div>
      <ProductGrid />
    </div>

    <div className="">
    <img
           src="/newarrival.png" // Replace with your actual image path
           alt="Profile"
           className='ml-[10%] w-[80%]'
    
         />
    </div>

    <div>
     
     <img
           src="/promabout.png" // Replace with your actual image path
           alt="Profile"
           className='ml-[10%]'
    
         />
 
 
     </div>
 
   
     <Footer />

     </div>

   
  
  );
}
