import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mt-20 border-t border-gray-500">
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-4xl pb-6 pt-16 sm:px-6 lg:px-20 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Shopcart and Payments Section */}
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <a href="#" className="text-green-700 text-2xl font-bold">
                  <u>Sho</u>p<u>cart</u>
                </a>
              </div>
              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <p className="py-5 font-bold">Accepted Payments</p>
              <ul className="flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Stripe</span>
                    <img
                      src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png"
                      alt="Stripe"
                      className="h-10 p-2 w-20 border rounded"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Visa</span>
                    <img
                      src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png"
                      alt="Visa"
                      className="h-10 p-2 w-20 border rounded"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Mastercard</span>
                    <img
                      src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png"
                      alt="Mastercard"
                      className="h-10 p-2 w-20 border rounded"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Gpay</span>
                    <img
                      src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png"
                      alt="Google Pay"
                      className="h-10 p-2 w-20 border rounded"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Department, Services, Help, and Contact Section */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Department</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Electronics & Gadget
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Toys
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Sneakers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Travel Accessories
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Organic Grocery
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Furniture
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Our Services
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Gift Card
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Shipping & Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Order Pickup
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Help</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Shopcart Help
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Returns
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Track Orders
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <span className="text-gray-700 transition group-hover:text-gray-700/75">
                        Live Chat
                      </span>
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Contact Us</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a.82.82 0 00.22.1h.04c.08.02.16.03.25.03s.17-.01.25-.03h.04a.82.82 0 00.22-.1L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700 transition hover:text-gray-700/75">
                        email@shopcart.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 21.5h.01M12 21.5h.01M14 21.5h.01M16 21.5h.01M18 21.5h.01M10 20h4M10 18h4M12 16c-3.866 0-7-3.134-7-7 0-2.994 2.179-5.813 5-6.72 0-.562 1.343-.28 1 1-1.791 1.525-2.525 3.71-2 5.72a6.974 6.974 0 001.472 2.618 6.985 6.985 0 002.618 1.472c2.01.526 4.195-.209 5.72-2 .28-.343.562 1 1 1 1.482 2.82-1.728 5-4.72 5-2.075 0-3.755-.77-5.17-2.024L10 18M21 17h-.01"
                        />
                      </svg>
                      <span className="text-gray-700 transition hover:text-gray-700/75">
                        (234) 555-0100
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright and Social Links Section */}
          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="text-center text-sm text-gray-500">
                &copy; {currentYear}. Shopcart. All rights reserved.
              </p>
              <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:gap-8">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.04c-5.493 0-9.961 4.469-9.961 9.961 0 4.98 3.657 9.116 8.437 9.86v-6.987h-2.54v-2.873h2.54v-2.18c0-2.507 1.493-3.89 3.777-3.89 1.093 0 2.24.196 2.24.196v2.461h-1.262c-1.244 0-1.627.775-1.627 1.565v1.848h2.773l-.444 2.873h-2.329v6.987c4.78-.745 8.437-4.881 8.437-9.86 0-5.492-4.469-9.961-9.961-9.961z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c1.204 0 1.357 0 1.836.01.479.009.803.04 1.144.173.367.146.68.34.98.64.3.3.494.613.64.98.133.34.164.665.173 1.144.009.48.01.632.01 1.836s0 1.357-.01 1.836c-.009.479-.04.803-.173 1.144a2.673 2.673 0 01-.64.98 2.675 2.675 0 01-.98.64c-.34.133-.665.164-1.144.173-.479.009-.632.01-1.836.01s-1.357 0-1.836-.01c-.479-.009-.803-.04-1.144-.173a2.675 2.675 0 01-.98-.64 2.673 2.673 0 01-.64-.98c-.133-.34-.164-.665-.173-1.144-.009-.479-.01-.632-.01-1.836s0-1.357.01-1.836c.009-.479.04-.803.173-1.144.146-.367.34-.68.64-.98.3-.3.613-.494.98-.64.34-.133.665-.164 1.144-.173.48-.009.632-.01 1.836-.01zm0-2.163c-1.223 0-1.38 0-1.86.01-.482.011-.89.044-1.305.197-.523.191-.98.443-1.45.914a4.613 4.613 0 00-.914 1.45c-.153.415-.186.823-.197 1.305-.011.481-.01.638-.01 1.861s0 1.38.01 1.86c.011.482.044.89.197 1.305a4.615 4.615 0 00.914 1.45 4.613 4.613 0 001.45.914c.415.153.823.186 1.305.197.481.011.638.01 1.861.01s1.38 0 1.86-.01c.482-.011.89-.044 1.305-.197.523-.191.98-.443 1.45-.914a4.615 4.615 0 00.914-1.45c.153-.415.186-.823.197-1.305.011-.481.01-.638.01-1.86s0-1.38-.01-1.86c-.011-.482-.044-.89-.197-1.305a4.613 4.613 0 00-.914-1.45 4.615 4.615 0 00-1.45-.914c-.415-.153-.823-.186-1.305-.197-.481-.011-.638-.01-1.86-.01zm0 5.838a4.61 4.61 0 100 9.22 4.61 4.61 0 000-9.22zm0 7.583a2.973 2.973 0 110-5.946 2.973 2.973 0 010 5.946zm6.406-10.251a1.086 1.086 0 110-2.172 1.086 1.086 0 010 2.172z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.633 7.897c.013.178.013.356.013.535 0 5.456-4.152 11.744-11.744 11.744-2.335 0-4.505-.687-6.332-1.876.323.038.655.063.99.063a8.3 8.3 0 005.141-1.772 4.143 4.143 0 01-3.867-2.873c.6.1 1.195.1 1.78-.075a4.136 4.136 0 01-3.319-4.065v-.051c.56.311 1.21.499 1.885.52a4.128 4.128 0 01-1.844-3.44c0-.75.197-1.447.543-2.045a11.725 11.725 0 008.499 4.312c-.056-.3-.085-.607-.085-.917a4.13 4.13 0 017.139-2.825 8.195 8.195 0 002.606-.995 4.125 4.125 0 01-1.816 2.284 8.24 8.24 0 002.377-.641 8.8 8.8 0 01-2.067 2.135z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
