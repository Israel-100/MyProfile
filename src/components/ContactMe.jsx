import { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

function ContactMe() {
  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_u3w2c4a", 
        "template_accoyhu", 
        formRef.current,
        "A-uUkfB07mPPnaa1S" 
      )
      .then(
        () => {
          setStatus("Message sent ");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus(" Failed to send. Try again.");
        }
      );
  };

  return (
    <AnimatedSection>
      <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <div className="w-full  bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Me
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold transition-all"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-400">{status}</p>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default ContactMe;
