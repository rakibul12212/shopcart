import React from "react";
import Container from "../../Component/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div className="border-t border-gray-500">
        <footer className="bg-white">
          <div className=" max-w-screen-4xl pb-6 pt-16 ">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Shopcart and Payments Section */}
              <div>
                <div className="flex justify-start text-teal-600 sm:justify-start">
                  <a href="#" className="text-green-700 text-2xl font-bold">
                    <u>Sho</u>p<u>cart</u>
                  </a>
                </div>
                <p className="mt-6 max-w-md text-left leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <p className="py-5 font-bold text-left">Accepted Payments</p>
                <ul className="flex justify-start gap-6 sm:justify-start md:gap-4">
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
              <div className="grid grid-cols-2 gap-8  md:grid-cols-4 lg:col-span-2">
                <div className="text-left sm:text-left">
                  <p className="text-lg font-medium text-gray-900">
                    Department
                  </p>
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
                <div className="text-left sm:text-left">
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
                <div className="text-left sm:text-left">
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
                      <a className="group flex justify-start gap-1.5" href="/">
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
                <div className="text-left sm:text-left">
                  <p className="text-lg font-medium text-gray-900">
                    Contact Us
                  </p>
                  <ul className="mt-8 space-y-4 text-sm">
                    <li>
                      <a
                        className="flex items-center justify-start gap-1.5"
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
                        className="flex items-center justify-start gap-1.5"
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
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-12 text-center text-sm text-gray-500">
              <p>
                &copy; {currentYear} Shopcart. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
};

export default Footer;
