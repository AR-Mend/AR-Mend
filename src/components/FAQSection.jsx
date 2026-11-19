import {Plus} from 'lucide-react';

const faqs = [
 ['What is AR MEND?','AR MEND is a platform that combines AI-assisted brain-imaging analysis with augmented and virtual reality for clinical support, medical education and patient communication.'],
 ['What do the different views show?','The textured view shows the surface appearance, wireframe shows the surface mesh, and the point view renders surface points. The point view does not represent measured brain activity or an AI finding.'],
 ['How does AR MEND support teams?','Its project scope includes a secure collaboration layer where clinicians can discuss, validate and finalize diagnostic and surgical plans.'],
 ['How can I explore the brain model?','The hero brain rotates slowly on its own. Use Anatomy, Wireframe and Points to change its appearance. In the full brain viewer, drag or use the arrow keys to rotate, use +/− to zoom, and select Reset view to restore the starting angle and 100% zoom.'],
 ['Can I use the viewer on mobile?','Yes. The model presentation adapts to smaller screens. Use the stage buttons to select a view and the zoom buttons to inspect it.'],
 ['Can I run the platform from this website?','This website is a marketing presentation with an interactive 3D viewer. It does not currently offer scan uploads or an interface for submitting data to the platform.']
];

function FAQ() {
  return <section id="faq" className="faq-section"><div><p className="section-kicker">FAQ</p><h2>A few things<br/> to know.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<Plus size={18} /></summary><p>{a}</p></details>)}</div></section>;
}

export default FAQ;
