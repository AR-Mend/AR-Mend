import {ArrowUpRight,Brain,Layers3,MoveUpRight} from 'lucide-react';

function About() {
  return <section id="about" className="section about"><div><p className="eyebrow">OUR VISION</p><h2>Bridging medical<br />intelligence and<br /><span>immersive technology.</span></h2></div><div className="about-copy"><p className="lead">A different way to see.<br />A new way to understand.</p><p>AR MEND explores the intersection of artificial intelligence, human anatomy, and spatial computing. We’re imagining how complex medical information could become more intuitive, tangible, and accessible.</p><p>From brain analysis concepts to immersive surgical-planning exploration, our vision starts with a better perspective.</p><a className="text-link" href="#workflow">Follow the concept <ArrowUpRight size={17} /></a></div><div className="vision-strip">{[[Brain, 'Intelligent analysis', 'Exploring patterns in medical data.'], [Layers3, 'Immersive visualization', 'Turning complexity into spatial understanding.'], [MoveUpRight, 'Future-ready thinking', 'Connecting research with new possibilities.']].map(([Icon, title, body]) => <div key={title}><Icon /><h3>{title}</h3><p>{body}</p></div>)}</div></section>;
}

export default About;
