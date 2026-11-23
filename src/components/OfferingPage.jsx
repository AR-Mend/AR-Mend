import {useEffect} from 'react';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import {offeringGroups} from '../data/offerings.js';

export default function OfferingPage({page}){
  const related=offeringGroups.find(group=>group.title===page.group)?.pages||[];

  useEffect(()=>{
    const previousTitle=document.title;
    const description=document.querySelector('meta[name="description"]');
    const previousDescription=description?.content;
    document.title=`${page.label} | AR MEND`;
    if(description)description.content=page.description;
    return()=>{
      document.title=previousTitle;
      if(description&&previousDescription)description.content=previousDescription;
    };
  },[page]);

  return <div className="offering-page">
    <a className="skip-link" href="#offering-content">Skip to page content</a>
    <Navbar/>
    <main id="offering-content" className="offering-page-main">
      <header className="offering-hero">
        <a className="legal-back-link" href="/"><ArrowLeft size={15} aria-hidden="true"/> AR MEND home</a>
        <p className="section-kicker">{page.group}</p>
        <span className="offering-status">{page.status}</span>
        <div className="offering-hero-grid">
          <h1>{page.title}</h1>
          <p className="offering-description">{page.description}</p>
        </div>
        <nav className="offering-related" aria-label={`More ${page.group.toLowerCase()} pages`}>
          {related.filter(item=>item.href.replace(/\/$/,'')!==page.path).map(item=><a href={item.href} key={item.href}>{item.label}<ArrowUpRight size={14} aria-hidden="true"/></a>)}
        </nav>
      </header>

      <section className="offering-sections" aria-label={`${page.label} overview`}>
        {page.sections.map(section=><article key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>)}
      </section>

      <aside className="offering-note"><p>{page.note}</p></aside>

      <section className="offering-contact">
        <div>
          <p className="section-kicker">Talk with AR MEND</p>
          <h2>Start with the needs of your team.</h2>
          <p>Share the workflows you want to explore and we’ll discuss the right next step.</p>
        </div>
        <a className="button" href="/contact/">Contact our team <ArrowUpRight size={17} aria-hidden="true"/></a>
      </section>
    </main>
    <Footer/>
  </div>;
}
