import React from "react";
import Carousel from "../Carousel/Carousel";
import { cars } from "../../../datas/cars";
import CarCard from "./CarCard";

const Cars = () => {
  return (
    <div className="py-14">
      {/* heading */}
      <div className="text-center w-[600px] max-w-[90vw] mx-auto py-8">
        <h1 className="text-2xl font-bold p-3">Avtomobillər</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          consequuntur vitae neque, commodi nostrum voluptas illum? Dolores
          unde.
        </p>
      </div>

      {/* cars carousel */}
      <div className="py-6 px-3">
        <Carousel>
          {cars.map((car, index) => (
            <CarCard {...car} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Cars;
