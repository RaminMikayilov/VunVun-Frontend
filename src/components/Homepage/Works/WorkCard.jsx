import React from "react";
import circle from "../../../assets/Homepage/Works/circle.svg";

const WorkCard = ({ id, title, description }) => {
  return (
    <div className="w-[250px] md:w-[320px] bg-[#F5F5F5] p-3 md:p-4 rounded-md relative">
      <img src={circle} alt="circle" className="absolute -top-7 -left-1 md:-top-5 md:-left-3" />
      <span className="text-btn-orange text-xl font-bold absolute -top-5 left-3 md:-top-3 md:left-1.5">
        {id}
      </span>
      <h2 className="font-bold text-xl pb-2">{title}</h2>
      <p className="text-xs md:text-sm">{description}</p>
    </div>
  );
};

export default WorkCard;
