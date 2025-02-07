import React from "react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Phones",
      icon: "/phon.png", // Replace with actual image paths
    },
    {
      id: 2,
      name: "Computers",
      icon: "/computer.png",
    },
    {
      id: 3,
      name: "SmartWatch",
      icon: "/smartwatch.png",
    },
    {
      id: 4,
      name: "Camera",
      icon: "/camera.png",
    },
    {
      id: 5,
      name: "HeadPhones",
      icon: "/headphones.png",
    },
    {
      id: 6,
      name: "Gaming",
      icon: "/gaming.png",
    },
  ];

  return (
    <div className="p-8 ml-[6%]">
      {/* Title Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-red-500 w-4 h-4 rounded-sm"></div>
        <h2 className=" ml-[61px] text-2xl font-bold ">Categories</h2>
      </div>
      
      <h3 className="text-xl font-medium mb-6  ml-[60px]">Browse By Category</h3>

      <div className="flex justify-end mt-6 space-x-4">
        <button className="w-[50px] h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
          ←
        </button>
        <button className="w-[50px] h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
          →
        </button>
      </div>

      {/* Categories Row */}
      <div className="flex space-x-4 overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" p-[25px] flex flex-col items-center justify-center w-[180px] h-44 border rounded-lg cursor-pointer hover:shadow-lg ml-[60px] transition shrink-0"
             >
            <img
              src={category.icon}
              alt={category.name}
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>

    

    </div>

    
  );
};

export default Categories;
