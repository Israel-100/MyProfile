import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1>ADENIJI | APATA ISRAEL</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
