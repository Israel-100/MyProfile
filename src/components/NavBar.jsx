import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-white text-lg md:text-xl font-semibold tracking-wider">
          ADENIJI | APATA ISRAEL
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-300">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-black/90 backdrop-blur-lg shadow-lg transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 mt-10 text-lg text-gray-300">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
