
import React from 'react';

const ShopingCart = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg  w-[83%] ml-[9%]">
        {/* Header */}
        <div className="grid grid-cols-4 font-semibold text-gray-600 border-b py-4 px-6">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 px-6 py-4">
          {/* Item 1: LCD Monitor */}
          <div className="grid grid-cols-4 items-center">
            <div className="flex items-center space-x-4">
             
              <img
                src="/lcdcart.png" // Replace with actual image
                alt="LCD Monitor"
                className="w-20 h-20 rounded-lg"
              />
              <span className="font-medium">LCD Monitor</span>
            </div>
            <div className="text-gray-700">$650</div>
            <div>
              <input
                type="number"
                defaultValue={1}
                className="w-16 border border-gray-300 rounded-lg text-center focus:ring focus:ring-blue-300"
                min={1}
              />
            </div>
            <div className="text-gray-700">$650</div>
          </div>

          {/* Item 2: H1 Gamepad */}
          <div className="grid grid-cols-4 items-center border-t">
            <div className="flex items-center space-x-4">
         
              <img
                src="/cartpad.png" // Replace with actual image
                alt="H1 Gamepad"
                className="w-20 h-20 rounded-lg"
              />
              <span className="font-medium">H1 Gamepad</span>
            </div>
            <div className="text-gray-700">$550</div>
            <div>
              <input
                type="number"
                defaultValue={2}
                className="w-16 border border-gray-300 rounded-lg text-center focus:ring focus:ring-blue-300"
                min={1}
              />
            </div>
            <div className="text-gray-700">$1100</div>
          </div>
        </div>


      </div>

      <div className="flex justify-between items-center px-6 py-4  bg-white-50">
      <button className="w-[185px] ml-[7.5%] h-[56px]  border border-gray-400 text-black-600 bg-white-200 hover:bg-white-300 hover:border-gray-500 py-2 px-4 rounded-md ">
       Return To Shop
     </button>
    <button className=" w-[185px] mr-[6.5%] h-[56px]  border border-gray-600 bg-white-600 hover:bg-white-700 hover:border-gray-700 text-black py-2 px-6 rounded-md">
      Update Cart
    </button>
    </div>


    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-1">
     
      <div className="flex  space-x-4 h-[58px] ml-[18%]">
        <input
          type="text"
          placeholder="Coupon Code"
          className="w-full md:w-2/3 border border-gray-400 rounded-md px-4 py-2 text-gray-600 focus:ring focus:ring-gray-300 focus:outline-none"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
          Apply Coupon
        </button>
      </div>

      {/* Cart Summary Section */}
      <div className="border-2 border-black rounded-lg p-6 shadow-md  w-[570px] ml-[70px]">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Cart Total</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <hr className="my-2 border-2 border-black" />
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <hr className="my-2 border-2 border-black" />
        <div className="flex justify-between text-gray-800 font-semibold text-lg mb-4">
          <span>Total:</span>
          <span>$1750</span>
        </div>
        <button className=" bg-red-500 hover:bg-red-600 text-white py-2 rounded-md w-[300px] ml-[100px]">
          Proceed to checkout
        </button>
      </div>
    </div>

     <br></br> <br></br> <br></br>



    </div>
  );
};

export default ShopingCart;
