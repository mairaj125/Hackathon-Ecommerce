import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';
export default function about() {

    return (
      <div>
      <TopBar />
     <MenuBar />

     <div className="flex flex-wrap justify-between gap-8 p-8 bg-white-100">
      {/* Left Section */}
      <div className="w-full md:w-1/2 lg:w-1/4 bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full">
              <img
                src="/call.png" // Replace with your phone icon path
                alt="Phone Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold">Call To Us</h3>
          </div>
          <p className="mt-4 text-gray-600">
            We are available 24/7, 7 days a week.
            <br />
            Phone: +8801611112222
          </p>
        </div>

        <hr className="border-gray-300 my-4" />

        <div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full">
              <img
                src="/msg.png" // Replace with your email icon path
                alt="Email Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold">Write To Us</h3>
          </div>
          <p className="mt-4 text-gray-600">
            Fill out our form, and we will contact you within 24 hours.
            <br />
            Emails: customer@exclusive.com
            <br />
            support@exclusive.com
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 lg:w-2/3 bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-200 text-black p-6"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none  focus:ring-gray-500 bg-gray-200 text-black p-6"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none  focus:ring-gray-500 bg-gray-200 text-black p-6"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-gray-500 bg-gray-200 text-black p-6"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>


      <Footer />
 
      </div>
    );
  };
  