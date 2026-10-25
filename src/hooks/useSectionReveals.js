import {useEffect} from 'react';
import {gsap} from '../lib/animation.js';

export default function useSectionReveals(reduced){
useEffect(() => {
  if (reduced) return;
  const ctx = gsap.context(() => {
    gsap.utils.toArray('.section h2, .feature, .vision-strip > div, .workflow-grid > div').forEach(el => gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: .7,
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        once: true
      }
    }));
  });
  return () => ctx.revert();
}, [reduced]);
}
