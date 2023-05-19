import React from "react";
import WorkCard from "./WorkCard";
import worksBg from "../../../assets/Homepage/Works/works-bg.png";

const background = {
  backgroundImage: `url(${worksBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  height: "500px",
  width: "100%",
};

const worksData = [
  {
    id: 1,
    title: "Title",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 2,
    title: "Title",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 3,
    title: "Title",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 4,
    title: "Title",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 5,
    title: "Title",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];

const Works = () => {
  return (
    <div className="pb-28 pt-12 md:py-12 px-4 sm:px-8 md:px-16 ">
      {/* heading */}
      <div className="text-center w-[600px] max-w-[90vw] mx-auto py-8">
        <h1 className="text-2xl font-bold p-3">Necə işləyirik?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          consequuntur vitae neque, commodi nostrum voluptas illum? Dolores
          unde.
        </p>
      </div>

      {/* body */}
      <div
        style={background}
        className="p-2 md:p-3 flex flex-col justify-between gap-y-5 sm:py-16 md:py-2 sm:gap-y-12 md:gap-y-20 lg:gap-y-28 xl:gap-y-32"
      >
        <div className="flex justify-between flex-col sm:flex-row items-center sm:items-start gap-y-5 sm:gap-y-0">
          <WorkCard {...worksData[0]} />
          <WorkCard {...worksData[1]} />
        </div>
        <div className="sm:py-12 flex flex-col gap-y-5 sm:gap-y-0">
          <div className="flex justify-between flex-col sm:flex-row items-center sm:items-start gap-y-5">
            <WorkCard {...worksData[2]} />
            <WorkCard {...worksData[3]} />
          </div>
          <div className="mx-auto sm:py-8 md:py-10 lg:py-6 xl:py-3">
            <WorkCard {...worksData[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
