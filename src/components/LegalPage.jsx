import {useEffect} from 'react';
import {ArrowLeft} from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const updated='November 13, 2026';

const pages={
  privacy:{
    title:'Privacy Policy',
    intro:'This notice explains what information may be handled when you visit the AR MEND website and interactive brain-model presentation.',
    sections:[
      {title:'1. About this website',paragraphs:['AR MEND is a marketing and information website with an interactive 3D brain model. The website does not provide user accounts, scan uploads, an online contact form, or a diagnostic service.']},
      {title:'2. Information you choose to share',paragraphs:['If you contact us by email or phone, we receive the information you choose to provide, such as your contact details and the contents of your inquiry. We use it to respond and direct your request to the appropriate team.']},
      {title:'3. Information processed to operate the site',paragraphs:['The hosting provider may process technical request information needed to deliver and protect the website. This can include an IP address, browser or device details, requested pages or files, and the time of a request. Hosting providers may retain security logs under their own retention and security practices.']},
      {title:'4. The interactive model',paragraphs:['The viewer presents the AR MEND demonstration model in your browser. This website does not accept medical scans or transmit scan data through the viewer. The model is illustrative and is not a patient record or diagnostic result.']},
      {title:'5. How information is used and shared',paragraphs:['Information you send to us is used to respond to your inquiry, maintain communications, protect the website, and meet applicable legal requirements. We do not sell personal information. Limited technical information may be handled by providers that host or secure the website, and information may be disclosed where required by law.']},
      {title:'6. External services',paragraphs:['Links to Google Maps, your email application, and your phone application lead to services outside this website. Those services handle information under their own terms and privacy notices.']},
      {title:'7. Your requests and questions',paragraphs:['To ask about information you have sent us, or to request that it be corrected or deleted where applicable, contact saas@armend.in. We may need to verify your request and retain information where the law requires it.']},
      {title:'8. Updates',paragraphs:['We may revise this policy when the website or its data practices change. The date at the top of this page shows the latest revision.']}
    ]
  },
  terms:{
    title:'Terms & Conditions',
    intro:'These terms cover your use of the AR MEND website and its interactive 3D brain-model presentation.',
    sections:[
      {title:'1. Using this website',paragraphs:['By accessing this website, you agree to use it lawfully and in a way that does not disrupt the site or prevent others from using it. If you do not agree with these terms, do not use the website.']},
      {title:'2. Demonstration only; no medical advice',paragraphs:['The website and brain model are provided for information, demonstration, education, and discussion. They are not a medical device or diagnostic service. The model and its colors, points, geometry, and labels are illustrative; they do not represent diagnostic findings or patient-specific anatomy. Do not use this website to diagnose, treat, or make decisions about a patient. Consult qualified healthcare professionals for clinical decisions.']},
      {title:'3. Interactive viewer',paragraphs:['The viewer lets you explore the supplied 3D model and its visual presentation modes. The website does not provide scan uploads or a clinical workflow. Availability, performance, and display may vary by device, browser, and network.']},
      {title:'4. Acceptable use',paragraphs:['Do not use the website for unlawful activity, interfere with its operation or security, attempt unauthorized access, or copy, redistribute, reverse engineer, or commercially exploit website materials or the model except where applicable law permits.']},
      {title:'5. Intellectual property',paragraphs:['The AR MEND name, logo, website design, text, and other materials are owned by or licensed to their respective rights holders. The 3D model and third-party materials may have separate rights and license terms. Website access does not transfer ownership or grant a right to reuse these materials.']},
      {title:'6. Third-party services',paragraphs:['The website may link to third-party services, including Google Maps. Those services are governed by their own terms and policies, and AR MEND does not control their content or availability.']},
      {title:'7. Availability and liability',paragraphs:['The website is provided for demonstration and information. To the extent permitted by applicable law, AR MEND makes no promise that the website will always be available, uninterrupted, or error-free. Nothing in these terms limits any rights or remedies that cannot be limited under applicable law.']},
      {title:'8. Changes and contact',paragraphs:['We may update these terms as the website changes. Continued use after an update means you accept the revised terms. Questions about these terms can be sent to saas@armend.in.']}
    ]
  }
};

export default function LegalPage({type}){
  const page=pages[type]||pages.privacy;
  useEffect(()=>{
    const previous=document.title;
    document.title=`${page.title} | AR MEND`;
    return()=>{document.title=previous};
  },[page.title]);

  return <div className="legal-page">
    <a className="skip-link" href="#legal-content">Skip to policy content</a>
    <Navbar/>
    <main id="legal-content" className="legal-page-main">
      <header className="legal-page-heading">
        <a className="legal-back-link" href="/#model"><ArrowLeft size={15} aria-hidden="true"/> AR MEND home</a>
        <p className="section-kicker">AR MEND · INFORMATION</p>
        <h1>{page.title}</h1>
        <p className="legal-updated">Last updated {updated}</p>
        <p className="legal-intro">{page.intro}</p>
      </header>
      <div className="legal-page-content">
        {page.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}
        <address className="legal-contact"><strong>AR MEND</strong><br/>Innov8 Prestige Tech Platina, 11th Floor<br/>No. 32/2, 34/1, Kadabisanahalli<br/>Bangalore, Karnataka – 560087<br/><a href="mailto:saas@armend.in">saas@armend.in</a></address>
      </div>
    </main>
    <Footer/>
  </div>;
}
