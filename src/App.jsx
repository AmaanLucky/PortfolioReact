import { About } from "./components/About/About";
import { BackgroundScene } from "./components/BackgroundScene/BackgroundScene";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ScrollProgress } from "./components/ScrollProgress/ScrollProgress";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip bg-navy">
      <BackgroundScene />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScrollProgress />
    </div>
  );
}

export default App;
