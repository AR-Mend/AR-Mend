import React,{useMemo,useRef,useEffect,useState} from 'react';
import {Canvas,useFrame,useThree} from '@react-three/fiber';
import {Sparkles,Line,Html,useGLTF} from '@react-three/drei';
import * as THREE from 'three';

const ACCENT=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
const MODEL_URL='/models/human-brain.glb';
function Model({mode,position=[0,0,0],scale=1.52}){
 const {scene}=useGLTF(MODEL_URL);
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
   const points=new THREE.Points(mesh.geometry,pointMaterial);points.visible=false;mesh.add(points);
  });
  const normalized=new THREE.Group();normalized.scale.setScalar(scale);normalized.position.copy(center).multiplyScalar(-scale);normalized.add(model);
  return{model:normalized,materials};
 },[scene]);
 useEffect(()=>()=>materials.forEach(material=>material.dispose()),[materials]);
 const invalidate=useThree(s=>s.invalidate);
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
 return <group position={position} scale={scale} dispose={null}><primitive object={model}/></group>;
}
function CameraFit({mode}){
 const {camera,size,invalidate}=useThree();
 useEffect(()=>{
  // Fit a sphere around the complete rotating model, including its brainstem.
  const aspect=size.width/Math.max(1,size.height);
  const halfFov=THREE.MathUtils.degToRad(camera.fov/2);
  const limitingFov=Math.min(halfFov,Math.atan(Math.tan(halfFov)*aspect));
  camera.position.set(0,0,(mode===6?3.8:3.5)/Math.sin(limitingFov));
  camera.lookAt(0,0,0);camera.updateProjectionMatrix();invalidate();
 },[camera,size.width,size.height,mode,invalidate]);
 return null;
}
function World({mode,reduced,rotation}){
 const group=useRef();
 useFrame((_,delta)=>{
  if(!group.current)return;
  group.current.rotation.x=reduced?rotation.current.x:THREE.MathUtils.damp(group.current.rotation.x,rotation.current.x,22,delta);
  group.current.rotation.y=reduced?rotation.current.y:THREE.MathUtils.damp(group.current.rotation.y,rotation.current.y,22,delta);
 });
 return <><CameraFit mode={mode}/><ambientLight intensity={.85}/><directionalLight position={[-4,5,5]} intensity={2.4} color="#efe0ff"/><pointLight position={[4,1,-2]} intensity={25} color="#ad45f5"/>
 <group ref={group} rotation={[.12,-.35,0]}>
 {mode===6?<><Model mode={0} position={[-1.45,0,0]} scale={.9}/><Model mode={3} position={[1.45,0,0]} scale={.9}/></>:<Model mode={mode} scale={mode===5?1.15:1.52}/>}
 {mode===2&&[-1,1].map(s=><group key={s}><Line points={[[s*.9,.65,.5],[s*1.65,1.35,.5],[s*2.05,1.35,.5]]} color={ACCENT} lineWidth={1.3}/><mesh position={[s*.9,.65,.5]}><sphereGeometry args={[.045,12,12]}/><meshBasicMaterial color="#edd2ff"/></mesh><Html position={[s*1.8,1.58,.5]} center style={{pointerEvents:'none'}}><span className="brain-label">{s===-1?'Surface landmark A':'Surface landmark B'}</span></Html></group>)}
 </group>
 {mode===5&&<><gridHelper args={[5,12,'#b968ef','#4c285d']} position={[0,-1.8,0]}/><Line points={[[-2.5,-1.8,-1.4],[-2.5,1.8,-1.4],[2.5,1.8,-1.4],[2.5,-1.8,-1.4]]} color={ACCENT}/><Line points={[[-2.5,1.8,-1.4],[-2.5,1.8,1.4]]} color="#70458c"/><Line points={[[2.5,1.8,-1.4],[2.5,1.8,1.4]]} color="#70458c"/><Html position={[0,2.15,0]} center><span className="brain-label">CONCEPTUAL SPATIAL WORKSPACE</span></Html></>}
 {mode===6&&[-1,1].map(s=><Html key={s} position={[s*1.45,-1.5,0]} center><span className="brain-label">{s===-1?'TEXTURED ANATOMY':'SURFACE GEOMETRY'}</span></Html>)}
 {!reduced&&<Sparkles count={30} scale={[6,5,3]} size={1.2} color="#d5acff" opacity={.4} speed={.12}/>}
 </>;
}
export default function BrainScene({mode=0,reduced=false}){
 const[visible,setVisible]=useState(true);const wrap=useRef(),rotation=useRef({x:.12,y:-.35}),drag=useRef(null),invalidate=useRef(()=>{});
 useEffect(()=>{const ob=new IntersectionObserver(([e])=>setVisible(e.isIntersecting),{rootMargin:'80px'});ob.observe(wrap.current);return()=>ob.disconnect()},[]);
 const turn=(x,y)=>{rotation.current.x=THREE.MathUtils.clamp(rotation.current.x+x,-Math.PI/2,Math.PI/2);rotation.current.y+=y;invalidate.current()};
 return <div ref={wrap} className="canvas-wrap brain-interactive">
 <div className="brain-viewport" role="group" aria-label="Interactive brain. Drag to rotate, or use arrow keys. Press Home to reset." tabIndex={0}
 onKeyDown={e=>{const keys={ArrowLeft:[0,-.35],ArrowRight:[0,.35],ArrowUp:[-.25,0],ArrowDown:[.25,0]};if(keys[e.key]){e.preventDefault();turn(...keys[e.key])}if(e.key==='Home'){e.preventDefault();rotation.current={x:.12,y:-.35};invalidate.current()}}}
 onPointerDown={e=>{if(e.button!==0)return;drag.current={x:e.clientX,y:e.clientY};e.currentTarget.setPointerCapture(e.pointerId)}}
 onPointerMove={e=>{if(!drag.current)return;turn((e.clientY-drag.current.y)*.024,(e.clientX-drag.current.x)*.036);drag.current={x:e.clientX,y:e.clientY}}}
 onPointerUp={()=>{drag.current=null}} onPointerCancel={()=>{drag.current=null}} onLostPointerCapture={()=>{drag.current=null}}>
 <Canvas dpr={[1,1.5]} camera={{position:[0,0,8],fov:43}} frameloop={visible&&!reduced?'always':'demand'} onCreated={state=>{invalidate.current=state.invalidate}} gl={{antialias:true,alpha:true,powerPreference:'low-power'}} fallback={<div className="fallback">3D visualization unavailable</div>}><World mode={mode} reduced={reduced} rotation={rotation}/></Canvas>
 </div><div className="brain-controls"><span>Drag to rotate · arrow keys</span><button type="button" onClick={()=>{rotation.current={x:.12,y:-.35};invalidate.current()}}>Reset view</button></div></div>
}
