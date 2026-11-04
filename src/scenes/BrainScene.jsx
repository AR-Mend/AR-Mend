import React,{useMemo,useRef,useEffect} from 'react';
import {Canvas,useFrame,useThree} from '@react-three/fiber';
import {Line,useGLTF} from '@react-three/drei';
import * as THREE from 'three';

const VIOLET=getComputedStyle(document.documentElement).getPropertyValue('--violet').trim();
const MODEL_URL='/models/human-brain.glb';
function Model({mode,reduced,rotation=0}){
 const {scene}=useGLTF(MODEL_URL);const group=useRef();const {invalidate,gl,pointer}=useThree();
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
   const pointMaterial=new THREE.PointsMaterial({color:VIOLET,size:.032,transparent:true,opacity:.95,depthWrite:false});materials.push(pointMaterial);
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
    material.color.set(mode===3?VIOLET:mode===1?'#d2bce8':'#f0efed');
    material.emissive?.set(mode===1?'#170b20':'#000000');material.needsUpdate=true;
   }
   if(node.isPoints)node.visible=mode===4;
  });invalidate();
 },[model,mode,invalidate]);
 useEffect(()=>{
  if(reduced)return;
  const move=()=>invalidate();
  const leave=()=>{pointer.set(0,0);invalidate();};
  gl.domElement.addEventListener('pointermove',move);
  gl.domElement.addEventListener('pointerleave',leave);
  return()=>{gl.domElement.removeEventListener('pointermove',move);gl.domElement.removeEventListener('pointerleave',leave);};
 },[gl,invalidate,pointer,reduced]);
 useEffect(()=>{if(reduced&&group.current)group.current.rotation.y=-.35+rotation;invalidate();},[rotation,reduced,invalidate]);
 useFrame((state,delta)=>{
  if(!group.current||reduced)return;
  const targetY=-.35+rotation+state.pointer.x*.07,targetX=.08+state.pointer.y*.035;
  group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,targetY,6,Math.min(delta,.05));
  group.current.rotation.x=THREE.MathUtils.damp(group.current.rotation.x,targetX,6,Math.min(delta,.05));
  if(Math.abs(group.current.rotation.y-targetY)>.0001||Math.abs(group.current.rotation.x-targetX)>.0001)invalidate();
 });
 return <group ref={group} rotation={[.08,-.35,-.04]} scale={1.52} dispose={null}><primitive object={model}/>{(mode===2||mode===5)&&[-1,1].map(s=><group key={s}><Line points={[[s*.6,.6,0],[s*1.5,1.1,0],[s*1.9,1.1,0]]} color={VIOLET} lineWidth={1}/><mesh position={[s*.6,.6,0]}><sphereGeometry args={[.045,12,12]}/><meshBasicMaterial color={VIOLET}/></mesh></group>)}</group>;
}
function World({mode,reduced,rotation}){return <><ambientLight intensity={1.3}/><directionalLight position={[-3,4,5]} intensity={2.2} color="#fff9f2"/><directionalLight position={[4,0,-1]} intensity={1.1} color="#d9c4ed"/><Model mode={mode} reduced={reduced} rotation={rotation}/>{mode===5&&<gridHelper args={[8,12,'#b8afc2','#d9d3df']} position={[0,-2.1,0]}/>}</>}
export default function BrainScene({mode=0,reduced=false,rotation=0}){
 return <div className="canvas-wrap" role="img" aria-label="Interactive textured human brain model">
  <Canvas dpr={[1,1.5]} camera={{position:[0,0,6.8],fov:43}} frameloop="demand" gl={{antialias:true,alpha:true,powerPreference:'low-power'}} fallback={<div className="fallback">3D visualization unavailable</div>}>
   <World mode={mode} reduced={reduced} rotation={rotation}/>
  </Canvas>
 </div>;
}
