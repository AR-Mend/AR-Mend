import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const app=readFileSync('src/main.jsx','utf8');
for(const id of ['home','about','features','workflow','applications','contact'])assert(app.includes(`id="${id}"`),`Missing section ${id}`);
for(const asset of ['src/styles.css','src/scenes/BrainScene.jsx','README.md','dist/index.html'])assert(existsSync(asset),`Missing ${asset}`);
for(const asset of [...readFileSync('dist/index.html','utf8').matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)])assert(existsSync('dist'+asset[1]),`Broken asset ${asset[1]}`);
assert(app.includes('No messages are sent or stored.'));
assert(app.includes('aria-invalid'));
console.log('PASS: six navigation targets, production assets, demo disclosure, and form error semantics.');
