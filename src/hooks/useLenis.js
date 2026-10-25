import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap,ScrollTrigger} from '../lib/animation.js';

export default function useLenis(reduced){
useEffect(() => {
  if (reduced) return;
  const lenis = new Lenis({
    duration: 1.1,
    anchors: true
  });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = t => lenis.raf(t * 1000);
  gsap.ticker.add(tick);
  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
  };
}, [reduced]);
}
