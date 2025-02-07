import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';

export default function SignUp() {

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
          <h2 className="text-2xl font-bold mb-4">Create an account</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2"
              />
            </div>
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
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 flex justify-center items-center">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              <img
                src="/google-icon.png" // Replace with your Google icon path
                alt="Google Icon"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-black-500 font-bold underline ">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>




       <Footer />
 
      </div>
    );
  };
  