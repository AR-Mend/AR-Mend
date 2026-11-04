import {useEffect,useState,useRef} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import Brand from './shared/Brand.jsx';
import nav from '../data/navigation.js';

const labels={Home:'Overview',About:'Approach',Features:'Technology',Workflow:'Process'};
export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState('home');
  const toggle=useRef(null);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting)setActive(entry.target.dataset.nav||entry.target.id);
    }),{rootMargin:'-18% 0px -52% 0px'});
    document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
    return()=>observer.disconnect();
  },[]);
  useEffect(()=>{
    if(!open)return;
    document.querySelector('#main-navigation a')?.focus();
    const escape=event=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}};
    const resize=()=>{if(innerWidth>1000)setOpen(false);};
    addEventListener('keydown',escape);addEventListener('resize',resize);
    return()=>{removeEventListener('keydown',escape);removeEventListener('resize',resize);};
  },[open]);
  return <header className="site-header">
    <Brand/>
    <nav id="main-navigation" aria-label="Main navigation" className={open?'nav open':'nav'}>
      {nav.map(name=><a key={name} href={'#'+name.toLowerCase()} aria-current={active===name.toLowerCase()?'location':undefined} onClick={()=>setOpen(false)}>{labels[name]||name}</a>)}
    </nav>
    <a href="#contact" className="nav-cta">Discuss the project <ArrowUpRight size={16}/></a>
    <button ref={toggle} className="menu" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>;
}

