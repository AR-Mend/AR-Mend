import {ArrowUpRight} from 'lucide-react';
import Brand from './shared/Brand.jsx';
import nav from '../data/navigation.js';
export default function Footer(){return <footer><div className="footer-top"><Brand/><p>Brain anatomy.<br/>A spatial perspective.</p><a className="text-link" href="#home">Back to top <ArrowUpRight size={17}/></a></div><div className="footer-wordmark" aria-hidden="true">AR MEND</div><div className="footer-bottom"><span>© {new Date().getFullYear()} AR MEND</span><nav className="footer-nav" aria-label="Footer navigation">{nav.map(name=><a key={name} href={'#'+name.toLowerCase()}>{name}</a>)}</nav><p>Technology concepts only. Not medical advice or a substitute for professional medical evaluation.</p></div></footer>;}
