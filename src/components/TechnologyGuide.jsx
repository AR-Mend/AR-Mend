import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
const technology=[
 {name:'Artificial intelligence',short:'AI',title:'Making analysis easier to examine.',intro:'The concept pairs brain-related information with computational analysis that a qualified reviewer could inspect in context.',example:'A research interface that shows an analysis result beside its source data, with its assumptions and limitations.',boundary:'No AI model, scan processing, or diagnostic output is implemented on this website.',next:'A research prototype would need a defined task, permitted data, and independent evaluation.'},
 {name:'Augmented reality',short:'AR',title:'Placing anatomy in context.',intro:'The concept considers how a digital anatomical model and its annotations might sit within a physical learning environment.',example:'An educational overlay with labels attached to the area being discussed, rather than a separate diagram.',boundary:'The demonstration contains visual annotations. It does not access a camera, track a room, or align anatomy to a person.',next:'A dedicated prototype would need to test alignment, device support, and annotation clarity.'},
 {name:'Virtual reality',short:'VR',title:'Giving the viewer a spatial role.',intro:'The concept explores an immersive setting where a learner could examine anatomy from several viewpoints and scales.',example:'A guided walkthrough that connects a spatial model to an explanation of the structures being explored.',boundary:'This is a 3D browser experience. It is not a headset application, surgical simulator, or clinical planning tool.',next:'A dedicated prototype would need to address comfort, navigation, accessibility, and user evaluation.'}
];
export default function TechnologyGuide(){
 const[selected,setSelected]=useState(0),current=technology[selected];
 return <div id="technology-guide" className="technology-explainer">
  <div className="technology-picker" role="group" aria-label="Choose a technology to learn about">{technology.map((item,i)=><button key={item.short} aria-pressed={selected===i} aria-controls="technology-explanation" onClick={()=>setSelected(i)}><span>{item.short}</span>{item.name}<ArrowUpRight size={18}/></button>)}</div>
  <article id="technology-explanation" className="technology-explanation" aria-live="polite" aria-atomic="true"><span className="eyebrow">{current.name}</span><h3>{current.title}</h3><p>{current.intro}</p><dl><div><dt>A possible use</dt><dd>{current.example}</dd></div><div><dt>In this demo</dt><dd>{current.boundary}</dd></div></dl><p className="research-consideration">{current.next}</p></article>
 </div>;
}
