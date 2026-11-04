import {Home,Info,Cpu,Box,Glasses,Headset,Users,FileText,BookOpen,Globe,Brain} from 'lucide-react';
import Brand from './shared/Brand.jsx';

const groups = [
 {title:'Explore',links:[['Home','#home',Home],['About us','#about',Info],['Our technology','#features',Cpu]]},
 {title:'Our technology',links:[['AI concepts','#technology-guide',Box],['AR visualization','#story',Glasses],['VR exploration','#story',Headset],['Research applications','#applications',Users]]},
 {title:'Resources',links:[['FAQs','#faq',FileText],['How it works','#workflow',BookOpen],['Project scope','#project-scope',Info]]}
];
function Circuits({className}) {
 return <svg className={className} viewBox="0 0 420 230" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.5"><path d="M0 10 75 85h70l28 28h60l28 28h150M0 55l70 70h100M0 105l55 55h100M0 225l85-85h45M0 185l50-50h65"/><path d="M0 195 68 127h65l25-25h80"/></g><g fill="currentColor">{[[170,125],[155,160],[130,140],[115,135],[238,102],[305,141]].map(([cx,cy])=><circle key={cx} cx={cx} cy={cy} r="3"/>)}</g></svg>;
}
export default function Footer() {
 return <footer className="site-footer" id="footer">
  <Circuits className="footer-circuit footer-circuit-left"/><Circuits className="footer-circuit footer-circuit-right"/>
  <Brain className="footer-brain" aria-hidden="true" strokeWidth={.65}/>
  <div className="footer-main">
   <div className="footer-identity"><Brand/><h2>Where AI meets healthcare.</h2><p>Exploring neurological visualization through artificial intelligence, augmented reality and virtual reality.</p><svg className="footer-pulse" viewBox="0 0 360 50" aria-hidden="true"><path d="M0 30h132l8-7 6 15 8-27 7 35 8-23 7 7h184" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></div>
   {groups.map(group=><nav className="footer-column" aria-label={group.title+' footer'} key={group.title}><h3>{group.title}</h3><ul>{group.links.map(([label,href,Icon])=><li key={label}><a href={href}><Icon size={23} aria-hidden="true"/><span>{label}</span></a></li>)}</ul></nav>)}
   <div className="footer-column footer-connect"><h3>Connect with us</h3><a href="https://www.block-up.tech" target="_blank" rel="noreferrer"><Globe size={24} aria-hidden="true"/><span>www.block-up.tech</span></a><p className="footer-partner"><span className="footer-linkedin" aria-hidden="true">in</span>Block Ultimate-Protection</p></div>
  </div>
  <div className="footer-legal"><span>© {new Date().getFullYear()} AR MEND. All rights reserved.</span><a href="https://www.block-up.tech" target="_blank" rel="noreferrer">Powered by <strong>BLOCK-UP</strong></a><span className="footer-values">Innovation <i/> Intelligence <i/> Healthcare</span></div>
  <p className="footer-disclaimer">Technology concepts only. Not medical advice or a substitute for professional medical evaluation.</p>
 </footer>;
}
