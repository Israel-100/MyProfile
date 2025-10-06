
import profilePic from "/public/me6.jpg";
import { Github, Linkedin, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";


function Aboutme() {
  return (
    <AnimatedSection>
      <section className="min-h-screen flex items-center justify-center bg-black text-white ">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-indigo-500/30">
          {/* 🧑 Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-indigo-500 shadow-lg">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl"></div>
          </div>

          {/* 📝 Text Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">
              Hi, I'm Israel Adeniji
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a{" "}
              <span className="text-indigo-400 font-medium">
                Frontend Developer
              </span>
              with a passion for crafting interactive, responsive web
              experiences using
              <span className="text-teal-400 font-medium"> React</span> and
              <span className="text-pink-400 font-medium"> Tailwind CSS</span>.
              I love transforming ideas into elegant, functional digital
              designs.
            </p>

            {/* 🌐 Social Links */}
            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-110 shadow-md"
              >
                <Github size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-110 shadow-md"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-110 shadow-md"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Aboutme
