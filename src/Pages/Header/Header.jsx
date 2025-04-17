import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
  {
    id: 1,
    productImg:
      "https://plus.unsplash.com/premium_photo-1679456062579-cc90340801db?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    productImg:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    productImg:
      "https://images.unsplash.com/flagged/photo-1590183030142-efad5a97612f?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    productImg:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    productImg:
      "https://plus.unsplash.com/premium_photo-1673758910970-b773f66ab7b6?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    productImg:
      "https://images.unsplash.com/photo-1586277419671-f34cf56500a0?w=600&auto=format&fit=crop&q=60",
  },
];

const Header = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/52/46/25/360_F_252462576_koy7njo9iYx6gUcM26IZcDUs9fMKIKJs.jpg')",
      }}
    >
      <div className=" w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-x-10 lg:gap-x-16 ">
        {/* Left Text Section */}
        <div className="md:w-1/3 w-full space-y-8 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Redefine Your Look with Style
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500">
            Discover the future of fashion with our sleek, modern, and
            comfortable apparel—crafted to empower your unique style,
            confidence, and everyday comfort like never before.
          </p>
          <button id="button">
            <a href="#" className="button">
              shop Now
            </a>
          </button>
        </div>

        {/* Right Product Coverflow Carousel */}
        <div className="md:w-1/2 w-full">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            autoplay={{ delay: 4000 }}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="w-[250px] md:w-[350px] lg:w-[350px] flex justify-center"
              >
                <img
                  src={slide.productImg}
                  alt={`Product ${slide.id}`}
                  className="object-contain max-h-[400px] shadow-lg rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Header;
