import {ArrowUpRight,Check,Plus} from 'lucide-react';

function ProjectScope() {
  return <section id="project-scope" className="section project-scope">
 <div className="section-heading"><div><p className="eyebrow">WHERE THE PROJECT STANDS</p><h2>Built today.<br /><span>Questions for tomorrow.</span></h2></div><p>Current stage: frontend concept.<br />A working visual experience with a defined scope.</p></div>
 <div className="scope-columns"><div className="scope-column"><span className="scope-label"><Check size={16} /> AVAILABLE IN THIS DEMO</span><ul><li><h3>An interactive model</h3><p>A supplied textured brain with anatomy, wireframe, and neural-style views, with drag rotation, arrow-key controls, and a reset option.</p></li><li><h3>A connected explanation</h3><p>Scroll through the conceptual workflow and explore how AI, AR, and VR could play distinct roles.</p></li><li><h3>A responsive website</h3><p>Mobile navigation, keyboard-accessible controls, and reduced-motion support.</p></li></ul></div>
 <div className="scope-column"><span className="scope-label proposed"><Plus size={16} /> POSSIBLE NEXT STEPS</span><ul><li><h3>Define a research question</h3><p>Choose a specific educational or research use case before selecting datasets, analysis methods, or success criteria.</p></li><li><h3>Prototype the interaction</h3><p>Explore a dedicated AR or VR experience and test whether its spatial controls and explanations are understandable.</p></li><li><h3>Evaluate with intended users</h3><p>Seek feedback on usability, accessibility, and interpretation. Any clinical direction would require separate expertise and validation.</p></li></ul></div></div>
 <div className="scope-invitation"><p>Want to understand the project in more detail?</p><a className="text-link" href="#faq">Read the FAQs <ArrowUpRight size={17} /></a></div>
</section>;
}

export default ProjectScope;
