import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';

export default function SignIn() {

    return (
      <div>
      <TopBar />
     <MenuBar />

     <div className="flex flex-wrap min-h-screen bg-white-100  ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white-100 flex items-center justify-center mt-24">
        <img
          src="/upside.png" // Replace with your image path
          alt="Shopping Cart"
          className="w-full"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form className="space-y-6">
          
            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                 className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                 className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2"
              />
            </div>

            <button
              type="submit"
              className="h-20 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 w-44"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>



     <Footer />
 
 </div>
);
};