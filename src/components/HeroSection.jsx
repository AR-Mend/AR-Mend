import {useState} from 'react';
import Scene from './shared/BrainVisualization.jsx';
import ViewSwitcher from './shared/ViewSwitcher.jsx';

export default function Hero({reduced}){
 const [mode,setMode]=useState(0);
 return <section className="hero" id="model"><div className="hero-intro"><p className="section-kicker">Meet AR MEND.</p><h1>SPATIAL INSIGHT.<br/><em>FOR THE BRAIN.</em></h1><div className="hero-description"><p>AR MEND brings AI-assisted brain imaging, augmented reality and virtual reality into one platform for clinical teams, students and patient conversations.</p><div className="hero-actions"><a className="button" href="#viewer">Launch viewer <span aria-hidden="true">→</span></a><a className="secondary-button" href="#features">Explore capabilities</a></div></div></div><div className="hero-model"><div className="spatial-grid" aria-hidden="true"/><div className="model-orbit" aria-hidden="true"/><div className="hero-model-meta"><span><i className="live-dot"/> LIVE 3D</span><span>FIG. 01 / HUMAN BRAIN</span></div><Scene mode={mode} reduced={reduced} showControls={false}/><ViewSwitcher mode={mode} onChange={setMode}/></div><div className="hero-end"><span>Where AI meets healthcare.</span><a href="#about">Scroll to explore ↓</a></div></section>;
}
