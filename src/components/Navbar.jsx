import {useEffect,useState} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import Brand from './shared/Brand.jsx';
import nav from '../data/navigation.js';

function Navbar() {
  const [open, setOpen] = useState(false),
    [active, setActive] = useState('home'),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    }), {
      rootMargin: '-15% 0px -60% 0px'
    });
    nav.forEach(n => {
      const e = document.getElementById(n.toLowerCase());
      if (e) ob.observe(e);
    });
    const f = () => setScrolled(scrollY > 30);
    addEventListener('scroll', f, {
      passive: true
    });
    return () => {
      ob.disconnect();
      removeEventListener('scroll', f);
    };
  }, []);
  return <header className={scrolled ? 'scrolled' : ''}><Brand /><nav aria-label="Main navigation" className={open ? 'nav open' : 'nav'}>{nav.map(n => <a key={n} href={'#' + n.toLowerCase()} className={active === n.toLowerCase() ? 'active' : ''} aria-current={active === n.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{n}</a>)}</nav><a href="#technology-guide" className="nav-cta">Explore the ideas <ArrowUpRight size={15} /></a><button className="menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>;
}

export default Navbar;
