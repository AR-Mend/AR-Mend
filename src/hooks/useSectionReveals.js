import {useEffect} from 'react';
import {gsap} from '../lib/animation.js';
export default function useSectionReveals(reduced){useEffect(()=>{if(reduced)return;const context=gsap.context(()=>{gsap.utils.toArray('.section-marker').forEach(element=>gsap.from(element,{y:12,opacity:0,duration:.45,scrollTrigger:{trigger:element,start:'top 94%',once:true}}));});return()=>context.revert();},[reduced]);}
