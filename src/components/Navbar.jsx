import {useEffect,useState} from 'react';
import {Menu,X} from 'lucide-react';
import Brand from './shared/Brand.jsx';
import navigation from '../data/navigation.js';

const normalizePath=path=>path.replace(/\/+$/,'')||'/';

export default function Navbar(){
  const [open,setOpen]=useState(false),[active,setActive]=useState('model');
  const currentPath=normalizePath(window.location.pathname);
  const isHomePage=currentPath==='/';
  const activeGroup=navigation.find(item=>item.pages?.some(page=>normalizePath(page.href)===currentPath))?.id;

  useEffect(()=>{
    const escape=event=>{if(event.key==='Escape')setOpen(false)};
    addEventListener('keydown',escape);
    if(!isHomePage){
      setActive(currentPath==='/contact'?'contact':activeGroup||'');
      return()=>removeEventListener('keydown',escape);
    }
    let frame;
    const update=()=>{
      cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{
        const marker=window.innerHeight*.26;
        const current=navigation.filter(({id,pages})=>!pages&&document.getElementById(id)?.getBoundingClientRect().top<=marker).at(-1);
        setActive(current?.id||'model');
      });
    };
    update();
    addEventListener('scroll',update,{passive:true});
    addEventListener('resize',update);
    return()=>{
      cancelAnimationFrame(frame);
      removeEventListener('scroll',update);
      removeEventListener('resize',update);
      removeEventListener('keydown',escape);
    };
  },[isHomePage,currentPath,activeGroup]);

  const hrefFor=id=>id==='contact'?'/contact/':isHomePage?`#${id}`:`/#${id}`;

  return <header className="site-header">
    <Brand/>
    <nav id="main-navigation" className={open?'main-nav is-open':'main-nav'} aria-label="Main navigation">
      {navigation.map(({label,id,pages})=>pages?
        <details className="nav-dropdown" data-active={active===id||undefined} key={id}>
          <summary>{label}<span aria-hidden="true">⌄</span></summary>
          <div className="nav-dropdown-menu">
            {pages.map(page=><a href={page.href} key={page.href} aria-current={normalizePath(page.href)===currentPath?'page':undefined} onClick={()=>setOpen(false)}>{page.label}</a>)}
          </div>
        </details>:
        <a key={id} href={hrefFor(id)} aria-current={active===id?'location':undefined} onClick={()=>setOpen(false)}>{label}</a>
      )}
    </nav>
    <a className="button header-viewer" href={isHomePage?'#viewer':'/#viewer'}>Launch viewer</a>
    <button type="button" className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>;
}
