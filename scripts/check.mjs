import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import path from 'node:path';
function sourceFiles(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?sourceFiles(path.join(dir,e.name)):/\.(jsx|js)$/.test(e.name)?[path.join(dir,e.name)]:[])}
const files=sourceFiles('src'),app=files.map(f=>readFileSync(f,'utf8')).join('\n');
for(const id of ['model','about','features','story','viewer','workflow','uses','faq'])assert(app.includes('id="'+id+'"'),'Missing '+id);
for(const file of files)for(const match of readFileSync(file,'utf8').matchAll(/(?:from\s*|import\s*\()(['"])(\.[^'"]+)\1/g))assert(existsSync(path.resolve(path.dirname(file),match[2])),'Broken import: '+file);
assert(!app.includes('id="contact"'),'Withdrawn brief contact form remains');
assert(!app.includes('href="#contact"'),'Removed contact form is linked');
assert(!app.includes('href="#how-it-works"'),'Withdrawn guide section is linked');
assert(app.includes('id="story"'),'Original full brain showcase missing');
assert(app.includes('not an AI result')||app.includes('not represent measured brain activity'),'Model interpretation explanation missing');
assert.equal((app.match(/<Brand\s*\/>/g)||[]).length,2);
for(const asset of ['models/human-brain.glb','branding/ar-mend-logo-transparent.png','branding/favicon.svg','fonts/inter-regular.ttf'])assert(existsSync('dist/'+asset),'Missing deployed '+asset);
for(const match of readFileSync('dist/index.html','utf8').matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g))assert(existsSync('dist'+match[1]),'Broken built asset '+match[1]);
assert(!readFileSync('src/components/Footer.jsx','utf8').includes('block-up.tech'),'Removed footer website link returned');
for(const file of ['anatomy','wireframe','points'])assert(existsSync('dist/previews/'+file+'.jpg'),'Missing real model preview '+file);
for(const view of ['anatomy','wireframe','points']){const jpeg=readFileSync('dist/previews/'+view+'.jpg');const marker=jpeg.indexOf(Buffer.from([255,192]));const progressive=jpeg.indexOf(Buffer.from([255,194]));const start=marker>=0?marker:progressive;assert(start>=0,'Missing JPEG frame');assert.equal(jpeg.readUInt16BE(start+5),400);assert.equal(jpeg.readUInt16BE(start+7),400)}
console.log('PASS: original sections restored, contact removed, imports/assets/model/logo preserved, footer website link removed, three 400×400 real-model previews.');
