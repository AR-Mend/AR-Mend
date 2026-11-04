import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import path from 'node:path';
function sourceFiles(directory){return readdirSync(directory,{withFileTypes:true}).flatMap(entry=>{const file=path.join(directory,entry.name);return entry.isDirectory()?sourceFiles(file):/\.(jsx|js)$/.test(file)?[file]:[]})}
const files=sourceFiles('src');
const app=files.map(file=>readFileSync(file,'utf8')).join('\n');
for(const id of ['home','about','features','workflow','applications','faq'])assert(app.includes(`id="${id}"`),`Missing section ${id}`);
for(const asset of ['src/App.jsx','src/styles/index.css','src/scenes/BrainScene.jsx','README.md','dist/index.html'])assert(existsSync(asset),`Missing ${asset}`);
for(const asset of [...readFileSync('dist/index.html','utf8').matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)])assert(existsSync('dist'+asset[1]),`Broken asset ${asset[1]}`);
assert(!app.includes('href="#contact"'),'Removed contact section still linked');
assert(!app.includes('id="contact"'),'Contact form still rendered');
assert(existsSync('dist/branding/ar-mend-logo-transparent.png'),'Missing deployed transparent logo');
assert(!app.includes('/branding/ar-mend-logo.jpg'),'Opaque logo still used by a component');
assert.equal((app.match(/<Brand\s*\/>/g)||[]).length,2,'Header and footer must share the logo');
const css=readdirSync('src/styles').filter(file=>file.endsWith('.css')).map(file=>readFileSync(path.join('src/styles',file),'utf8')).join('\n');
assert(css.includes('--accent:#c77dff'),'Logo lavender accent missing');
assert(!/00e5ff|397bff/i.test(css),'Old cyan theme remains');
console.log('PASS: six navigation targets, production assets, footer targets, and contact removal.');
console.log('PASS: shared header/footer logo, deployed image, and purple theme.');
for(const file of files){const text=readFileSync(file,'utf8');for(const match of text.matchAll(/(?:from\s*|import\s*\()(['"])(\.[^'"]+)\1/g)){const target=path.resolve(path.dirname(file),match[2]);assert(existsSync(target),`Broken import in ${file}: ${match[2]}`)}}
console.log('PASS: every local source import resolves after the file split.');
