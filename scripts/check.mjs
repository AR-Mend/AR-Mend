import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import path from 'node:path';
function sourceFiles(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?sourceFiles(path.join(dir,e.name)):/\.(jsx|js)$/.test(e.name)?[path.join(dir,e.name)]:[])}
const files=sourceFiles('src'),app=files.map(f=>readFileSync(f,'utf8')).join('\n');
for(const id of ['model','how-it-works','viewer','uses','faq','contact'])assert(app.includes('id="'+id+'"'),'Missing '+id);
for(const file of files)for(const match of readFileSync(file,'utf8').matchAll(/(?:from\s*|import\s*\()(['"])(\.[^'"]+)\1/g))assert(existsSync(path.resolve(path.dirname(file),match[2])),'Broken import: '+file);
assert(app.includes('Nothing is sent or stored.'));
assert(app.includes('aria-invalid'));
assert(app.includes('This demo has not sent it.'));
assert(app.includes('Its colors and points don’t show a diagnosis or an AI finding.'));
assert.equal((app.match(/<Brand\s*\/>/g)||[]).length,2);
for(const asset of ['models/human-brain.glb','branding/ar-mend-logo-transparent.png','branding/favicon.svg','fonts/instrument-serif.ttf','fonts/inter-regular.ttf'])assert(existsSync('dist/'+asset),'Missing deployed '+asset);
for(const match of readFileSync('dist/index.html','utf8').matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g))assert(existsSync('dist'+match[1]),'Broken built asset '+match[1]);
assert(!readFileSync('src/App.jsx','utf8').includes('Features'));
console.log('PASS: section destinations, local imports, preserved model/logo/favicon, local fonts, built assets, visible disclaimer and truthful contact demo.');
