import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "Home" },
    { name: "About Us", path: "AboutUs" },
    { name: "Teams", path: "Teams" },
    { name: "OurWork", path: "OurWork" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 shadow-md transition-colors duration-300 
      ${isScrolled ? "bg-[#982b1c]/95 backdrop-blur-md" : "bg-transparent"}`}
    >
      <figure>
        <img src="/Logo.png" alt="YouBloom Logo" className="h-14 w-14" />
      </figure>

      <div className="hidden sm:block">
        <SearchBar />
      </div>

      {/* Desktop  */}
      <div className="hidden md:flex gap-3 items-center">
        {navItems.map((item) => (
          <button key={item.name} onClick={() => handleScroll(item.path)} className="h-8 px-4 flex items-center rounded-md bg-[#dad4b5] text-black hover:-translate-y-1 hover:bg-[#c9c39e] transform transition">
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu  */}
      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full p-6 bg-[#982b1c]/95 backdrop-blur-md flex flex-col items-center gap-3 py-4 md:hidden shadow-lg">
          {navItems.map((item) => (
            <button key={item.name} onClick={() => handleScroll(item.path)} className="h-10 w-80 flex items-center justify-center rounded-md bg-[#dad4b5] hover:bg-[#c9c39e] hover:-translate-y-1 transform transition">
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
