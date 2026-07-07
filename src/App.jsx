import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ThemeSwitcher from "./components/layout/ThemeSwitcher";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import NeuralCanvas from "./components/background/NeuralCanvas";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Expertise from "./sections/Expertise";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import { THEME_PALETTE_ENABLED } from "./config";

function App() {
  return (
    <ErrorBoundary>
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

      {THEME_PALETTE_ENABLED && <ThemeSwitcher />}
    </ErrorBoundary>
  );
}

export default App;
