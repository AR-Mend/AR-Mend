import {ArrowUpRight} from 'lucide-react';
export default function LinkButton({href,children,secondary=false}){
  return <a className={'button'+(secondary?' secondary':'')} href={href}>{children}<ArrowUpRight size={18}/></a>;
}
