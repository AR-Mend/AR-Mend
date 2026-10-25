import {ArrowRight,Scan,Activity,Brain,Box} from 'lucide-react';

function Workflow() {
  return <section id="workflow" className="section workflow"><p className="eyebrow">THE CONCEPTUAL WORKFLOW</p><div className="section-heading"><h2>From data to<br /><span>immersive visualization.</span></h2><p>A connected journey from complex information<br />to an entirely new point of view.</p></div><div className="workflow-grid">{[['Data input', 'Medical imaging and relevant datasets form the conceptual starting point.', Scan], ['AI-assisted analysis', 'Abstract analysis explores patterns and relationships in brain-related data.', Activity], ['3D visualization', 'Information takes shape as a spatial anatomical visualization.', Brain], ['AR/VR exploration', 'Immersive perspectives support education and planning exploration.', Box]].map(([title, body, Icon], i) => <div key={title}><span className="step-number">0{i + 1}<ArrowRight size={17} /></span><Icon size={29} /><h3>{title}</h3><p>{body}</p></div>)}</div></section>;
}

export default Workflow;
