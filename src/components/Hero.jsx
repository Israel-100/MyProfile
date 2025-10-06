/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import LiquidEther from "./LiquidEther"; // ✅ make sure this path is correct
import img from "../assets/me6.jpg";
import { useState, useEffect } from "react";

function Hero() {
  const skills = ["Web Developer", "UI/UX Designer", "React Developer"];
  const [index, setIndex] = useState(0);

  // 🔄 Cycle through skills every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* 🌀 Animated Background */}
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        speed={1.2}
        blur={50}
        glow={0.4}
        blobCount={6}
      />

      {/* 🌌 Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* 🌟 Main Content */}
      <div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 text-center md:text-left gap-10 z-[2]">
        {/* ✨ Left: Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal-300">
            Hi, I am Israel
          </h1>
          <h2 className="text-2xl md:text-4xl mt-4 font-bold text-teal-300">
            I am a{" "}
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-blue-400"
            >
              {skills[index]}
            </motion.span>
          </h2>
        </motion.div>

        {/* 🪞 Right: Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="h-60 w-60 md:h-80 md:w-80 rounded-full shadow-lg border-4 border-teal-500 bg-center bg-cover"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></motion.div>
      </div>
    </div>
  );
}

export default Hero;
