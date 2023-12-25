import "./WPopularProdect.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const WPopularProdect = () => {
  return (
    <div className="container ">
      <div>
        <p className="text-4xl py-20 font-bold text-start">
          Weekly Popular Products
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <a href="#" className="group relative block  overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 bg-slate-200 rounded-2xl"
                />

                <div className="relative bg-white">
                  <div className="flex justify-between pt-5">
                    <h3 className=" text-lg font-bold text-gray-900">
                      HomePod mini
                    </h3>
                    <p className="mt-1 text-lg font-semi-bold text-gray-700">
                      <sup>$</sup> 239<sup>.00</sup>
                    </p>
                  </div>
                  <div>
                    <p className="text-base tracking-wide mt-2">
                      Table with air purifier strained veneer/black
                    </p>
                  </div>
                  <div className="rating">
                    <input value="5" name="rating" id="star5" type="radio" />
                    <label htmlFor="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio" />
                    <label htmlFor="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio" />
                    <label htmlFor="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio" />
                    <label htmlFor="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio" />
                    <label htmlFor="star1"></label>
                  </div>

                  <form className="mt-4">
                    <button className="block w-1/3 rounded-full  border border-black p-3 text-sm font-medium transition hover:bg-green-900 hover:text-white hover:border-none">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="#" className="group relative block  overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 bg-slate-200 rounded-2xl"
                />

                <div className="relative  bg-white ">
                  <div className="flex justify-between pt-5">
                    <h3 className=" text-lg font-bold text-gray-900">
                      Base Camp Duffel M
                    </h3>
                    <p className="mt-1 text-lg font-semi-bold text-gray-700">
                      <sup>$</sup> 159<sup>.00</sup>
                    </p>
                  </div>
                  <div>
                    <p className="text-base tracking-wide mt-2">
                      Table with air purifier,stained veneer/black
                    </p>
                  </div>
                  <div className="rating">
                    <input value="5" name="rating" id="star5" type="radio" />
                    <label htmlFor="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio" />
                    <label htmlFor="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio" />
                    <label htmlFor="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio" />
                    <label htmlFor="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio" />
                    <label htmlFor="star1"></label>
                  </div>
                  <form className="mt-4">
                    <button className="block w-1/3 rounded-full  border border-black p-3 text-sm font-medium transition hover:bg-green-900 hover:text-white hover:border-none">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="#" className="group relative block  overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 bg-slate-200 rounded-2xl"
                />

                <div className="relative  bg-white ">
                  <div className="flex justify-between pt-5">
                    <h3 className=" text-lg font-bold text-gray-900">
                      Toe e Medium
                    </h3>
                    <p className="mt-1 text-lg font-semi-bold text-gray-700">
                      <sup>$</sup> 239<sup>.00</sup>
                    </p>
                  </div>
                  <div>
                    <p className="text-base tracking-wide mt-2">
                      Canvas, geniune leather
                    </p>
                  </div>
                  <div className="rating">
                    <input value="5" name="rating" id="star5" type="radio" />
                    <label htmlFor="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio" />
                    <label htmlFor="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio" />
                    <label htmlFor="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio" />
                    <label htmlFor="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio" />
                    <label htmlFor="star1"></label>
                  </div>
                  <form className="mt-4">
                    <button className="block w-1/3 rounded-full  border border-black p-3 text-sm font-medium transition hover:bg-green-900 hover:text-white hover:border-none">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <a href="#" className="group relative block  overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e74b769109fd2f245a_tomford%20watch-min.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 bg-slate-200 rounded-2xl"
                />

                <div className="relative  bg-white ">
                  <div className="flex justify-between pt-5">
                    <h3 className=" text-lg font-bold text-gray-900">
                      Watch 8
                    </h3>
                    <p className="mt-1 text-lg font-semi-bold text-gray-700">
                      <sup>$</sup> 109<sup>.00</sup>
                    </p>
                  </div>
                  <div>
                    <p className="text-base tracking-wide mt-2">
                      Selfie mode and selfie mirror, Macro mode
                    </p>
                  </div>
                  <div className="rating">
                    <input value="5" name="rating" id="star5" type="radio" />
                    <label htmlFor="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio" />
                    <label htmlFor="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio" />
                    <label htmlFor="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio" />
                    <label htmlFor="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio" />
                    <label htmlFor="star1"></label>
                  </div>
                  <form className="mt-4">
                    <button className="block w-1/3 rounded-full  border border-black p-3 text-sm font-medium transition hover:bg-green-900 hover:text-white hover:border-none">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <a href="#" className="group relative block  overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png"
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 bg-slate-200 rounded-2xl"
                />

                <div className="relative  bg-white ">
                  <div className="flex justify-between pt-5">
                    <h3 className=" text-lg font-bold text-gray-900">
                      HomePod Mini
                    </h3>
                    <p className="mt-1 text-lg font-semi-bold text-gray-700">
                      <sup>$</sup> 239<sup>.00</sup>
                    </p>
                  </div>
                  <div>
                    <p className="text-base tracking-wide mt-2">
                      Table with air purifier strained veneer/black
                    </p>
                  </div>
                  <div className="rating">
                    <input value="5" name="rating" id="star5" type="radio" />
                    <label htmlFor="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio" />
                    <label htmlFor="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio" />
                    <label htmlFor="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio" />
                    <label htmlFor="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio" />
                    <label htmlFor="star1"></label>
                  </div>
                  <form className="mt-4">
                    <button className="block w-1/3 rounded-full  border border-black p-3 text-sm font-medium transition hover:bg-green-900 hover:text-white hover:border-none">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WPopularProdect;
