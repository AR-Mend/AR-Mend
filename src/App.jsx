import useReducedMotion from './hooks/useReducedMotion.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/HeroSection.jsx';
import About from './components/AboutSection.jsx';
import Features from './components/FeaturesSection.jsx';
import Story from './components/StorytellingSection.jsx';
import Workflow from './components/WorkflowSection.jsx';
import FAQ from './components/FAQSection.jsx';
import ContactPage from './components/ContactPage.jsx';
import LegalPage from './components/LegalPage.jsx';
import Footer from './components/Footer.jsx';

export default function App(){
  const reduced=useReducedMotion();
  const path=window.location.pathname.replace(/\/+$/,'')||'/';
  if(path==='/contact')return <ContactPage/>;
  if(path==='/privacy-policy')return <LegalPage type="privacy"/>;
  if(path==='/terms-and-conditions')return <LegalPage type="terms"/>;
  return <><a className="skip-link" href="#model">Skip to content</a><Navbar/><main><Hero reduced={reduced}/><About/><Features/><Story reduced={reduced}/><Workflow/><FAQ/></main><Footer/></>;
}
