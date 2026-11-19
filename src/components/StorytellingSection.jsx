import {useEffect,useRef,useState} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import {gsap,ScrollTrigger} from '../lib/animation.js';
import Scene from './shared/BrainVisualization.jsx';


const stages = ['Anatomy', 'Regional view', 'Spatial annotations', 'Wireframe', 'Surface points', 'Immersive environment', 'View comparison'];

function Story({
  reduced
}) {
  const ref = useRef(),
    [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.matchMedia();
    ctx.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        end: '+=2400',
        pin: true,
        scrub: true,
        onUpdate: s => setStep(Math.min(6, Math.floor(s.progress * 7)))
      });
    });
    return () => ctx.revert();
  }, [reduced]);
  return <section className="story" id="story" ref={ref}><div className="story-top"><p className="eyebrow">A CLOSER LOOK</p><span>SCROLL TO CHANGE YOUR PERSPECTIVE</span></div><button className="story-arrow story-arrow-previous" type="button" onClick={() => setStep(current => (current + stages.length - 1) % stages.length)} aria-label="Show previous perspective"><ChevronLeft size={24} aria-hidden="true"/></button><button className="story-arrow story-arrow-next" type="button" onClick={() => setStep(current => (current + 1) % stages.length)} aria-label="Show next perspective"><ChevronRight size={24} aria-hidden="true"/></button><div id="viewer" className="story-scene"><Scene mode={step} reduced={reduced} /></div><div className="story-caption"><span className="eyebrow">0{step + 1} / 07</span><h2>{stages[step]}<span className="accent">.</span></h2><p>{['Begin with the whole. Explore a three-dimensional interpretation of the brain.', 'A different surface tint helps distinguish a second presentation of the same model.', 'Labeled surface landmarks show how notes can stay connected to a 3D object.', 'Look beneath the surface. Discover the geometry of a new perspective.', 'See an abstract point rendering of the model’s surface.', 'A floor grid and spatial frame place the whole model inside a spatial workspace.', 'Compare the textured surface and its wireframe geometry side by side.'][step]}</p></div><div className="story-steps">{stages.map((s, i) => <button key={s} onClick={() => setStep(i)} aria-label={'Show ' + s} aria-pressed={i === step}><span /></button>)}</div></section>;
}

export default Story;
