import React from "react";
import "./carousel.css";
import { useRef } from "react";

// icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
        className="border-4 p-2 bg-opacity-70 bg-dark-blue text-white rounded-full cursor-pointer absolute left-0 z-[10] block"
      >
        <MdChevronLeft className="text-xl md:text-4xl" />
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
        className="bg-opacity-70 bg-dark-blue text-white border-4 p-2 rounded-full cursor-pointer absolute right-0 z-[10] block"
      >
        <MdChevronRight className="text-xl md:text-4xl" />
      </span>
    </div>
  );
};

export default Carousel;
