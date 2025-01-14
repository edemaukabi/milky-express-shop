import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Cart from "./Cart";
import cartIcon from "../../assets/cart-icon.svg";
import logoIcon from "../../assets/logo-milky.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full overflow-hidden">
        <Link to="/" className="flex-shrink-0">
          <Logo src={logoIcon} alt="Milky Express logo" />
        </Link>

        {!menuOpen && <button
          className="text-gray-600 sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>}

        <div className="hidden sm:flex items-center space-x-6">
          <Link to="/" className="text-sm sm:text-base hover:font-semibold">
            HOME
          </Link>
          <Link
            to="/orders"
            className="text-sm sm:text-base hover:font-semibold"
          >
            MY ORDER
          </Link>
          <Link to="/cart">
            <Cart
              cartIcon={cartIcon}
              altText="Shopping Cart"
            />
          </Link>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="bg-white w-3/4 h-full p-6 shadow-lg transform transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-gray-600 absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col space-y-6 mt-16 text-center">
            <li>
              <Link
                to="/"
                className="text-lg font-medium text-gray-800 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="text-lg font-medium text-gray-800 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                MY ORDER
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center justify-center text-lg font-medium text-gray-800 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                <Cart
                  cartIcon={cartIcon}
                  altText="Shopping Cart"
                />
                <span className="ml-2">CART</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
