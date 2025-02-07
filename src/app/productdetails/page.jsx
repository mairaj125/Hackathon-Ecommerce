
"use client"
import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';
import { useState } from "react";


export default function ProductDetails() 
{
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("red");
    const [selectedSize, setSelectedSize] = useState("M");

    return (
      <div>
      <TopBar />
     <MenuBar />


     <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Image Gallery */}
        <div>
          <div className="">
            <img
              src="/detgame.png" // Replace with your main product image path
              alt="Gamepad"
              className="w-[200px]]"
            />
          </div>
          <div className="flex mt-4 gap-2">
            <img
              src="/gamepad-1.png" // Replace with your additional images
              alt="Gamepad Thumbnail"
              className="w-16 h-16 border rounded-md cursor-pointer"
            />
            <img
              src="/gamepad-2.png"
              alt="Gamepad Thumbnail"
              className="w-16 h-16 border rounded-md cursor-pointer"
            />
            <img
              src="/gamepad-3.png"
              alt="Gamepad Thumbnail"
              className="w-16 h-16 border rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
          <p className="text-gray-500">(150 Reviews) <span className="text-green-500">In Stock</span></p>
          <p className="text-3xl font-bold mt-2">$192.00</p>

          <p className="mt-4 text-gray-600">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal. Pressure sensitive.
          </p>
          <hr className="my-6 border-gray-300" />

          {/* Colors */}
          <div className="mt-4">
            <span className="font-medium">Colours:</span>
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => setSelectedColor("red")}
                className={`w-8 h-8 rounded-full border ${
                  selectedColor === "red" ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: "red" }}
              />
              <button
                onClick={() => setSelectedColor("gray")}
                className={`w-8 h-8 rounded-full border ${
                  selectedColor === "gray" ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: "gray" }}
              />
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-4">
            <span className="font-medium">Size:</span>
            <div className="flex gap-3 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? "bg-red-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Now */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-4 py-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-4 py-2 bg-red-600 text-white"
              >
                +
              </button>

            </div>
            <button className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600">
              Buy Now
            </button>
            <span className="inline-flex items-center ">
            <img src="/mht.png" alt="Icon" className="w-[20px] h-[20px] mr-2" /></span>

          </div>

          {/* Delivery and Return Info */}
          <div className="mt-6 space-y-2 border rounded-lg p-2 w-[66%]">
            <div className="flex items-center gap-3 ">
              <span className="text-sm">Free Delivery </span>
              <a href="#" className="text-black-500 text-sm">Enter your postal code for Delivery Availability</a>
            </div>
            <hr className="my-6 border-gray-300" />
            <div className="flex items-center gap-3 ">
              <span className="text-sm">Return Delivery</span>
              <a href="#" className="text-black-500 text-sm">30 Days Delivery Returns. Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
     



      <Footer />

    </div>
    
    

);
};
   