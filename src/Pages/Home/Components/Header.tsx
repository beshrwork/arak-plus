import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo3 from "../../../Assets/images/ARAK_DARK_BACK.png";
import Logo2 from "../../../Assets/images/ARAK_WHITE_BACK.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        // Change background after scrolling 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close dropdown after selecting an item
  };

  return (
    <>
      {/* <div className="z-50 bg-[#020A16] w-full flex justify-center items-center"> */}
      <div
        className={`fixed top-0 z-[70] ${
          isScrolled ? "bg-white" : "bg-[#020A16]"
        } bg-[#020A16] w-full flex justify-center items-center`}
      >
        <header className="w-5/6 bg-transparent py-4 px-6 flex justify-between items-center">
          <button
            className={`sm:hidden ${
              isScrolled ? "text-black" : "text-white"
            } text-2xl`}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div className="text-white text-2xl font-bold">
            <Link to="/">
            
              <img
                src={`${isScrolled ? Logo2 : Logo3}`}
                className="w-20"
                alt="Logo"
              />
            </Link>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } hidden sm:static top-full left-0 w-full sm:w-auto sm:flex flex-col sm:flex-row items-center ${
              isScrolled ? "text-black" : "text-white"
            } sm:bg-transparent sm:gap-7 sm:translate-y-0`}
          >
            <a
              href="#our-services"
              className="block sm:inline hover:underline py-2 sm:py-0"
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </a>
          </nav>

          
        </header>
      </div>

      {isOpen && (
        <ul
          className={`${
            isScrolled ? "bg-white" : "bg-[#020A16]"
          } grid fixed z-[80] mt-0 ${
            isScrolled ? "text-black" : "text-white"
          } sm:hidden justify-center text-center w-full gap-4 p-4`}
        >
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link to="/about">Privacy Policy</Link>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToSection("our-services")}
          >
            Our Services
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToSection("contact-us")}
          >
            Contact With Us
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
