import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';

function Contact() {
  const [errors, setErrors] = useState({}),
    [done, setDone] = useState(false);
  const submit = e => {
    e.preventDefault();
    let d = new FormData(e.currentTarget),
      err = {};
    for (let k of ['name', 'email', 'subject', 'message']) if (!d.get(k)?.trim()) err[k] = 'Please enter your ' + k + '.';
    if (d.get('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.get('email'))) err.email = 'Enter a valid email address.';
    setErrors(err);
    setDone(!Object.keys(err).length);
    if (Object.keys(err).length) e.currentTarget.elements.namedItem(Object.keys(err)[0]).focus();
  };
  const email = import.meta.env.VITE_CONTACT_EMAIL;
  return <section id="contact" className="section contact"><div><p className="eyebrow">CONTACT</p><h2>A question about<br /><em>spatial medicine?</em></h2><p>For questions about the concept, education, or research directions, start here.</p>{email && <a className="text-link" href={'mailto:' + email}>{email}<ArrowUpRight size={16} /></a>}<p className="demo-note">Demo form · Your message stays in this browser.<br />No messages are sent or stored.</p></div><form noValidate onSubmit={submit}><div className="form-grid">{['name', 'email', 'subject', 'message'].map(k => <div key={k} className={k === 'subject' || k === 'message' ? 'full' : ''}><label htmlFor={k}>{k[0].toUpperCase() + k.slice(1)}</label>{k === 'message' ? <textarea className="resize-none" id={k} name={k} rows={4} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? k + '-error' : undefined} /> : <input id={k} name={k} type={k === 'email' ? 'email' : 'text'} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'off'} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? k + '-error' : undefined} />}<span className="field-error" id={k + '-error'}>{errors[k] || ''}</span></div>)}</div><button className="button" type="submit">Preview message <ArrowUpRight size={17} /></button><p className="form-status" role="status">{done ? 'Message validated. This is a demo; nothing was sent.' : ''}</p></form></section>;
}

export default Contact;

