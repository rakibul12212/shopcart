import { useState } from "react";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import Container from "../../Component/Container";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="hidden md:block">
        <div className="bg-green-800 text-white text-sm px-4 py-2 flex justify-center gap-x-16 items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xs" />
            <span>+001234567890</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>Get 50% Off on Selected Items</span>
            <a
              href="#"
              className="underline hover:text-yellow-300 transition duration-200"
            >
              Shop Now
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>Eng</span>
            <FaChevronDown className="text-xs" />
            <span>Location</span>
            <FaChevronDown className="text-xs" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Container>
        <nav className="relative bg-white  py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <h1 className="text-green-700 font-bold text-2xl underline cursor-pointer hover:text-green-600 transition-all duration-200">
                Shopcart
              </h1>
            </div>

            {/* Center Menu & Search (Desktop) */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-6 text-gray-700 font-semibold">
              {/* Category Dropdown (Desktop) */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 hover:text-green-600 hover:scale-105 transition-all duration-200">
                  Category
                  <FaChevronDown className="text-xs" />
                </div>
                {isCategoryDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-1 p-2 rounded-lg">
                    <div className="py-1 hover:text-green-600 cursor-pointer">
                      Category 1
                    </div>
                    <div className="py-1 hover:text-green-600 cursor-pointer">
                      Category 2
                    </div>
                    <div className="py-1 hover:text-green-600 cursor-pointer">
                      Category 3
                    </div>
                  </div>
                )}
              </div>
              <span className="cursor-pointer hover:text-green-600 hover:scale-105 transition-all duration-200">
                Deals
              </span>
              <span className="cursor-pointer hover:text-green-600 hover:scale-105 transition-all duration-200">
                What's New
              </span>
              <span className="cursor-pointer hover:text-green-600 hover:scale-105 transition-all duration-200">
                Delivery
              </span>
              <div className="w-1/3 relative">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none hover:border-green-500 transition"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-6 font-semibold text-gray-700">
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 hover:scale-105 transition-all duration-200">
                <FaUser />
                <span>Account</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 hover:scale-105 transition-all duration-200">
                <FaShoppingCart />
                <span>Cart</span>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 transition-all"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown (Absolute) */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full h-screen bg-white z-50 md:hidden mt-2 px-4 py-4 space-y-3 font-medium text-gray-700">
              {/* Category Dropdown (Mobile) */}
              <div
                className="relative cursor-pointer"
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
              >
                <div className="flex items-center gap-1 hover:text-green-600 transition-all duration-200">
                  Category
                  <FaChevronDown className="text-xs" />
                </div>
                {isCategoryDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-1 p-2 rounded-lg">
                    <div className="py-1 hover:text-green-600 cursor-pointer">
                      Category 1
                    </div>
                    <div className="py-1 hover:text-green-600 cursor-pointer">
                      Category 2
                    </div>
                    <div className="py-1 hover:text-green-600 cursor-pointer">
                      Category 3
                    </div>
                  </div>
                )}
              </div>
              <div className="hover:text-green-600 cursor-pointer transition-all">
                Deals
              </div>
              <div className="hover:text-green-600 cursor-pointer transition-all">
                What's New
              </div>
              <div className="hover:text-green-600 cursor-pointer transition-all">
                Delivery
              </div>
              <div className="pt-2 flex items-center gap-1 cursor-pointer hover:text-green-600 transition-all">
                <FaUser />
                Account
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition-all">
                <FaShoppingCart />
                Cart
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
