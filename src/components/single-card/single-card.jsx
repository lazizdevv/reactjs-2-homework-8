import React from "react";
import { Link } from "react-router-dom";

export const SingleCard = ({ img, name, title, price, description }) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="border-2 flex flex-wrap w-full lg:w-9/12 justify-center gap-7 py-20 px-5 rounded-lg shadow-lg relative">
          <img
            className="border-2 rounded-lg max-w-[350px] w-full h-fit bg-cover bg-center  hover:scale-110 transition-all cursor-zoom-in"
            src={img}
            alt="product-img"
          />
          <div className="h-fit w-full flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{name}</h1>
            <h1 className="text-2xl font-medium">{title}</h1>
            <h2 className="text-5xl font-mono font-extrabold">{"$" + price}</h2>
            <p className="text-2xl font-medium text-gray-500 w-full overflow-y-auto">
              {description}
            </p>
          </div>

          <Link to={"/"}>
            <button className="py-1 px-4 bg-blue-400 rounded-s-3xl rounded-e-md text-white font-bold absolute left-5 top-5">
              go back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
