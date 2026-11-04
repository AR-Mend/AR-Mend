import {useState} from 'react';
import {motion} from 'framer-motion';
import {ArrowRight,ArrowDown} from 'lucide-react';
import LinkButton from './shared/LinkButton.jsx';
import Scene from './shared/BrainVisualization.jsx';

function Hero({
  reduced
}) {
  const [mode, setMode] = useState(0);
  return <section className="hero" id="home"><div className="hero-grid" /><div className="hero-copy"><motion.div initial={reduced ? false : {
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .8
      }}><p className="eyebrow"><span className="status-dot" /> ADVANCING NEUROTECHNOLOGY</p><h1>SEE THE BRAIN.<br />REIMAGINE<br /><span>WHAT’S POSSIBLE.</span></h1><p className="hero-description">Exploring AI-assisted brain analysis and immersive AR/VR surgical-planning concepts through a new generation of medical technology experiences.</p><div className="hero-actions"><LinkButton href="#features">Explore the technology</LinkButton><a className="text-link" href="#about">Discover our vision <ArrowRight size={16} /></a></div></motion.div><div className="hero-footnote"><span>AI-ASSISTED INSIGHT</span><i /><span>HUMAN-CENTERED EXPLORATION</span></div></div><div className="hero-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="scene"><Scene mode={mode} reduced={reduced} /></div><div className="visual-top"><span className="crosshair">+</span> NEURAL VISUALIZATION <span className="accent">LIVE 3D</span></div><div className="annotation annotation-one"><span>CEREBRAL CORTEX</span><i /></div><div className="annotation annotation-two"><i /><span>SPATIAL EXPLORATION</span></div><div className="visual-bottom"><span>FIG. 01 / HUMAN BRAIN<br /><b>ANATOMICALLY INSPIRED MODEL</b></span><span className="coordinates">X 0.24<br />Y 1.08<br />Z 0.62</span></div><div className="view-control" aria-label="Brain viewing mode">{['Anatomy', 'Wireframe', 'Neural'].map((x, i) => <button key={x} onClick={() => setMode(i === 0 ? 0 : i === 1 ? 3 : 4)} aria-pressed={mode === (i === 0 ? 0 : i === 1 ? 3 : 4)}>{x}</button>)}</div></div><a href="#about" className="scroll-cue"><span><ArrowDown size={14} /></span> SCROLL TO EXPLORE</a><span className="hero-index">A NEW PERSPECTIVE ON MEDICINE — 01</span></section>;
}

export default Hero;
