import {motion} from 'framer-motion';
import {ArrowUpRight,ArrowRight,Brain,Scan,Box} from 'lucide-react';

function MiniVisual({
  type
}) {
  return <div className={'mini-visual ' + type}>{type === 'network' ? <svg viewBox="0 0 360 190" aria-hidden="true">{Array.from({
        length: 22
      }, (_, i) => {
        let x = 30 + i * 71 % 300,
          y = 25 + i * 47 % 140;
        return <g key={i}><path d={`M${x},${y} L${30 + (i + 3) * 71 % 300},${25 + (i + 3) * 47 % 140}`} /><circle cx={x} cy={y} r={i % 3 === 0 ? 4 : 2} /></g>;
      })}</svg> : <><Brain size={130} strokeWidth={.65} /><span className="mini-ring" /><span className="mini-tag">{type === 'ar' ? 'REGION 04 / OVERLAY' : 'VIRTUAL EXPLORATION'}</span></>}</div>;
}

function Features() {
  return <section className="section" id="features"><div className="section-heading"><div><p className="eyebrow">THE TECHNOLOGY</p><h2>Designed to expand<br /><span>possibilities.</span></h2></div><p>Three perspectives. One connected vision.<br />Explore what medical technology could become.</p></div><div className="feature-grid">{[['network', 'AI-assisted brain analysis', 'Exploring how AI could help interpret brain-related data and make diagnostic concepts easier to visualize.', Brain], ['ar', 'Augmented reality', 'Bringing anatomical information into physical space through conceptual overlays and spatial annotations.', Scan], ['vr', 'Virtual reality planning', 'An immersive perspective on anatomy for medical education, research, and surgical-planning exploration.', Box]].map(([type, title, body, Icon]) => <motion.a whileHover={{
        y: -7,
        rotateX: 2
      }} href="#story" className="feature" key={type}><div className="feature-top"><Icon size={20} /><ArrowUpRight size={19} /></div><MiniVisual type={type} /><h3>{title}</h3><p>{body}</p><span className="feature-link">Explore the concept <ArrowRight size={15} /></span></motion.a>)}</div><p className="concept-note"><span className="status-dot" /> RESEARCH & EXPLORATION · CAPABILITIES SHOWN ARE CONCEPTUAL</p></section>;
}

export default Features;
