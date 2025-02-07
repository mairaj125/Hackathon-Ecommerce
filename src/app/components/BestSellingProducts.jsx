import React from "react";

const BestSellingProducts = () => {
  const products = [
    {
      name: "The north coat",
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
      image: "/north-coat.png", // Replace with your image path
    },
    {
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 4.5,
      reviews: 65,
      image: "/gucci-bag.png", // Replace with your image path
    },
    {
      name: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
      image: "/cpu-cooler.png", // Replace with your image path
    },
    {
      name: "Small BookShelf",
      price: 360,
      rating: 5,
      reviews: 65,
      image: "/bookshelf.png", // Replace with your image path
    },
  ];

  return (
    <div className="py-8 px-6 w-[90%] ml-[5%]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold ml-10">Best Selling Products</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
             
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <div className="text-red-500 font-bold text-xl mb-1">
              ${product.price}
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center text-yellow-500 text-sm">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="text-gray-500 ml-2">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;