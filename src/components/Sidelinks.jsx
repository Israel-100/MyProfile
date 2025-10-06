import { useState } from "react";
import { Home, User, Settings, ChevronRight, ChevronLeft } from "lucide-react";

function Sidelinks() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <User size={20} />, label: "About" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full flex items-center z-10">
      {/* Sidebar */}
      <div
        className={`h-full bg-gray-900 text-white flex flex-col justify-between py-6 transition-all duration-300 ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        <div className="flex flex-col items-start gap-6 px-4">
          {links.map((link, index) => (
            <button
              key={index}
              className="flex items-center gap-3 hover:text-indigo-400"
            >
              {link.icon}
              {isOpen && <span>{link.label}</span>}
            </button>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-full py-3 border-t border-gray-700 hover:bg-gray-800"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Sidelinks;
