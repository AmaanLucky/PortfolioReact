import { About } from "./components/About/About";
import { BackgroundScene } from "./components/BackgroundScene/BackgroundScene";
import { ClickSparkles } from "./components/CustomCursor/ClickSparkles";
import { Contact } from "./components/Contact/Contact";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { HuntProvider } from "./components/Hunt/Hunt";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ScrollProgress } from "./components/ScrollProgress/ScrollProgress";
import { SectionBand } from "./components/SectionBand/SectionBand";
import { StatsStrip } from "./components/Stats/StatsStrip";

function App() {
  return (
    <HuntProvider>
      <div className="relative w-full min-h-screen overflow-x-clip bg-navy">
        <BackgroundScene />
        <Navbar />
        <Hero />
        <StatsStrip />
        <SectionBand label="About me" />
        <About />
        <SectionBand label="Experience" reverse />
        <Experience />
        <SectionBand label="Projects" />
        <Projects />
        <Contact />
        <ScrollProgress />
        <CustomCursor />
        <ClickSparkles />
      </div>
    </HuntProvider>
  );
}

export default App;
