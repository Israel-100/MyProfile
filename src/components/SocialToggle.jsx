import { useState } from "react";
import { X, Share2, Github, Linkedin, Twitter } from "lucide-react";

export default function SocialToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 z-50">
      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all"
      >
        {open ? <X size={20} /> : <Share2 size={20} />}
      </button>

      {/* Sliding Social Icons Panel */}
      <div
        className={`absolute top-1/2 right-14 transform -translate-y-1/2 
        bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg 
        flex flex-col gap-4 transition-all duration-500 ease-in-out
        ${
          open
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10 pointer-events-none"
        }`}
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 flex items-center gap-2 transition"
        >
          <Github size={20} /> <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 flex items-center gap-2 transition"
        >
          <Linkedin size={20} /> <span>LinkedIn</span>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 flex items-center gap-2 transition"
        >
          <Twitter size={20} /> <span>Twitter</span>
        </a>
      </div>
    </div>
  );
}
