import React from "react";
import { useState } from "react";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide == 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide == 3 ? 0 : (nxt) => nxt + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden mt-24 ">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] flex h-full transition-transform duration-700"
        >
          <img
            src={data[0]}
            alt="imgOne"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[1]}
            alt="imgTwo"
            className="w-screen h-full object-cover"
            loading="lazy"
          />
          <img
            src={data[2]}
            alt="imgThree"
            className="w-screen h-full object-cover"
            loading="lazy"
          />
          <img
            src={data[3]}
            alt="imgFour"
            className="w-screen h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="bttns-container flex justify-center gap-2 w-full top-[80%] absolute">
          <div>
            <AiOutlineDoubleLeft
              className=" h-10 w-10 shadow-md p-1 rounded-md opacity-70 hover:cursor-pointer hover:bg-gray-700 duration-200 hover:text-white"
              onClick={prevSlide}
            />
          </div>
          <div>
            <AiOutlineDoubleRight
              className="h-10 w-10 shadow-md p-1 rounded-md opacity-70 hover:cursor-pointer hover:bg-gray-700 duration-200 hover:text-white"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
