import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';

export default function Account() {
    return (
        <div>
        <TopBar />
       <MenuBar />

        <div className="flex justify-between items-center px-4 py-2 mt-[50px]">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm ml-[20px]">
            <span className="mr-2">Home</span>
            <span className="text-gray-400">/</span>
            <span className="ml-2 text-black font-medium">My Account</span>
        </div>

        {/* Welcome message */}
        <div className="text-sm mr-[95px]">
            <span className="text-black">Welcome!</span>
            <span className="ml-2 text-red-500 font-medium">Md Rimel</span>
        </div>
        </div>

       <div className="flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-12 mt-[30]">
      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Manage My Account</h2>
          <ul className="space-y-2 ml-[26px]">
            <li className="text-red-500 font-semibold">My Profile</li>
            <li className="text-gray-600 hover:text-black">Address Book</li>
            <li className="text-gray-600 hover:text-black">My Payment Options</li>
          </ul>
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="font-bold text-lg">My Orders</h2>
          <ul className="space-y-2 ml-[26px]">
            <li className="text-gray-600 hover:text-black">My Returns</li>
            <li className="text-gray-600 hover:text-black">My Cancellations</li>
          </ul>
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="font-bold text-lg">My Wishlist</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[60%] md:w-3/4 bg-white rounded-lg shadow p-6  ml-[8%]">
        <h2 className="text-xl font-bold mb-6 text-red-500">Edit Your Profile</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Md"
                className="w-[330px] h-[48px] bg-gray-100 border-gray-300  focus:border-gray-50 focus:ring-red-500 pl-4"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Rimel"
               className="w-[330px] h-[48px] bg-gray-100 border-gray-300  focus:border-gray-50 focus:ring-red-500 pl-4"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="rimel1111@gmail.com"
                className="w-[330px] h-[48px] bg-gray-100 border-gray-300  focus:border-gray-50 focus:ring-red-500 pl-4"
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Kingston, 5236, United States"
               className="w-[330px] h-[48px] bg-gray-100 border-gray-300  focus:border-gray-50 focus:ring-red-500 pl-4"
              />
            </div>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-4">Password Changes</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="currentPassword">
                Current Password
              </label>
              <input
                id="currentPassword"
                type="password"
                placeholder="Current Password"
               className="w-[330px] h-[48px] bg-gray-100 border-gray-300  focus:border-gray-50 focus:ring-red-500 pl-4"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                placeholder="New Password"
              className="w-[330px] h-[48px] bg-gray-100 border-gray-300  focus:border-gray-50 focus:ring-red-500 pl-4"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="confirmNewPassword">
                Confirm New Password
              </label>
              <input
                id="confirmNewPassword"
                type="password"
                placeholder="Confirm New Password"
                className="w-[330px] h-[48px] bg-gray-100 border-gray-300  focus:border-gray-50 focus:ring-red-500 pl-4"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 bg-white-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 w-[200px] h-[56px]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>




      <Footer />
         
         </div>
      );
    }
    