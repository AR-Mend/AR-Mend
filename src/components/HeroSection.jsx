import {useState} from 'react';
import Scene from './shared/BrainVisualization.jsx';
import ViewSwitcher from './shared/ViewSwitcher.jsx';
export default function Hero({reduced}){
 const [mode,setMode]=useState(0);
 return <section className="hero" id="model"><div className="hero-intro"><div><p className="section-kicker">AR MEND / by BLOCK-UP</p><h1>Explore the human<br/>brain in <em>3D.</em></h1></div><div className="hero-description"><p>Rotate it, strip it to a wireframe, or see it as a point cloud. One model, three ways to look at it.</p><a className="button" href="#viewer">Open the viewer <span aria-hidden="true">↗</span></a></div></div><div className="hero-model"><div className="hero-model-meta"><span>Human brain</span><span>Interactive 3D model</span></div><Scene mode={mode} reduced={reduced} showControls={false}/><ViewSwitcher mode={mode} onChange={setMode}/></div><div className="hero-end"><span>Where AI meets healthcare.</span><a href="#how-it-works">Scroll to explore <span aria-hidden="true">↓</span></a></div></section>;
}
