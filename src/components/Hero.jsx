import { useState, useEffect } from "react";
import img from "../assets/me3.jpg";
import LiquidEther from "./LiquidEther";

function Hero() {
  const skills = [
    "Developer",
    "UI/UX Designer",
    "Freelancer",
    "Tech Enthusiast",
  ];
  const [index, setIndex] = useState(0);

  // 🔁 Cycle through skills every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* 🌀 Background effect */}
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        speed={1.2}
        blur={50}
        glow={0.4}
        blobCount={6}
      />

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-center md:text-left gap-10 ">
        {/* LEFT SIDE: Text */}
        <div className="animate-zoom">
          <h1 className="text-5xl font-bold text-teal-300">Hi, I am Israel</h1>
          <h2 className="text-4xl mt-4 font-bold text-teal-300">
            I am a{" "}
            <span className="text-blue-400 transition-opacity duration-500">
              {skills[index]}
            </span>
          </h2>
        </div>

        {/* RIGHT SIDE: Image */}
        <div
          className="h-80 w-80 rounded-full shadow-lg border-4 border-teal-500"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 z-[1]"></div>
    </div>
  );
}

export default Hero;
