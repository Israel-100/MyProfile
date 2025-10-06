import Hero from "../components/Hero"
import Navbar from "../components/NavBar";
import Serve from "../components/Serve";
import SocialToggle from "../components/SocialToggle";
import Aboutme from "@/components/Aboutme";


function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <Hero />

        <SocialToggle />
      
      <Serve />
      <Aboutme/>
    </main>
  );
} 

export default Home

