import { motion } from "framer-motion";

import card1 from "../../../Assets/images/card1.png";
import card3 from "../../../Assets/images/card3.png";
import card4 from "../../../Assets/images/card4.png";
import card5 from "../../../Assets/images/card5.png";

import circleW from "../../../Assets/images/circleW.png";
import circleB from "../../../Assets/images/circleB.png";
import circleR from "../../../Assets/images/circleR.png";

interface itemsPrpos {
  itemNode: any;
}
export const items: itemsPrpos[] = [
  {
    itemNode: (
      <motion.div
        className="bg-[#298883] ease-in duration-300 rounded-lg w-[215px] h-56 m-2 p-2"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <h3 dir="rtl" className="text-white font-semibold text-right p-2">
          خدمات الفيزا وتنظيم الرحلات للمستثمرين
        </h3>
        <div className="relative w-full h-full">
          <motion.img
            src={card1}
            className="absolute top-10 right-0 ease-out duration-[1500ms] mt-[20px] -mr-2 w-24"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    ),
  },
  {
    itemNode: (
      <motion.div
        className="bg-[#0045B2] ease-in duration-300 rounded-lg w-[215px] h-56 m-2 p-2"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.h3
          dir="rtl"
          className="text-white font-semibold text-right p-2 ease-out duration-[700ms]"
          variants={{ hover: { scale: 1.1 } }}
        >
          حلول الإقامة والنقل داخل سوريا
        </motion.h3>
        <div className="relative w-full h-full">
          <motion.img
            src={circleW}
            className="absolute right-0 ease-out duration-[700ms] mt-[20px] mr-7 w-16"
            variants={{
              rest: { scale: 1, rotate: 0, marginRight: "28px", top: "60px" },
              hover: {
                scale: 1.3,
                rotate: -50,
                marginRight: "48px",
                top: "26px",
              },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.img
            src={circleR}
            className="absolute right-0 ease-out duration-[700ms] mt-[20px] -mr-2 w-8"
            variants={{
              rest: { scale: 1, marginRight: "-8px", rotate: 0, top: "56px" },
              hover: {
                scale: 1.2,
                rotate: 45,
                marginRight: "0px",
                top: "24px",
              },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.img
            src={circleB}
            className="absolute right-0 ease-out duration-[700ms] mt-[40px] -mr-2 w-10"
            variants={{
              rest: { scale: 1, top: "72px" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    ),
  },
  {
    itemNode: (
      <motion.div
        className="bg-[#9978E0] ease-in duration-300 rounded-lg w-[215px] h-56 m-2 p-2"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.h3
          dir="rtl"
          className="text-white font-semibold text-right p-2 ease-out duration-[700ms] transition-transform"
          variants={{ hover: { scale: 1.1 } }}
        >
          استخراج التراخيص والدعم القانوني
        </motion.h3>
        <div className="relative w-full h-full">
          <motion.img
            src={card3}
            className="absolute right-0 ease-out duration-[700ms] mt-[20px] -mr-2 w-24"
            variants={{
              rest: { scale: 1, rotate: 0, marginRight: "-8px", top: "56px" },
              hover: {
                scale: 1.3,
                rotate: 15,
                marginRight: "8px",
                top: "36px",
              },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    ),
  },
  {
    itemNode: (
      <motion.div
        className="bg-[#8EA8CF] ease-in duration-300 rounded-lg w-[215px] h-56 m-2 p-2"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.h3
          dir="rtl"
          className="text-white font-semibold text-right p-2 ease-out duration-[700ms]"
          variants={{ hover: { scale: 1.1 } }}
        >
          إعداد دراسات الجدوى وتحليل المخاطر
        </motion.h3>
        <div className="relative w-full h-full">
          <motion.img
            src={card4}
            className="absolute right-0 ease-out duration-[700ms] mt-[20px] -mr-2 w-24"
            variants={{
              rest: { scale: 1, marginRight: "-8px", top: "40px" },
              hover: { scale: 1.3, marginRight: "7px", top: "29px" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    ),
  },
  {
    itemNode: (
      <motion.div
        className="bg-[#B238E1] ease-in duration-300 rounded-lg w-[215px] h-56 m-2 p-2"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <h3 dir="rtl" className="text-white font-semibold text-right p-2">
          تأمين كوادر وتقديم برامج تدريبية متخصصة
        </h3>
        <div className="relative w-full h-full">
          <motion.img
            src={card5}
            className="absolute top-10 right-0 ease-out duration-[1500ms] mt-[20px] -mr-2 w-24"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    ),
  },
];
