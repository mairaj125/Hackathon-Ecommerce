import React from "react";

const NewArrival = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <span className="text-red-500 font-bold uppercase text-sm">Featured</span>
        <h1 className="text-3xl font-bold mt-2">New Arrival</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* PlayStation 5 */}
        <div className="col-span-2 bg-black text-white relative rounded-lg overflow-hidden">
          <img
            src="/ps5.png" // Replace with your image path
            alt="PlayStation 5"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h2 className="text-2xl font-bold">PlayStation 5</h2>
            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
            <label className="mt-4">
              Shop Now
            </label>
          </div>
        </div>

        {/* Women's Collections */}
        <div className=" text-white relative rounded-lg overflow-hidden">
          <img
            src="/womens-collection.png" // Replace with your image path
            alt="Women's Collections"
            />

                    {/* Perfume */}
        <div className="bg-gray-900 text-white relative rounded-lg overflow-hidden">
          <img
            src="/perfume.png" // Replace with your image path
            alt="Perfume"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
        
         
          </div>


        </div>
        

            <span><img src="/speakers.png" alt="Icon" className="w-[390px] " /></span>
           
    
        </div>



      </div>
    </div>
  );
};

export default NewArrival;
