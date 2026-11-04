import useReducedMotion from './hooks/useReducedMotion.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/HeroSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Uses from './components/UsesSection.jsx';
import FAQ from './components/FAQSection.jsx';
import Contact from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
export default function App(){
 const reduced=useReducedMotion();
 return <><a className="skip-link" href="#model">Skip to content</a><Navbar/><main><Hero reduced={reduced}/><HowItWorks reduced={reduced}/><Uses/><aside className="model-disclaimer" aria-label="About this illustration"><span>A note on the model</span><p>This is an illustrative model. Its colors and points don’t show a diagnosis or an AI finding. <strong>Not medical advice.</strong></p></aside><FAQ/><Contact/></main><Footer/></>;
}
