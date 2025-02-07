import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';



export default function Error() {
    return (
        <div>
        <TopBar />
       <MenuBar />

       <div className="mt-[30px]">

       <nav className="w-full text-gray-500 mb-4">
        <div className="max-w-screen-lg mx-auto px-4">
          <span className="text-sm">
            Home <span className="mx-2">/</span> 404 Error
          </span>
        </div>
      </nav>


       </div>

       <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
   
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg text-gray-500 mb-6">
          Your visited page not found. You may go home page.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Back to home page
        </a>
      </div>
    </div>


        <Footer />
              
        </div>
    );
    }
         
  