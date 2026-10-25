import React,{useMemo,useRef,useEffect,useState} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';
import {Float,Sparkles,Line} from '@react-three/drei';
import {EffectComposer,Bloom} from '@react-three/postprocessing';
import * as THREE from 'three';

// Original procedural sculpture: bilateral lobes with winding raised gyri.
function createBrain(){
 const surfaces=[],folds=[];
 for(const side of [-1,1]){
  const g=new THREE.SphereGeometry(1,100,80);const p=g.attributes.position;
  for(let i=0;i<p.count;i++){let x=p.getX(i),y=p.getY(i),z=p.getZ(i);let wave=.028*Math.sin(23*y+5*Math.sin(z*8))*Math.cos(x*18)+.018*Math.sin(z*31+x*12);let r=1+wave;p.setXYZ(i,side*.59+x*.68*r,y*1.15*r,z*.91*r)}g.computeVertexNormals();surfaces.push(g);
  for(let band=0;band<27;band++){
   const pts=[];const phi=.13+band/26*(Math.PI-.26);
   for(let j=0;j<125;j++){let t=j/124*Math.PI*2;let ph=phi+.065*Math.sin(t*5+band*1.7)+.038*Math.sin(t*11+band);let theta=t+.07*Math.sin(t*7+band);pts.push(new THREE.Vector3(side*.59+.696*Math.sin(ph)*Math.cos(theta),1.176*Math.cos(ph),.934*Math.sin(ph)*Math.sin(theta)))}
   folds.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts,true),155,.036+Math.sin(band)*.006,7,true));
  }
 }
 return{surfaces,folds};
}
function Model({mode,reduced}){const group=useRef(),{surfaces,folds}=useMemo(createBrain,[]);useEffect(()=>()=>{surfaces.forEach(g=>g.dispose());folds.forEach(g=>g.dispose())},[surfaces,folds]);useFrame(({clock,pointer},delta)=>{if(!group.current||reduced)return;group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,-.35+Math.sin(clock.elapsedTime*.16)*.23+pointer.x*.12,3,delta);group.current.rotation.x=THREE.MathUtils.damp(group.current.rotation.x,.12+pointer.y*.06,3,delta)});const neural=mode===4,wire=mode===3;return <group ref={group} rotation={[.12,-.35,-.12]} scale={1.52}><group>{surfaces.map((g,i)=><mesh key={i} geometry={g}><meshStandardMaterial color={mode===1?'#318b9c':'#315867'} metalness={.44} roughness={.4} wireframe={wire} transparent opacity={neural?.15:wire?.55:1}/></mesh>)}{!wire&&!neural&&folds.map((g,i)=><mesh key={i} geometry={g}><meshStandardMaterial color="#548d9b" metalness={.55} roughness={.35}/></mesh>)}</group><mesh position={[0,-1.15,-.3]} rotation={[.3,0,0]}><capsuleGeometry args={[.15,.55,6,12]}/><meshStandardMaterial color="#315867" roughness={.5}/></mesh>{(mode===2||mode===5)&&[-1,1].map((s,i)=><group key={s}><Line points={[[s*.6,.6,0],[s*1.5,1.1,0],[s*1.9,1.1,0]]} color="#00e5ff" lineWidth={1}/><mesh position={[s*.6,.6,0]}><sphereGeometry args={[.045,12,12]}/><meshBasicMaterial color="#8af7ff"/></mesh></group>)}{neural&&<Sparkles count={180} scale={[2.2,2.1,1.6]} size={3} color="#50efff" speed={reduced?0:.2}/>}</group>}
function World({mode,reduced}){return <><ambientLight intensity={.45}/><directionalLight position={[-4,5,5]} intensity={2.4} color="#b3e7ee"/><pointLight position={[4,1,-2]} intensity={32} color="#00c8ff"/><pointLight position={[-3,-2,2]} intensity={8} color="#397bff"/><Float speed={reduced?0:.8} rotationIntensity={0} floatIntensity={reduced?0:.25}><Model mode={mode} reduced={reduced}/></Float>{!reduced&&<Sparkles count={45} scale={[7,6,4]} size={1.4} color="#9cefff" opacity={.5} speed={.15}/>}<mesh rotation={[Math.PI/2,.15,0]} position={[0,-2,0]}><torusGeometry args={[2.15,.006,6,110]}/><meshBasicMaterial color="#248494" transparent opacity={.45}/></mesh>{mode===5&&<gridHelper args={[12,20,'#237e92','#123641']} position={[0,-2.1,0]}/>}<EffectComposer multisampling={0}><Bloom luminanceThreshold={1.5} intensity={.25} mipmapBlur/></EffectComposer></>}
export default function BrainScene({mode=0,reduced=false}){const[visible,setVisible]=useState(true);const wrap=useRef();useEffect(()=>{const ob=new IntersectionObserver(([e])=>setVisible(e.isIntersecting),{rootMargin:'80px'});ob.observe(wrap.current);return()=>ob.disconnect()},[]);return <div ref={wrap} className="canvas-wrap" role="img" aria-label="Interactive anatomically inspired 3D brain"><Canvas dpr={[1,1.5]} camera={{position:[0,0,6.8],fov:43}} frameloop={visible&&!reduced?'always':'demand'} gl={{antialias:true,alpha:true,powerPreference:'low-power'}} fallback={<div className="fallback">3D visualization unavailable</div>}><World mode={mode} reduced={reduced}/></Canvas></div>}
