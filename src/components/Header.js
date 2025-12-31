import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between place-items-stretch top-0 z-50 bg-white shadow-md">
      <div className="flex place-content-center">
        <img src={LOGO_URL} alt="Logo" className="w-36" />
        <h1 className="place-content-center">
          Status: {onlineStatus ? "🟢" : "🔴"}
        </h1>
      </div>
      <div className="flex items-center space-x-4 m-4">
        <div className="nav-items flex items-center space-x-6">
          <ul className="flex space-x-4 text-gray-700">
            <li>
              <Link className="hover:text-pink-600 transition-colors" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pink-600 transition-colors"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pink-600 transition-colors"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-24 h-12 flex items-center justify-center rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors">
          Cart
        </div>
        <button
          className="w-24 h-12 flex items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
          onClick={() => {
            btnNameReact === "login"
              ? setBtnNameReact("logout")
              : setBtnNameReact("login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
