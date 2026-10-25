import {ArrowUpRight} from 'lucide-react';
import Brand from './shared/Brand.jsx';
import nav from '../data/navigation.js';

function Footer() {
  return <footer><div className="footer-top"><Brand /><p>A new perspective on the brain.<br />An exploration of what comes next.</p><a href="#home" className="text-link">Back to top <ArrowUpRight size={16} /></a></div><div className="footer-nav">{nav.map(n => <a key={n} href={'#' + n.toLowerCase()}>{n}</a>)}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} AR MEND</span><p>Technology concepts only. Not medical advice or a substitute for professional medical evaluation.</p><span>BUILT FOR POSSIBILITY</span></div></footer>;
}

export default Footer;
