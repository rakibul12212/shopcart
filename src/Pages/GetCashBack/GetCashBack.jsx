import React from "react";
import "./GetCashBack.css";

const GetCashBack = () => {
  return (
    <div className="mt-20">
      <div className="background py-40 pr-4 pl-4 sm:pr-10 sm:pl-96 xl:pr-64">
        <div className="bg-green-950 p-8 sm:p-16">
          <p className="font-bold text-2xl sm:text-6xl w-full sm:w-75% items-center tracking-wide text-white">
            Get 12% Cash Back On $200
          </p>
          <p className="sm:text-xl w-full sm:w-full py-4 sm:py-8 text-white">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <p className="button bg-transparent border hover:bg-red-950 hover:text-white hover:border-none">
            Learn more
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetCashBack;
