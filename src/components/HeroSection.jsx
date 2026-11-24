import {useEffect,useState} from 'react';
import {ArrowDown,ArrowUpRight,Brain,Building2,Hospital,Stethoscope} from 'lucide-react';
import Scene from './shared/BrainVisualization.jsx';
import ViewSwitcher from './shared/ViewSwitcher.jsx';

const offers = [
  {icon: Brain, group: 'technology', id: 'technology-ai', category: 'Technology', name: 'AI brain imaging', description: 'AI-assisted MRI and CT workflows for structured clinical review.', status: 'Development roadmap'},
  {icon: Brain, group: 'technology', id: 'technology-ar-vr', category: 'Technology', name: 'AR & VR experiences', description: 'Immersive brain visualization for planning, consultation, and medical learning.', status: 'Development roadmap'},
  {icon: Hospital, group: 'systems', id: 'solutions-hms', category: 'SaaS systems', name: 'Hospital management', description: 'A SaaS concept for coordinating hospital operations.', status: 'SaaS model'},
  {icon: Stethoscope, group: 'systems', id: 'solutions-pms', category: 'SaaS systems', name: 'Patient management', description: 'A SaaS concept for organizing patient and care-team workflows.', status: 'SaaS model'},
  {icon: Building2, group: 'systems', id: 'solutions-phms', category: 'SaaS systems', name: 'Pharmacy management', description: 'A SaaS concept for supporting day-to-day pharmacy workflows.', status: 'SaaS model'},
];

const initialTab=()=>['technology','systems',...offers.map(offer=>offer.id)].includes(window.location.hash.slice(1))?'offerings':'overview';

export default function Hero({reduced}){
  const [mode,setMode]=useState(0);
  const [tab,setTab]=useState(initialTab);

  useEffect(()=>{
    const syncTabWithHash=()=>{
      const hash=window.location.hash.slice(1);
      if(['technology','systems',...offers.map(offer=>offer.id)].includes(hash))setTab('offerings');
      else if(hash==='model')setTab('overview');
    };
    window.addEventListener('hashchange',syncTabWithHash);
    return()=>window.removeEventListener('hashchange',syncTabWithHash);
  },[]);

  const handleTabKeyDown=event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    const next=event.key==='Home'?'overview':event.key==='End'?'offerings':tab==='overview'?'offerings':'overview';
    setTab(next);
    document.getElementById(`home-tab-${next}`)?.focus();
  };

  return <section className="hero" id="model">
    <div className="hero-intro">
      <div className="home-tabs" role="tablist" aria-label="Home information" onKeyDown={handleTabKeyDown}>
        <button id="home-tab-overview" type="button" role="tab" aria-selected={tab==='overview'} aria-controls="home-panel-overview" tabIndex={tab==='overview'?0:-1} onClick={()=>setTab('overview')}>Overview</button>
        <button id="home-tab-offerings" type="button" role="tab" aria-selected={tab==='offerings'} aria-controls="home-panel-offerings" tabIndex={tab==='offerings'?0:-1} onClick={()=>setTab('offerings')}>What we offer</button>
      </div>

      <div id="home-panel-overview" className="home-tab-panel" role="tabpanel" aria-labelledby="home-tab-overview" hidden={tab!=='overview'}>
        <p className="section-kicker">Meet AR MEND</p>
        <h1>TECHNOLOGY FOR<br/><em>BETTER HEALTHCARE.</em></h1>
        <p className="home-intro-copy">AR MEND brings together clinical technology and healthcare software to help teams make complex work clearer and more connected.</p>
        <div className="home-purpose-grid">
          <article><span>Our vision</span><p>A future where healthcare teams are empowered by connected, thoughtful technology.</p></article>
          <article><span>Our mission</span><p>To create practical digital tools that support care teams and improve healthcare workflows.</p></article>
        </div>
        <div className="hero-actions">
          <a className="button" href="#viewer">Explore the 3D model <span aria-hidden="true">↗</span></a>
          <a className="secondary-button" href="/contact/">Talk to our team</a>
        </div>
      </div>

      <div id="home-panel-offerings" className="home-tab-panel home-offerings-panel" role="tabpanel" aria-labelledby="home-tab-offerings" hidden={tab!=='offerings'}>
        <p className="section-kicker">Built for healthcare teams</p>
        <h2>What AR MEND offers</h2>
        <p className="home-intro-copy">Explore clinical technology and software concepts designed around healthcare workflows.</p>
        <div className="home-offerings-list">
          {[{id:'technology',title:'Technology'},{id:'systems',title:'SaaS systems'}].map(group=><div className="home-offerings-group" id={group.id} key={group.id}>
            <p className="home-offerings-group-title">{group.title}</p>
            {offers.filter(offer=>offer.group===group.id).map(({icon:Icon,id,category,name,description,status})=><article id={id} key={id}>
              <span className="home-offer-icon" aria-hidden="true"><Icon size={17}/></span>
              <div><small>{category}</small><h3>{name}</h3><p>{description}</p></div>
              <span className="home-offer-status">{status}</span>
            </article>)}
          </div>)}
        </div>
        <div className="hero-actions"><a className="button" href="/contact/">Discuss your needs <ArrowUpRight size={16} aria-hidden="true"/></a></div>
      </div>
    </div>

    <div className="hero-model"><div className="spatial-grid" aria-hidden="true"/><div className="model-orbit" aria-hidden="true"/><div className="hero-model-meta"><span><i className="live-dot"/> LIVE 3D</span><span>FIG. 01 / HUMAN BRAIN</span></div><Scene mode={mode} reduced={reduced} showControls={false}/><ViewSwitcher mode={mode} onChange={setMode}/></div>
    <div className="hero-end"><span>Where AI meets healthcare.</span><a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a></div>
  </section>;
}
