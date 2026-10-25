import {useEffect,useRef,useState} from 'react';
import {gsap,ScrollTrigger} from '../lib/animation.js';
import Scene from './shared/BrainVisualization.jsx';

const stages = ['Anatomy', 'Regional view', 'Spatial annotations', 'Wireframe', 'Neural network', 'Immersive environment', 'A new perspective'];

function Story({
  reduced
}) {
  const ref = useRef(),
    [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced || innerWidth < 768) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        end: '+=2400',
        pin: true,
        scrub: true,
        onUpdate: s => setStep(Math.min(6, Math.floor(s.progress * 7)))
      });
    }, ref);
    return () => ctx.revert();
  }, [reduced]);
  return <section className="story" id="story" ref={ref}><div className="story-top"><p className="eyebrow">A CLOSER LOOK</p><span>SCROLL TO CHANGE YOUR PERSPECTIVE</span></div><div className="story-scene"><Scene mode={step} reduced={reduced} /></div><div className="story-caption"><span className="eyebrow">0{step + 1} / 07</span><h2>{stages[step]}<span className="accent">.</span></h2><p>{['Begin with the whole. Explore a three-dimensional interpretation of the brain.', 'Selected regions reveal another layer of spatial understanding.', 'Conceptual guide lines bring context to complex structures.', 'Look beneath the surface. Discover the geometry of a new perspective.', 'See an abstract web of connections and possibilities.', 'Imagine anatomical information within an immersive planning space.', 'The future of medical technology begins with how we see it.'][step]}</p></div><div className="story-steps">{stages.map((s, i) => <button key={s} onClick={() => setStep(i)} aria-label={'Show ' + s} aria-pressed={i === step}><span /></button>)}</div></section>;
}

export default Story;
