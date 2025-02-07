
import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';



export default function CheckOut() {
    return (
        <div>
        <TopBar />
       <MenuBar />
  

       <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - Billing Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2  focus:ring focus:ring-gray-200 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2  focus:ring focus:ring-gray-200 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                 className="w-full mt-1 p-2  focus:ring focus:ring-gray-200 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                className="w-full mt-1 p-2  focus:ring focus:ring-gray-200 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2  focus:ring focus:ring-gray-200 bg-gray-100"
                />
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="save-info"
                  className="h-4 w-4 text-red-500 border-gray-300 rounded"
                />
                <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
                  Save information for next time
                </label>
              </div>
            </form>
          </div>

          {/* Right Section - Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white p-4 rounded-lg space-y-4">
              <div className="flex justify-between">
                <span>Item 1</span>
                <span>$650</span>
              </div>
              <div className="flex justify-between">
                <span>Item 2</span>
                <span>$1100</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr className="border-gray-300" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$1750</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="card"
                  name="payment-method"
                  className="h-4 w-4 text-red-500 border-gray-300"
                />
                <label htmlFor="card" className="ml-2 text-sm text-gray-600">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="payment-method"
                  className="h-4 w-4 text-red-500 border-gray-300"
                />
                <label htmlFor="cod" className="ml-2 text-sm text-gray-600">
                  Cash on Delivery
                </label>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-[240px] p-2 border  focus:ring focus:ring-black-200"
              />
              <button className="mt-3  bg-red-500 text-white py-2 rounded-md hover:bg-red-600 w-[130px] ml-[10px]">
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <button className="mt-6 w-[200px] bg-red-600 text-white py-3 rounded-md hover:bg-green-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
       
       </div>
    );
  }
  