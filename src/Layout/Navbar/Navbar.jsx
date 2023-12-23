import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="nav-topber flex justify-center bg-green-800 py-2 text-white font-inter text-sm leading-5 ">
        <div className="container">
          <div className="topbar-content flex justify-center gap-x-40">
            <div className="contact-content flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="contact-img w-5 h-5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <div className="contact-number">+001234567890</div>
            </div>
            <div id="button" className="topber-left-menu flex">
              <div className="text-block-6">
                Get 50% Off on Selected Items&nbsp; &nbsp;| &nbsp;&nbsp;
                <a href="#">
                  {" "}
                  <u>Shop Now</u>
                </a>
              </div>
            </div>
            <div className="topber-menu flex gap-10">
              <div className="dropdown flex">
                <div>
                  <p className="dropbtn">Eng &nbsp;</p>
                </div>
                <div className="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div id="myDropdown" className="dropdown-content">
                  <a href="#">Bangla</a>
                  <a href="#">Arabic</a>
                  <a href="#">Urdu</a>
                </div>
              </div>
              <div className="dropdown flex">
                <div>
                  <p className="dropbtn">Location &nbsp;</p>
                </div>
                <div className="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <div id="myDropdown" className="dropdown-content">
                  <a href="#">Dhaka</a>
                  <a href="#">India</a>
                  <a href="#">Usa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white p-4">
        <div className="container mx-auto lg:flex lg:items-center lg:justify-between lg:gap-4">
          <div className="flex justify-between">
            <div className="text-green-900 text-2xl font-bold" id="logo">
              <a href="#">ShopCart</a>
            </div>

            {/* Mobile Toggler */}
            <div
              className="mobile-toggler cursor-pointer block lg:hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`mobile-menu lg:hidden ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <a href="#" className="block py-2">
              Category
            </a>
            <a href="#" className="block py-2">
              Deals
            </a>
            <a href="#" className="block py-2">
              What&apos;s New
            </a>
            <a href="#" className="block py-2">
              Delivery
            </a>
            {/* Add more mobile menu items as needed */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-between gap-8">
            <div className="relative group  text-xl text-gray-500">
              <a href="#">Category</a>
              <div className="absolute hidden bg-white text-gray-800 shadow-md mt-2 py-2 px-4 rounded-md group-hover:block">
                <a href="#" className="block py-1">
                  Category 1
                </a>
                <a href="#" className="block py-1">
                  Category 2
                </a>
                <a href="#" className="block py-1">
                  Category 3
                </a>
              </div>
            </div>
            <div>
              <a href="#" className="font-medium text-xl text-gray-500">
                Deals
              </a>
            </div>
            <div>
              <a href="#" className="font-medium text-xl text-gray-500">
                Whats&apos;s New
              </a>
            </div>
            <div>
              <a href="#" className="font-medium text-xl text-gray-500">
                Delivery
              </a>
            </div>
          </div>

          {/* Search Input  */}
          <div className="hidden lg:flex border-2 border-gray-300  rounded-full">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full p-2  rounded-full px-5"
            />
            <button className="bg-white text-gray-800 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>

          {/* Account and Cart  */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div>
                <a href="#" className="font-medium text-xl text-gray-500">
                  Account
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
              <div>
                <a href="#" className="font-medium text-xl text-gray-500">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      ;
    </>
  );
};

export default Navbar;
