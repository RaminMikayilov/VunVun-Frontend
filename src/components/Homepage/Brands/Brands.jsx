import React from "react";
import Carousel from "../Carousel/Carousel";
import {brands} from "../../../datas/brands";

const Brands = () => {
  return (
    <div className="py-12 md:py-16 flex items-center justify-center">
      <Carousel>
        {brands.map((brand, index) => (
          <div key={index} className="inline-block p-4 md:p-8">
            <img src={brand} alt={brand} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
