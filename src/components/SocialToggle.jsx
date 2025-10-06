import { useState } from "react";
import { X, Share2, Github, Linkedin, Twitter } from "lucide-react";

export default function SocialToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 z-50">
      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-700 transition-all"
      >
        {open ? <X size={20} /> : <Share2 size={20} />}
      </button>

      {/* Social Icons Popup */}
      {open && (
        <div className="absolute top-1/2 right-14 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-xl shadow-lg flex flex-col gap-4 animate-fade-in">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 flex items-center gap-2"
          >
            <Github size={20} /> <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 flex items-center gap-2"
          >
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 flex items-center gap-2"
          >
            <Twitter size={20} /> <span>Twitter</span>
          </a>
        </div>
      )}
    </div>
  );
}
