export default function Footer() {
    return (
      <footer className="bg-black text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Exclusive</h3>
            <p className="mb-2">Subscribe</p>
            <p className="mb-4 text-sm">Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white p-2 flex-grow focus:outline-none"
              />
              <button class="absolute inset-y-0 right-0 flex items-center pr-3 hover:bg-gray-100 rounded-full">
              
            </button>
            </div>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-sm mt-2">exclusive@gmail.com</p>
            <p className="text-sm mt-2">+88015-88888-9999</p>
          </div>
  
          {/* Account Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Download App Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Download App</h3>
            <p className="text-sm mb-4">Save $3 with App New User Only</p>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/path/to/qr-code.png"
                alt="QR Code"
                className="w-20 h-20"
              />
              <div className="space-y-2">
                <img
                  src="google-play.png"
                  alt="Google Play"
                  className="w-32"
                />
                <img
                  src="/app-store.png"
                  alt="App Store"
                  className="w-32"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  