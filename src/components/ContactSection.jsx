import {useRef,useState} from 'react';
export default function Contact(){
 const [errors,setErrors]=useState({}),[done,setDone]=useState(false),formRef=useRef();
 const submit=e=>{e.preventDefault();const data=new FormData(e.currentTarget),next={};
  if(!String(data.get('name')).trim())next.name='Enter your name.';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get('email'))))next.email='Enter a valid email address.';
  if(!String(data.get('message')).trim())next.message='Enter a message.';
  setErrors(next);setDone(!Object.keys(next).length);
  if(Object.keys(next).length)formRef.current.elements[Object.keys(next)[0]].focus();
 };
 return <section className="contact-section" id="contact"><div><p className="section-kicker">Contact</p><h2>Let’s talk<br/>about the model.</h2><p>Have a question about AR MEND or a use you’d like to discuss?</p><p className="form-disclosure" id="contact-note">This is a demo form. Nothing is sent or stored.</p></div><form ref={formRef} noValidate onSubmit={submit} aria-describedby="contact-note" onChange={()=>done&&setDone(false)}>{[['name','Name'],['email','Email'],['message','Message']].map(([name,label])=><div className="form-field" key={name}><label htmlFor={name}>{label}</label>{name==='message'?<textarea className="resize-none" id={name} name={name} rows={4} required aria-invalid={!!errors[name]} aria-describedby={errors[name]?name+'-error':undefined}/>:<input id={name} name={name} type={name==='email'?'email':'text'} autoComplete={name} required aria-invalid={!!errors[name]} aria-describedby={errors[name]?name+'-error':undefined}/>}<span className="field-error" id={name+'-error'}>{errors[name]||''}</span></div>)}<button className="button" type="submit">Preview message <span aria-hidden="true">↗</span></button><p className="form-status" role="status">{done?'Your message is ready to review. This demo has not sent it.':''}</p></form></section>;
}
