import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhoAreWe from "./components/WhoAreWe";
import Universe from "./components/Universe";
import Glance from "./components/Glance";
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <WhoAreWe />
      <Universe />
      <Glance />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
