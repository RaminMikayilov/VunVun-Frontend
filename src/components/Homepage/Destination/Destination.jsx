import React from "react";

const destinationsCards = ["Bakı", "Gəncə", "Sumqayıt"];

const Destination = () => {
  const destinationCardsUI = destinationsCards.map((ui, id) => {
    return (
      <div
        key={id}
        className="w-[30%] 768:w-[45%] 450:!w-[80%] h-[150px] flex flex-col items-center justify-center gap-y-6 border-border-color border-[1px] rounded-[5px] py-6 px-8 hover:border-btn-orange"
      >
        <h3 className="font-inter text-[22px] leading-[30px] tracking-[-0.01em] font-bold text-btn-orange">
          {ui}
        </h3>
      </div>
    );
  });

  return (
    <section className="mt-[70px] flex flex-col gap-y-10">
      <center className="flex flex-col gap-y-2">
        <h1 className="font-inter font-bold text-[32px] leading-[40px] text-text-black">
          Browse by destination
        </h1>
      </center>
      <div className="flex flex-wrap gap-x-4 justify-center gap-y-4">
        {destinationCardsUI}
      </div>
    </section>
  );
};

export default Destination;
