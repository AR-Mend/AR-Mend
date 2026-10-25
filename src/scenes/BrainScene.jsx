import React,{useMemo,useRef,useEffect,useState} from 'react';
import {Canvas,useFrame,useThree} from '@react-three/fiber';
import {Float,Sparkles,Line,useGLTF} from '@react-three/drei';
import {EffectComposer,Bloom} from '@react-three/postprocessing';
import * as THREE from 'three';

const ACCENT=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
const VIOLET=getComputedStyle(document.documentElement).getPropertyValue('--violet').trim();
const MODEL_URL='/models/human-brain.glb';
function Model({mode,reduced}){
 const {scene}=useGLTF(MODEL_URL);const group=useRef();const invalidate=useThree(s=>s.invalidate);
 // Each canvas owns its materials. Cached geometry and textures remain shared.
 const {model,materials}=useMemo(()=>{
  const model=scene.clone(true),materials=[];
  model.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
  const scale=2.5/Math.max(size.x,size.y,size.z);
  const meshes=[];model.traverse(node=>{if(node.isMesh)meshes.push(node)});
  meshes.forEach(mesh=>{
   const clone=source=>{const material=source.clone();materials.push(material);return material};
   mesh.material=Array.isArray(mesh.material)?mesh.material.map(clone):clone(mesh.material);
   const pointMaterial=new THREE.PointsMaterial({color:'#d7a6ff',size:.016,transparent:true,opacity:.85,depthWrite:false});materials.push(pointMaterial);
   const points=new THREE.Points(mesh.geometry,pointMaterial);points.name='neural-points';points.visible=false;mesh.add(points);
  });
  const normalized=new THREE.Group();normalized.scale.setScalar(scale);normalized.position.copy(center).multiplyScalar(-scale);normalized.add(model);
  return{model:normalized,materials};
 },[scene]);
 useEffect(()=>()=>materials.forEach(material=>material.dispose()),[materials]);
 useEffect(()=>{
  model.traverse(node=>{
   if(node.isMesh)for(const material of Array.isArray(node.material)?node.material:[node.material]){
    material.wireframe=mode===3;material.transparent=mode===4;material.opacity=mode===4?.12:1;material.depthWrite=mode!==4;
    material.color.set(mode===3?ACCENT:mode===1?'#c790ed':'#eee4f5');
    material.emissive?.set(mode===1?'#2c0b3d':'#000000');material.needsUpdate=true;
   }
   if(node.isPoints)node.visible=mode===4;
  });invalidate();
 },[model,mode,invalidate]);
 useFrame(({clock,pointer},delta)=>{if(!group.current||reduced)return;group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,-.35+Math.sin(clock.elapsedTime*.16)*.23+pointer.x*.12,3,delta);group.current.rotation.x=THREE.MathUtils.damp(group.current.rotation.x,.12+pointer.y*.06,3,delta)});
 return <group ref={group} rotation={[.12,-.35,-.12]} scale={1.52} dispose={null}><primitive object={model}/>{(mode===2||mode===5)&&[-1,1].map(s=><group key={s}><Line points={[[s*.6,.6,0],[s*1.5,1.1,0],[s*1.9,1.1,0]]} color={ACCENT} lineWidth={1}/><mesh position={[s*.6,.6,0]}><sphereGeometry args={[.045,12,12]}/><meshBasicMaterial color="#edd2ff"/></mesh></group>)}{mode===4&&<Sparkles count={100} scale={[2.2,2.1,1.6]} size={2} color="#c98aff" speed={reduced?0:.2}/>}</group>;
}
function World({mode,reduced}){return <><ambientLight intensity={.65}/><directionalLight position={[-4,5,5]} intensity={2.4} color="#efe0ff"/><pointLight position={[4,1,-2]} intensity={32} color="#ad45f5"/><pointLight position={[-3,-2,2]} intensity={8} color={VIOLET}/><Float speed={reduced?0:.8} rotationIntensity={0} floatIntensity={reduced?0:.25}><Model mode={mode} reduced={reduced}/></Float>{!reduced&&<Sparkles count={45} scale={[7,6,4]} size={1.4} color="#d5acff" opacity={.5} speed={.15}/>}<mesh rotation={[Math.PI/2,.15,0]} position={[0,-2,0]}><torusGeometry args={[2.15,.006,6,110]}/><meshBasicMaterial color="#642a8e" transparent opacity={.45}/></mesh>{mode===5&&<gridHelper args={[12,20,'#63298c','#2d143f']} position={[0,-2.1,0]}/>}<EffectComposer multisampling={0}><Bloom luminanceThreshold={1.5} intensity={.25} mipmapBlur/></EffectComposer></>}
export default function BrainScene({mode=0,reduced=false}){const[visible,setVisible]=useState(true);const wrap=useRef();useEffect(()=>{const ob=new IntersectionObserver(([e])=>setVisible(e.isIntersecting),{rootMargin:'80px'});ob.observe(wrap.current);return()=>ob.disconnect()},[]);return <div ref={wrap} className="canvas-wrap" role="img" aria-label="Interactive textured human brain model"><Canvas dpr={[1,1.5]} camera={{position:[0,0,6.8],fov:43}} frameloop={visible&&!reduced?'always':'demand'} gl={{antialias:true,alpha:true,powerPreference:'low-power'}} fallback={<div className="fallback">3D visualization unavailable</div>}><World mode={mode} reduced={reduced}/></Canvas></div>}
