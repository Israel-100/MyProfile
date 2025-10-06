import SpotlightCard from "../components/SpotlightCard";

function Serve() {

   const cards = [
     {
       title: "Web Design",
       desc: "Beautiful, responsive websites built with React and Tailwind.",
       color: "rgba(82, 39, 255, 0.3)", // purple glow
     },
     {
       title: "App Development",
       desc: "Cross-platform mobile apps using React Native and modern APIs.",
       color: "rgba(255, 159, 252, 0.3)", // pink glow
     },
     {
       title: "UI/UX Strategy",
       desc: "Design systems and interaction patterns for great user experiences.",
       color: "rgba(177, 158, 239, 0.3)", // lavender glow
     },
   ];
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-indigo-400">Services</span>
      </h1>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full ">
        {cards.map((card, index) => (
          <SpotlightCard
            key={index}
            spotlightColor={card.color}
            className="h-52 items-center text-center hover:scale-105 transition-transform duration-500 ease-out "
          >
            <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
            <p className="text-gray-300">{card.desc}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

export default Serve;
