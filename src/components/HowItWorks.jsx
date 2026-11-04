import {useEffect,useRef,useState} from 'react';
import Scene from './shared/BrainVisualization.jsx';
import ViewSwitcher from './shared/ViewSwitcher.jsx';
const steps=[
 {title:'Form',mode:0,body:'Start with the textured surface. Rotate the brain to see its folds and overall shape from another angle.'},
 {title:'Structure',mode:3,body:'Remove the texture. The wireframe reveals the mesh that gives this model its shape—not the structures inside the brain.'},
 {title:'Points',mode:4,body:'See the surface as a point cloud. These points describe the model’s form, not measured activity or neural connections.'},
 {title:'Context',mode:2,body:'Add a visual reference. Surface labels stay attached to the model as you rotate, helping you discuss a particular area.'}
];
export default function HowItWorks({reduced}){
 const root=useRef(),lastStep=useRef(0),[active,setActive]=useState(0),[mode,setMode]=useState(0);
 useEffect(()=>{
  let frame;
  const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{
   const nodes=[...root.current.querySelectorAll('[data-step]')];
   const target=window.innerWidth<768?window.innerHeight*.76:window.innerHeight*.55;
   const next=nodes.reduce((best,node,i)=>Math.abs(node.getBoundingClientRect().top+node.getBoundingClientRect().height/2-target)<Math.abs(nodes[best].getBoundingClientRect().top+nodes[best].getBoundingClientRect().height/2-target)?i:best,0);
   if(lastStep.current!==next){lastStep.current=next;setActive(next);setMode(steps[next].mode)}
  })};
  update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update);
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',update);removeEventListener('resize',update)};
 },[]);
 const choose=i=>{lastStep.current=i;setActive(i);setMode(steps[i].mode)};
 return <section className="how-section" id="how-it-works" ref={root}><div className="section-intro"><p className="section-kicker">How it works</p><h2>Take a closer look.</h2><p>Four ways to read the same model. Scroll to change the view, or choose a step.</p></div><div className="guided-layout"><div className="guided-viewer" id="viewer"><div className="viewer-heading"><span>Explore the model</span><span className="viewer-mode" aria-live="polite">{active===3&&mode===2?'Context':mode===3?'Wireframe':mode===4?'Points':'Anatomy'}</span></div><ViewSwitcher mode={mode} onChange={setMode}/><div className="guided-canvas"><Scene mode={mode} reduced={reduced}/></div><p className="viewer-help">Drag to rotate · Arrow keys to turn · + / − to zoom</p></div><div className="model-steps">{steps.map((step,i)=><article key={step.title} data-step={i} className={active===i?'model-step is-active':'model-step'}><button type="button" aria-pressed={active===i} onClick={()=>choose(i)}><span className="step-index">0{i+1}</span><h3>{step.title}</h3></button><p>{step.body}</p></article>)}</div></div></section>;
}
