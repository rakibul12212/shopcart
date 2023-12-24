import React from "react";

import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/abstract-glitch-background-404-royalty-free-illustration-1679362904.jpg"
        alt=""
        className="w-full p-20 animate-glitch"
      />
      {/* <div className="hero-content text-center text-neutral-content">
<Link className='p-5' to='/'><button className="flex w-full justify-center rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">back to home</button></Link>
</div> */}
      <div className="hero-content text-center text-neutral-content pb-10">
        <Link
          to="/"
          className="relative px-5 py-2 font-medium text-white group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
