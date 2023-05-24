import React from "react";
import "./carousel.css";
import { useRef } from "react";

// icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Carousel = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -=
      scrollRef.current.offsetWidth > 400
        ? scrollRef.current.offsetWidth / 1.8
        : scrollRef.current.offsetWidth / 1.1;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft +=
      scrollRef.current.offsetWidth > 400
        ? scrollRef.current.offsetWidth / 1.8
        : scrollRef.current.offsetWidth / 1.1;
  };

  return (
    <div className="flex items-center relative">
      <span
        onClick={scrollLeft}
        className="border-2 border-btn-orange text-btn-orange p-2 bg-white bg-opacity-70 rounded-[3px] cursor-pointer absolute left-0 z-[10] block"
      >
        <HiOutlineChevronLeft className="text-xl md:text-4xl" />
      </span>
      <div className="px-8 md:px-16 overflow-hidden">
        <div
          className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth space-x-2 md:space-x-4 scrollbar-hide"
          ref={scrollRef}
        >
          {children}
        </div>
      </div>
      <span
        onClick={scrollRight}
        className="border-2 border-btn-orange text-btn-orange p-2 bg-white bg-opacity-70 rounded-[3px] cursor-pointer absolute right-0 z-[10] block"
      >
        <HiOutlineChevronRight className="text-xl md:text-4xl" />
      </span>
    </div>
  );
};

export default Carousel;
