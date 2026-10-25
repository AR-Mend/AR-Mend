import {motion} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';

function LinkButton({
  href,
  children,
  secondary = false
}) {
  return <motion.a whileHover={{
    y: -3
  }} whileTap={{
    scale: .98
  }} className={'button ' + (secondary ? 'secondary' : '')} href={href}>{children}<ArrowUpRight size={17} /></motion.a>;
}

export default LinkButton;
