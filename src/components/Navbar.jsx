import {useEffect,useState} from 'react';
import {Menu,X} from 'lucide-react';
import Brand from './shared/Brand.jsx';
import navigation from '../data/navigation.js';
export default function Navbar(){
 const [open,setOpen]=useState(false),[active,setActive]=useState('model');
 useEffect(()=>{
  let frame;
  const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{
   const marker=window.innerHeight*.26;
   const current=navigation.filter(({id})=>document.getElementById(id)?.getBoundingClientRect().top<=marker).at(-1);
   setActive(current?.id||'model');
  })};
  const escape=e=>{if(e.key==='Escape')setOpen(false)};
  update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update);addEventListener('keydown',escape);
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',update);removeEventListener('resize',update);removeEventListener('keydown',escape)};
 },[]);
 return <header className="site-header"><Brand/><nav id="main-navigation" className={open?'main-nav is-open':'main-nav'} aria-label="Main navigation">{navigation.map(({label,id})=><a key={id} href={'#'+id} aria-current={active===id?'location':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="button header-viewer" href="#viewer">Launch viewer</a><button type="button" className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>;
}
