
"use client"
import React from "react";
import { useRouter } from "next/navigation";

const ProductGrid = () => {
    const router = useRouter();
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 3.5,
      reviews: 35,
      isNew: false,
      image: "/dog-food.png",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4.8,
      reviews: 95,
      isNew: false,
      image: "/camera1.png",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 4.9,
      reviews: 325,
      isNew: false,
      image: "/laptop.png",
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: "$500",
      rating: 4.5,
      reviews: 145,
      isNew: false,
      image: "/curology.png",
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      rating: 5,
      reviews: 65,
      isNew: true,
      image: "/electric-car.png",
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 4,
      reviews: 35,
      isNew: true,
      image: "/soccer-cleats.png",
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 4.8,
      reviews: 55,
      isNew: true,
      image: "/gamepad.png",
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 4.8,
      reviews: 55,
      isNew: false,
      image: "/jacket.png",
    },
  ];

  return (
    <div className="w-[90%] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm hover:shadow-lg transition duration-200 p-4 relative bg-gray-100"
          >
           
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md ml-[18px]"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center text-yellow-500">
                {"★".repeat(Math.floor(product.rating)) +
                  (product.rating % 1 ? "☆" : "")}
              </div>
              <p className="text-sm text-gray-500">({product.reviews})</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={() => router.push("/cart")}>
                Add to Cart
              </button>
              <button className="text-gray-400 hover:text-black">
                <span className="material-icons">visibility</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 w-[180px] bg-red-500 text-white py-3 rounded-lg text-center ml-[38%]">
        View All Products
      </button>
    </div>
  );
};

export default ProductGrid;
