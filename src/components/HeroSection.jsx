import {useState} from 'react';
import {ArrowDown,ArrowLeft,ArrowRight} from 'lucide-react';
import LinkButton from './shared/LinkButton.jsx';
import Scene from './shared/BrainVisualization.jsx';

const views=[['Anatomy',0],['Wireframe',3],['Neural',4]];
export default function Hero({reduced}){
  const [mode,setMode]=useState(0);
  const [rotation,setRotation]=useState(0);
  return <section className="hero" id="home">
    <div className="hero-copy">
      <p className="eyebrow">AR MEND / SPATIAL MEDICINE</p>
      <h1>A clearer view<br/>of the human<br/><em>brain.</em></h1>
      <p className="hero-description">Exploring how brain anatomy, AI-assisted analysis, and AR/VR could meet in a shared spatial view.</p>
      <div className="hero-actions"><LinkButton href="#story">Explore the model</LinkButton><a className="text-link" href="#about">The approach <ArrowDown size={16}/></a></div>
      <p className="hero-scope">An interactive research concept.<br/>Built for exploration, not clinical use.</p>
    </div>
    <figure className="hero-visual">
      <div className="specimen-head"><span>HUMAN BRAIN</span><span>INTERACTIVE STUDY</span></div>
      <div className="scene"><Scene mode={mode} reduced={reduced} rotation={rotation}/></div>
      <div className="specimen-controls"><div className="view-control" role="group" aria-label="Brain viewing mode">{views.map(([label,value])=><button key={label} aria-pressed={mode===value} onClick={()=>setMode(value)}>{label}</button>)}</div><div className="rotate-controls"><button aria-label="Rotate model left" onClick={()=>setRotation(rotation-.35)}><ArrowLeft size={16}/></button><button aria-label="Rotate model right" onClick={()=>setRotation(rotation+.35)}><ArrowRight size={16}/></button></div></div>
      <figcaption><span>Digital anatomy. A different point of view.</span><span>3D / CONCEPT MODEL</span></figcaption>
    </figure>
  </section>;
}
