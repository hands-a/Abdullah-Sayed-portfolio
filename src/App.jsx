import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Stack from './components/sections/Stack';
import Contact from './components/sections/Contact';
import CustomCursor from './components/cursor/CustomCursor';
import GrainOverlay from './components/effects/GrainOverlay';
import Spotlight from './components/effects/Spotlight';
import ScrollProgress from './components/effects/ScrollProgress';
import { useMousePosition } from './hooks/useMousePosition';

// Side-effect component: initialises mouse position CSS vars for spotlight
function SpotlightInit() {
  useMousePosition();
  return null;
}

export default function App() {
  return (
    <>
      {/* ── Global effects ── */}
      <GrainOverlay />
      <Spotlight />
      <ScrollProgress />
      <CustomCursor />
      <SpotlightInit />

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Page content ──
          Section order:
          01 Hero → 02 About → 03 Projects → 04 Experience
          → 05 Education → 06 Skills → 07 Contact
      ── */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
