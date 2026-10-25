import fs from 'node:fs';
// Preserve geometry and embedded textures while converting the legacy material.
const path=new URL('../public/models/human-brain.glb',import.meta.url);
const input=fs.readFileSync(path);
if(input.readUInt32LE(0)!==0x46546c67)throw Error('Not a GLB file');
const length=input.readUInt32LE(12);
const doc=JSON.parse(input.subarray(20,20+length).toString());
for(const material of doc.materials??[]){
 const legacy=material.extensions?.KHR_materials_pbrSpecularGlossiness;
 if(!legacy)continue;
 material.pbrMetallicRoughness={baseColorTexture:legacy.diffuseTexture,baseColorFactor:legacy.diffuseFactor??[1,1,1,1],metallicFactor:0,roughnessFactor:.65};
 delete material.extensions.KHR_materials_pbrSpecularGlossiness;
 if(!Object.keys(material.extensions).length)delete material.extensions;
}
for(const key of ['extensionsUsed','extensionsRequired'])if(doc[key])doc[key]=doc[key].filter(x=>x!=='KHR_materials_pbrSpecularGlossiness');
const json=Buffer.from(JSON.stringify(doc));const padded=Buffer.alloc(Math.ceil(json.length/4)*4,32);json.copy(padded);
const remaining=input.subarray(20+length);const header=Buffer.alloc(20);input.copy(header,0,0,12);header.writeUInt32LE(20+padded.length+remaining.length,8);header.writeUInt32LE(padded.length,12);header.writeUInt32LE(0x4e4f534a,16);
fs.writeFileSync(path,Buffer.concat([header,padded,remaining]));
console.log(`Prepared brain: ${doc.accessors[1].count} vertices, ${doc.accessors[0].count/3} triangles, ${doc.images.length} embedded textures.`);
