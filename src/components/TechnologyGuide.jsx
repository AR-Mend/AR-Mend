import {useState} from 'react';
import {Brain,Scan,Box} from 'lucide-react';

const technology = [{
  name: 'Artificial intelligence',
  short: 'AI',
  icon: Brain,
  title: 'From information to questions.',
  intro: 'The AI concept is about exploring how computational analysis might help make complex brain-related information easier to examine and explain.',
  scenario: 'Imagine a research interface that places an analysis result beside its source information, so a qualified reviewer can inspect both the result and its context.',
  boundary: 'This website does not run an AI model, process scans, detect conditions, or produce diagnostic results. Neural graphics are illustrative.',
  consideration: 'A future research prototype would need a defined task, appropriate data permissions, documented limitations, and independent evaluation.'
}, {
  name: 'Augmented reality',
  short: 'AR',
  icon: Scan,
  title: 'Spatial information, in context.',
  intro: 'The AR concept considers how digital anatomy and explanatory overlays could be placed alongside a physical environment.',
  scenario: 'Imagine an educational session where a learner views a spatial model with labels that remain attached to the area being discussed.',
  boundary: 'The browser demo shows conceptual annotations. It does not use a camera, track a room, register anatomy to a person, or provide a live AR overlay.',
  consideration: 'A future AR prototype would need to address spatial alignment, interaction design, device constraints, and the clarity of its annotations.'
}, {
  name: 'Virtual reality',
  short: 'VR',
  icon: Box,
  title: 'A space to explore together.',
  intro: 'The VR concept imagines anatomy inside an immersive environment where the viewpoint becomes part of the learning experience.',
  scenario: 'Imagine a guided educational walkthrough in which a learner explores a model at different scales and follows a clearly explained sequence of views.',
  boundary: 'This is an interactive 3D website, not a headset-based VR application. No surgical simulation, haptic feedback, or clinical planning tool is integrated.',
  consideration: 'A future VR prototype would need to consider comfort, navigation, accessibility, device support, and review by intended users.'
}];

function TechnologyGuide() {
  const [selected, setSelected] = useState(0);
  const current = technology[selected];
  return <section id="technology-guide" className="section technology-guide">
 <div className="section-heading"><div><p className="eyebrow">UNDERSTAND THE IDEAS</p><h2>Three technologies.<br /><span>Different roles.</span></h2></div><p>Go beyond the labels.<br />See the idea, an example, and its limits.</p></div>
 <div className="technology-explainer"><div className="technology-picker" role="group" aria-label="Choose a technology to learn about">{technology.map(({
          name,
          short,
          icon: Icon
        }, i) => <button key={short} type="button" aria-pressed={selected === i} aria-controls="technology-explanation" onClick={() => setSelected(i)}><span className="technology-initial">{short}</span><span>{name}</span><Icon size={19} /></button>)}</div>
  <article id="technology-explanation" className="technology-explanation" aria-live="polite" aria-atomic="true"><span className="eyebrow">{current.name.toUpperCase()}</span><h3>{current.title}</h3><p>{current.intro}</p><div className="example-scenario"><span>AN ILLUSTRATIVE SCENARIO</span><p>{current.scenario}</p></div><div className="technology-boundary"><h4>What this website demonstrates</h4><p>{current.boundary}</p></div><p className="research-consideration">{current.consideration}</p></article>
 </div>
</section>;
}

export default TechnologyGuide;
