import {useEffect} from 'react';
import {ArrowUpRight,Mail,MapPin,Phone} from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function ContactPage(){
  useEffect(()=>{
    const oldTitle=document.title;
    const description=document.querySelector('meta[name="description"]');
    const oldDescription=description?.content;
    document.title='Contact AR MEND';
    if(description)description.content='Contact the AR MEND team about the interactive brain model, demonstrations, education and research collaboration.';
    return()=>{document.title=oldTitle;if(description&&oldDescription)description.content=oldDescription};
  },[]);

  return <div className="contact-page">
    <a className="skip-link" href="#contact-content">Skip to contact information</a>
    <Navbar/>
    <main id="contact-content" className="contact-page-main">
      <section className="contact-page-section" aria-labelledby="contact-title">
        <div className="contact-page-intro">
          <p className="section-kicker">Contact AR MEND</p>
          <h1 id="contact-title">Let’s talk about the model.</h1>
          <p className="contact-page-lead">For demonstrations, education, research, or a closer look at how the interactive brain model can support your work, reach our team directly.</p>
          <a className="button contact-email-cta" href="mailto:saas@armend.in">Email our team <ArrowUpRight size={17} aria-hidden="true"/></a>
        </div>
        <div className="contact-details">
          <p className="contact-details-label">Get in touch</p>
          <a className="contact-detail" href="mailto:saas@armend.in"><span className="contact-detail-icon"><Mail size={19} aria-hidden="true"/></span><span><small>Email</small><strong>saas@armend.in</strong></span><ArrowUpRight className="contact-detail-arrow" size={18} aria-hidden="true"/></a>
          <a className="contact-detail" href="tel:+916380436024"><span className="contact-detail-icon"><Phone size={19} aria-hidden="true"/></span><span><small>Phone</small><strong>+91 6380436024</strong></span><ArrowUpRight className="contact-detail-arrow" size={18} aria-hidden="true"/></a>
          <a className="contact-detail contact-address" href="https://www.google.com/maps/place/11th+Floor,+No.+32%2F2,+Innov8+Prestige+Tech+Platina,+34%2F1,+Kadubeesanahalli,+Panathur,+Bengaluru,+Karnataka+560103/@12.9390926,77.6943486,17z/data=!3m1!4b1!4m10!1m2!2m1!1sInnov8+Prestige+Tech+Platina,+11th+Floor+NO32%2F2,34%2F1+KADABISANAHALLI+BANGALORE+,+KARNATAKA+-560087!3m6!1s0x3bae13b28ed371fd:0x2518840e3cbd6578!8m2!3d12.9390926!4d77.6969235!15sCmJJbm5vdjggUHJlc3RpZ2UgVGVjaCBQbGF0aW5hLCAxMXRoIEZsb29yIE5PMzIvMiwzNC8xIEtBREFCSVNBTkFIQUxMSSBCQU5HQUxPUkUgLCBLQVJOQVRBS0EgLTU2MDA4N5IBCnN1YnByZW1pc2XgAQA!16s%2Fg%2F11z8nyqm1r?entry=ttu&amp;g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" aria-label="Open the AR MEND office address in Google Maps, opens in a new tab"><span className="contact-detail-icon"><MapPin size={19} aria-hidden="true"/></span><span><small>Address</small><address>Innov8 Prestige Tech Platina, 11th Floor<br/>No. 32/2, 34/1, Kadabisanahalli<br/>Bangalore, Karnataka – 560087</address></span><ArrowUpRight className="contact-detail-arrow" size={18} aria-hidden="true"/></a>
          <p className="contact-details-note">Tell us what you’re exploring and we’ll direct your inquiry to the right team.</p>
        </div>
      </section>
    </main>
    <Footer/>
  </div>;
}
