
import card1 from "../../../Assets/images/card1.png";
import card2 from "../../../Assets/images/card2.png";
import card3 from "../../../Assets/images/card3.png";
import card4 from "../../../Assets/images/card4.png";
import card5 from "../../../Assets/images/card5.png";

import card22 from "../../../Assets/images/card22.png";
import card33 from "../../../Assets/images/card33.png";
import card44 from "../../../Assets/images/card44.png";

import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { motion } from "framer-motion";

interface SlideType {
  title: string;
  color: string;
  icon: string;
  style?: string;
  icon2?: string;
  style2?: string;
}

const slides: SlideType[] = [
  {
    title: "Managing packages and subscriptions",
    color: "bg-[#298883]",
    icon: card1,
    style: "mt-[10px] ml-28 w-24",
    icon2: card1,
    style2: "mt-[10px] ml-28 w-24",
  },
  {
    title: "Comprehensive control panel",
    color: "bg-[#0045B2]",
    icon: card2,
    style: "mt-[17px] ml-[115px] w-24",
    icon2: card22,
    style2: "-mt-[30px] ml-12 w-40",
  },
  {
    title: "Managing social media accounts",
    color: "bg-[#9978E0]",
    icon: card3,
    style: "mt-[17px] ml-[115px] w-24",
    icon2: card33,
    style2: "-mt-[44px] ml-[50px] w-40",
  },
  {
    title: "Search engine optimizations (SEO) and scheduling",
    color: "bg-[#8EA8CF]",
    icon: card4,
    style: "mt-[18px] ml-[115px] w-24",
    icon2: card44,
    style2: "-mt-[30px] ml-12 w-40",
  },
  {
    title: "Create personal profile and generate QR",
    color: "bg-[#B238E1]",
    icon: card5,
    style: "mt-[18px] ml-28 w-24",
    icon2: card5,
    style2: "mt-[18px] ml-28 w-24",
  },
];

const CarouselComponent: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth < 768; // Adjust based on Tailwind breakpoints
  const slidesToShow = isMobile ? 1 : 3;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track the hovered card

  const previousSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (current < slides.length - slidesToShow) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-white py-10">
      <div className="absolute top-0 left-0 h-full w-8 sm:w-10 lg:w-24 bg-gradient-to-r from-white to-transparent z-[10]"></div>

      {/* Right Gradient Overlay */}
      <div className="absolute top-0 right-0 h-full w-8 sm:w-10 lg:w-24 bg-gradient-to-l from-white to-transparent z-[10]"></div>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            //transform: `translateX(-${current * (100 / slidesToShow)}%)`,
            transform: `translateX(-${
              current * (window.innerWidth >= 1024 ? 2 : 15)
            }%)`,
            width: `${(slides.length / slidesToShow) * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${slide.color} ease-in duration-300 rounded-lg w-[215px] h-56 m-2 p-2`}
              onMouseEnter={() => setHoveredIndex(index)} // Set hover state
              onMouseLeave={() => setHoveredIndex(null)} // Clear hover state
              //className={`${slide.color} ease-in duration-300 rounded-lg w-[220px] lg:w-[220px] sm:w-40  h-56 m-2 p-2 `}
            >
              <h3 className="text-white font-semibold text-left p-2 transition-transform duration-300">
                {slide.title}
              </h3>
              {/* <h3 className="text-white font-semibold text-lg">
                {slide.title}
              </h3> */}
              <motion.div
                whileHover={{}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeIn", delay: 0.2 }}
                className=""
              >
                {/* <img
                src={hoveredIndex === index ? slide.icon2 : slide.icon}
                alt="icon"
                  className={`w-24 ${slide.style}`}
                /> */}
                <img
                  src={hoveredIndex === index ? slide.icon : slide.icon}
                  className={`absolute top-36 ease-out duration-[1500ms] ${
                    hoveredIndex === index ? slide.style2 : slide.style
                  } p-1 ${
                    hoveredIndex === index ? "scale-75 rotate-12" : "scale-60"
                  }`}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform z-[30] -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={previousSlide}
          disabled={current === 0}
          className={`text-3xl text-black ${
            current === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          onClick={nextSlide}
          disabled={current >= slides.length - slidesToShow}
          className={`text-3xl text-black ${
            current >= slides.length - slidesToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
