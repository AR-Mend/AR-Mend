import {useState} from 'react';
import {Plus,Brain} from 'lucide-react';

function Applications() {
  const [a, setA] = useState(0);
  const items = [['Neurosurgical planning concepts', 'Explore spatial relationships and potential planning perspectives in a conceptual 3D environment.'], ['Medical education & training', 'Imagine a more tangible way for students to explore anatomy, structures, and spatial relationships.'], ['Neuroscience research', 'Present complex brain-related information through interactive visual exploration.']];
  return <section className="section applications" id="applications"><div><p className="eyebrow">POSSIBLE APPLICATIONS</p><h2>New dimensions.<br /><span>Meaningful possibilities.</span></h2><div className="application-list">{items.map(([title, body], i) => <div key={title}><button aria-expanded={a === i} onClick={() => setA(a === i ? -1 : i)}>{title}<Plus className={a === i ? 'rotated' : ''} size={20} /></button>{a === i && <p>{body}</p>}</div>)}</div></div><div className="application-art"><div className="scan-frame"><Brain size={220} strokeWidth={.6} /><span className="scan-line" /></div><div className="art-label"><span className="status-dot" /> SPATIAL UNDERSTANDING<br /><b>EXPLORING THE NEXT PERSPECTIVE</b></div></div></section>;
}

export default Applications;
