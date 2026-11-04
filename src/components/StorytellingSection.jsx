import {useEffect,useRef,useState} from 'react';
import {gsap,ScrollTrigger} from '../lib/animation.js';
import Scene from './shared/BrainVisualization.jsx';
const stages=[['Anatomy','A textured surface view of the supplied brain model.'],['Regional view','A color treatment that illustrates a selected-region concept.'],['Spatial annotations','Guide lines suggest how context could be attached to a location.'],['Wireframe','The mesh reveals the geometry behind the visible surface.'],['Neural network','A point-based abstraction. These points do not represent measured neural activity.'],['Immersive environment','A spatial reference plane introduces the idea of an immersive setting.'],['A new perspective','Different views of one model, each with its own purpose and limits.']];
export default function Story({reduced}){
 const ref=useRef(null),[step,setStep]=useState(0);
 useEffect(()=>{
  if(reduced)return;
  const media=gsap.matchMedia();
  media.add('(min-width: 1100px) and (min-height: 780px)',()=>{
   const trigger=ScrollTrigger.create({trigger:ref.current,start:'top 84px',end:'+=1000',pin:true,scrub:true,onUpdate:self=>setStep(Math.min(6,Math.floor(self.progress*7)))});
   return()=>trigger.kill();
  });
  return()=>media.revert();
 },[reduced]);
 return <section id="story" className="section story" data-nav="features" ref={ref}>
  <div className="study-visual"><div className="specimen-head"><span>VIEW {String(step+1).padStart(2,'0')} / 07</span><span>MODEL STUDY</span></div><div className="story-scene"><Scene mode={step} reduced={reduced}/></div><p className="study-caption">A visual model. Not patient-specific anatomy.</p></div>
  <div className="study-content"><p className="eyebrow">LOOK CLOSER</p><h2>The same anatomy.<br/><em>Another reading.</em></h2><p>Move through the views to see how representation changes what we notice.</p><div className="story-steps" role="group" aria-label="Model study views">{stages.map(([title],i)=><button key={title} aria-label={'Show '+title} aria-pressed={step===i} onClick={()=>setStep(i)}><span>{String(i+1).padStart(2,'0')}</span>{title}</button>)}</div><p className="study-description" aria-live="polite">{stages[step][1]}</p></div>
 </section>;
}
