import Hero from "../components/Hero"
import Navbar from "../components/NavBar";
import Serve from "../components/Serve";
import Aboutme from "../components/Aboutme";
import ContactMe from "../components/ContactMe";
import Footer from "../components/footer";


function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <Hero />
      <Serve />
      <Aboutme/>
      <ContactMe/>
      <Footer/>
    </main>
  );
} 

export default Home

