import {MotionConfig} from 'framer-motion';
import useReduced from './hooks/useReducedMotion.js';
import useLenis from './hooks/useLenis.js';
import useSectionReveals from './hooks/useSectionReveals.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/HeroSection.jsx';
import About from './components/AboutSection.jsx';
import Features from './components/FeaturesSection.jsx';
import Story from './components/StorytellingSection.jsx';
import Workflow from './components/WorkflowSection.jsx';
import Applications from './components/ApplicationsSection.jsx';
import Contact from './components/ContactSection.jsx';
import FAQ from './components/FAQSection.jsx';
import ProjectScope from './components/ProjectScope.jsx';
import TechnologyBar from './components/TechnologyBar.jsx';

export default function App(){
  const reduced=useReduced();
  useLenis(reduced);
  useSectionReveals(reduced);
  return <MotionConfig reducedMotion="user">
    <a className="skip-link" href="#about">Skip to content</a>
    <Navbar/>
    <main>
      <Hero reduced={reduced}/>
      <TechnologyBar/>
      <About/>
      <Story reduced={reduced}/>
      <Features/>
      <Workflow/>
      <Applications/>
      <ProjectScope/>
      <FAQ/>
      <Contact/>
    </main>
    <Footer/>
  </MotionConfig>;
}
