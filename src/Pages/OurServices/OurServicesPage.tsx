import CarouselComponent from "./Components/Carousel";
//import { slides } from "./Helper";
//import Cards from "../Service/Components/CardContianer"

const OurServicesPage = () => {
  return (
    <div className="bg-[#fff] mx-auto max-h-screen justify-center text-center">
      <h2 className=" text-black text-lg font-bold ">Our services</h2>
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default OurServicesPage;
