import React from "react";

const FlashSales = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "/gmaepad.png", // Replace with actual image paths
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: "/keyboard.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.5,
      reviews: 99,
      image: "/led.png",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 500,
      discount: 25,
      rating: 4.5,
      reviews: 99,
      image: "/chair.png",
    },
  ];

  return (
    <div className="px-6 py-12 bg-white w-[80%] ml-[7%]">
      <div className="text-left">
        <h2 className="text-xl font-semibold text-red-500">Today's</h2>
        <h1 className="text-3xl font-bold">Flash Sales</h1>
        <div className="flex justify-center mt-4 text-lg text-xl space-x-2">
          <div>00 :</div> <div>00 :</div> <div>00 :</div> <div>00</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-4"
              />
             
              <div className="absolute top-2 right-2 flex space-x-2">
                
              </div>
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-red-500 font-bold">${product.price}</p>
              <p className="line-through text-gray-500">${product.originalPrice}</p>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>{index < product.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 ml-2">
                ({product.reviews} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">
          View All Products
        </button>
      </div>
      <div className="w-[90%] border-t border-gray-300 my-6 ml-[60px]"></div>
    </div>
  );
};

export default FlashSales;
