# AR MEND

Interactive React/Vite presentation of conceptual neurotechnology. Frontend only; no AI inference, patient data processing, backend, or AR/VR integration.

## Run
Install Node.js 22+ and pnpm, then run from this folder:

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The production output is `dist/`. Deploy this directory to any static host (Cloudflare Pages, Netlify, Vercel, or Sites). No server environment variables are required. Optional: set `VITE_CONTACT_EMAIL` in `.env` before building to display your actual contact email. The form validates locally and never transmits or stores data.

## Brain assets and licensing
The original procedural brain in `src/scenes/BrainScene.jsx` consists of bilateral sculpted ellipsoids, winding tubular folds, and a simplified stem. It is a stylized visualization, not a medically accurate anatomical reference. All graphics are generated in code; no external images, fonts, or 3D assets are used. Third-party dependencies retain their respective package licenses.

To replace the brain with a licensed GLB: place the optimized asset in `public/models/brain.glb`, import `useGLTF` from Drei, load it in `Model`, and replace the procedural meshes with `<primitive object={scene} />`. Adjust scale and orientation to fit the current camera. Retain the asset author's required attribution and license. Draco-compressed files need a matching decoder configuration. Keep surface/wireframe mode materials compatible with replacement meshes.

## Motion and accessibility
Lenis is the single smooth-scroll controller and updates GSAP ScrollTrigger through its ticker; cleanup removes the ticker and scroll controller. Desktop storytelling pins and scrubs seven stages. Touch/narrow layouts use natural flow and explicit stage buttons. Reduced motion disables pinning, smoothing, continuous scene updates, and CSS transitions. Native links, labels, FAQ details, visible focus, validation errors, live status, and a skip link support keyboard and assistive technology users.

The 3D scene is lazy loaded, limits pixel ratio to 1.5, uses restrained bloom, and stops continuous frames when offscreen. WebGL failures use a static icon fallback. Geometry is generated locally and disposed on unmount. For lower-powered devices, disable postprocessing or reduce fold/tube segmentation. Browser and device-specific WebGL support still varies.

## Project map
`src/main.jsx` contains reusable presentation sections and form/navigation behavior. `src/scenes/BrainScene.jsx` owns 3D rendering. `src/styles.css` owns visual tokens and responsive styles. `DESIGN.md` records design intent.

## Scope
No clinical validation is claimed. This project is not a medical device, does not provide diagnosis or medical advice, and does not replace professional evaluation. The separate referenced project-plan attachment was not provided; implementation follows the full pasted specification.
