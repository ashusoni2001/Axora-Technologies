import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ThemeSwitcher from "./components/layout/ThemeSwitcher";
import NeuralCanvas from "./components/background/NeuralCanvas";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Expertise from "./sections/Expertise";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import { usePalette } from "./hooks/usePalette";

function App() {
  const { enabled } = usePalette();

  return (
    <>
      <div className="app-bg" />
      <div className="app-grid" />
      <NeuralCanvas />
      <div className="app-noise" />

      <div className="shell">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Expertise />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>

      {enabled && <ThemeSwitcher />}
    </>
  );
}

export default App;
