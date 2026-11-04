import {ArrowRight,Brain} from 'lucide-react';

function PerspectiveSection() {
  return <section id="perspective" className="section perspective">
 <div className="perspective-art" role="img" aria-label="Illustration of layered views coming together around a brain model">
  <div className="slice-stack"><span /><span /><span /><span /><Brain size={155} strokeWidth={.75} /></div>
  <div className="perspective-coordinate">FORM <i /> SPACE <i /> CONTEXT</div>
  <span className="illustration-caption">CONCEPTUAL SPATIAL VIEW</span>
 </div>
 <div className="perspective-copy"><p className="eyebrow">WHY A NEW PERSPECTIVE?</p><h2>Beyond a flat image.<br /><span>Into a spatial idea.</span></h2>
  <p>AR MEND asks a simple question: what could change when we explore anatomical information as something we can move around, rather than only look at?</p>
  <p>Our demonstration starts with a textured brain model. Switch its surface to wireframe to reveal its geometry, then explore an abstract point cloud. Each view offers a different way to discuss the same object.</p>
  <dl className="perspective-points"><div><dt>Explore form</dt><dd>Observe the model from a changing viewpoint and consider how its visible structures relate in space.</dd></div><div><dt>Add context</dt><dd>Conceptual labels and guide lines suggest how a future experience might connect an explanation to a location.</dd></div><div><dt>Keep meaning clear</dt><dd>The model is illustrative. Its colors, points, and annotations do not show a patient’s condition or an AI finding.</dd></div></dl>
  <a className="text-link" href="#story">Explore the different views <ArrowRight size={16} /></a>
 </div>
</section>;
}

export default PerspectiveSection;
