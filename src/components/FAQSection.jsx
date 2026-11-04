import {Plus} from 'lucide-react';

const faqs = [
 ['What is AR MEND?','AR MEND is a working model. This website introduces it through an interactive 3D brain presentation, a guided walkthrough and different visual views.'],
 ['How can I explore the brain model?','The hero brain rotates slowly on its own. Use Anatomy, Wireframe and Points to change its appearance. In the full brain viewer, drag or use the arrow keys to rotate, use +/− to zoom, and select Reset view to restore the starting angle and 100% zoom.'],
 ['What do the different views show?','The textured view shows the surface appearance, wireframe shows the surface mesh, and the point view renders surface points. The point view does not represent measured brain activity or an AI finding.'],
 ['Can I use the viewer on mobile?','Yes. The model presentation adapts to smaller screens. Use the stage buttons to select a view and the zoom buttons to inspect it.'],
 ['Can I run the model from this website?','This website is a marketing presentation with an interactive 3D viewer. It does not currently offer scan uploads or an interface for submitting data to the underlying model.']
];

function FAQ() {
  return <section id="faq" className="faq-section"><div><p className="section-kicker">FAQ</p><h2>A few things<br/> to know.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<Plus size={18} /></summary><p>{a}</p></details>)}</div></section>;
}

export default FAQ;
