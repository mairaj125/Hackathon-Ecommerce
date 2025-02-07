import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';



export default function WishList() {

    const products = [
        {
          name: "Gucci duffle bag",
          price: 960,
          originalPrice: 1160,
          discount: 35,
          image: "/wisgbag.png",
        },
        {
          name: "RGB liquid CPU Cooler",
          price: 1960,
          image: "/wishcooler.png",
        },
        {
          name: "GP11 Shooter USB Gamepad",
          price: 550,
          image: "/wishgame.png",
        },
        {
          name: "Quilted Satin Jacket",
          price: 750,
          image: "/wishjacket.png",
        },
      ];
    

      const SeeProducts = [
        {
          name: "ASUS FHD Gaming Laptop",
          price: 960,
          originalPrice: 1160,
          discount: 35,
          rating: 4.5,
          reviews: 65,
          image: "/laptop.png",
        },
        {
          name: "IPS LCD Gaming Monitor",
          price: 1160,
          rating: 4.5,
          reviews: 65,
          image: "/led.png",
        },
        {
          name: "HAVIT HV-G92 Gamepad",
          price: 560,
          isNew: true,
          rating: 4.5,
          reviews: 65,
          image: "/gamepad.png",
        },
        {
          name: "AK-900 Wired Keyboard",
          price: 200,
          rating: 4.5,
          reviews: 65,
          image: "/keyboard.png",
        },
      ];



    return (
        <div>
        <TopBar />
       <MenuBar />

       <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
      {/* Left Section: Wishlist Title */}
      <h1 className="text-lg font-semibold">
        Wishlist <span className="text-gray-500">(4)</span>
      </h1>

      {/* Right Section: Button */}
      <button className="border border-gray-300 px-4 py-2 text-sm font-medium  hover:bg-gray-100 w-[190px] h-[60px]">
        Move All To Bag
      </button>
    </div>



       <div className="min-h-screen bg-white-100 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm bg-white">
            {product.discount && (
              <span className="absolute bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md top-2 left-2">
                -{product.discount}%
              </span>
            )}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />

            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold mb-1">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <button className="mt-4 w-full bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="min-h-screen bg-white-100 py-8">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-8 bg-red-500"></div>
          <h2 className="text-xl font-bold">Just For You</h2>
        </div>
        <button className=" bg-white-100  border px-4 py-2 text-sm font-medium rounded-md hover:bg-white-100 w-[130px] h-[50]">
          See All
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {SeeProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm bg-white"
          >
            {/* Discount or New Badge */}
            {product.discount && (
              <span className="absolute bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md top-2 left-2">
                -{product.discount}%
              </span>
            )}
            {product.isNew && (
              <span className="absolute bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md top-2 left-2">
                NEW
              </span>
            )}

            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />

            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-sm font-bold mb-1">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-2 text-sm">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={0}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-gray-500">({product.reviews})</span>
              </div>
              <button className="mt-4 w-full bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>




    </div>






      <Footer />
         
         </div>
      );
    }
    