import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" aria-label="Home">
            <img src={LOGO_URL} alt="FoodieHub" className="w-36 mb-3" />
          </Link>
          <p className="text-sm text-gray-400">
            Fresh meals delivered quickly — discover local favorites and new
            dishes.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="text-sm">
          <h4 className="font-semibold mb-3 text-gray-100">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="hover:text-white">
                Grocery
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <h4 className="font-semibold mb-3 text-gray-100">Contact</h4>
          <p className="text-gray-400">support@foodiehub.example</p>
          <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.6..." />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2..." />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-100">Subscribe</h4>
          <form className="flex">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              className="flex-1 px-3 py-2 rounded-l-md text-sm bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="bg-pink-600 px-4 py-2 rounded-r-md text-white text-sm hover:bg-pink-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} FoodieHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
