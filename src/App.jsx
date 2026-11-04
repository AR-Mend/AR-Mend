import useReducedMotion from './hooks/useReducedMotion.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/HeroSection.jsx';
import About from './components/AboutSection.jsx';
import Features from './components/FeaturesSection.jsx';
import Story from './components/StorytellingSection.jsx';
import Workflow from './components/WorkflowSection.jsx';
import Applications from './components/UsesSection.jsx';
import FAQ from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';
export default function App(){const reduced=useReducedMotion();return <><a className="skip-link" href="#model">Skip to content</a><Navbar/><main><Hero reduced={reduced}/><About/><Features/><Story reduced={reduced}/><Workflow/><Applications/><FAQ/></main><Footer/></>}
