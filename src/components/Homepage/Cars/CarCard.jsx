import React from "react";
import { Link } from "react-router-dom";
import { BsSpeedometer } from "react-icons/bs";

const CarCard = ({id, name, img, price }) => {
  return (
    <div className="h-[380px] w-[200px] md:w-[300px] md:h-[420px] inline-block border-2 border-gray-200 rounded-md p-3 hover:shadow-xl transition duration-300 ease-in-out">
      <h2 className="text-lg font-semibold">{name}</h2>
      <img src={img} alt={name} className="py-6 md:py-10 w-full h-[40%] md:h-[58%]" />
      <p className="text-sm text-btn-orange font-extrabold">{price} AZN/gün</p>
      <div className="flex items-center justify-between py-5">
        <span className="text-sm md:text-md text-gray25 flex items-center">
          <BsSpeedometer />
          10 km
        </span>
        <span className="text-sm md:text-md text-gray25 flex items-center">
          <BsSpeedometer />
          10 km
        </span>
        <span className="text-sm md:text-md text-gray25 flex items-center">
          <BsSpeedometer />
          10 km
        </span>
      </div>
      {/* buttons */}
      <div className="flex flex-col md:flex-row justify-evenly gap-3">
        <Link to={`/cars/${id}`}>
          <button className="px-3 py-2 text-btn-orange font-bold hover:bg-btn-orange hover:text-white duration-300 border-2 border-btn-orange rounded-md">
            Daha ətraflı
          </button>
        </Link>
        <button className="px-3 py-2 bg-btn-orange text-white font-bold hover:bg-white hover:text-btn-orange duration-300 border-2 border-btn-orange rounded-md">
          İcarəyə götür
        </button>
      </div>
    </div>
  );
};

export default CarCard;
