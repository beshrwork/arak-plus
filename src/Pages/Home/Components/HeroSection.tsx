import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="text-white text-left py-10 px-4 sm:px-8">

      <h1 className="text-3xl sm:text-5xl font-semibold" dir="rtl">
         كل ما تحتاجه لبدء مشروعك في سوريا
      </h1>
      <br />
      <h1 className="text-3xl sm:text-5xl font-semibold" >،بوابتك المتكاملة للاستثمار</h1>
      <h1 className="text-3xl sm:text-5xl font-semibold" >
        ،الإقامة، الشحن، التوظيف</h1>
      <br />
      <h1 className="text-3xl sm:text-5xl font-semibold mb-6" dir="rtl">

        مع خدمات شاملة تشمل التراخيص والدعم القانوني والتجاري
      </h1>
      <br />
      <p className="text-sm sm:text-lg mb-10" dir="rtl">
        مع ARAK+، استثمر بثقة في سوريا , نرافقك في كل خطوة، من الفكرة حتى التشغيل.
      </p>
<br />
      <div className="relative flex items-center">
        <motion.div
          whileHover={{ width: "150px" }}
          initial={{ width: " 80px", height: "70px" }}
          transition={{ duration: 0.7 }}
          className="absolute bg-purple-600 h-full rounded-3xl"
        >
          <button className="ml-5 relative z-10 flex items-center gap-2 text-white px-6 py-3 rounded-lg">
            <FaArrowRightLong className="text-white w-5 h-5" />
            <span className="w-12">انضم لنا</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
