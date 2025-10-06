import React from 'react'

function Footer() {
  return (
    <footer
      className="w-full shadow-md border-t border-gray-800 py-5"
      style={{ border: "none" }}
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center text-center text-white">
        <h1 className="text-lg sm:text-xl font-semibold leading-tight">
          ADENIJI | APATA ISRAEL © 2025 <br className="sm:hidden" />
          <span className="text-indigo-400">React + Tailwind</span>
        </h1>
      </div>
    </footer>
  );
}

export default Footer
