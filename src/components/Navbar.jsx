import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/Dashboard" },
    { name: "About Us", path: "/about" },
    { name: "Teams", path: "/teams" },
    { name: "Programs", path: "/OurWork" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 rounded-2xl bg-[#982b1c] h-16 shadow-md">
      <figure>
        <img src="/Logo.png" alt="YouBloom Logo" className="h-14 w-14" />
      </figure>

      <div>
        <SearchBar />
      </div>

      <div className="hidden md:flex gap-3 items-center">
        {navItems.map((item) => (
          <Link key={item.name} to={item.path} className="h-8 px-4 flex items-center rounded-md bg-[#dad4b5] hover:-translate-y-1 transform transition">
            {item.name}
          </Link>
        ))}
      </div>

      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full p-6 rounded-2xl mt-5 bg-[#982b1c] flex flex-col items-center gap-3 py-4 md:hidden">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="h-10 w-80 flex items-center justify-center rounded-md bg-[#dad4b5] hover:-translate-y-1 transform transition" onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
