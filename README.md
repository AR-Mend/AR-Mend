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

The production output is `dist/`. Deploy this directory to any static host (Cloudflare Pages, Netlify, Vercel, or Sites). No server environment variables are required. The contact form has been removed. Footer links connect to page sections and the partner website.

## Brain assets and licensing
The supplied original is preserved in `public/branding/ar-mend-logo.jpg`. Its transparent-background version, `public/branding/ar-mend-logo-transparent.png`, is used by the shared header/footer Brand component. The site palette follows its black, violet, and lavender colors. Primary CSS accent tokens also drive the 3D lighting and wireframe accent. The favicon uses the same logo image.

The hero and storytelling now use the textured GLB supplied in human-brain.zip, served from `public/models/human-brain.glb`. Its 2,605 vertices and 4,850 triangles retain the embedded diffuse and normal textures. A compatibility conversion replaces the legacy specular/gloss extension with core glTF shading. The model is a visualization, not a medically accurate anatomical reference. The archive did not include author or license information; provenance is recorded in `public/models/ASSET-NOTES.md`. Third-party dependencies retain their respective package licenses.

To replace the model again, place a self-contained, core glTF-compatible GLB at `public/models/human-brain.glb`. `Model` in `src/scenes/BrainScene.jsx` loads it through Drei useGLTF, clones materials per scene, and centers/scales its bounds automatically. Adjust the surrounding group rotation if a replacement has different orientation. Preserve its required license and attribution. For the original supplied archive, `node scripts/prepare-brain.mjs` converts legacy materials after extracting the GLB.

## Motion and accessibility
Lenis is the single smooth-scroll controller and updates GSAP ScrollTrigger through its ticker; cleanup removes the ticker and scroll controller. Desktop storytelling pins and scrubs seven stages. Touch/narrow layouts use natural flow and explicit stage buttons. Reduced motion disables pinning, smoothing, continuous scene updates, and CSS transitions. Native links, labels, FAQ details, visible focus, validation errors, live status, and a skip link support keyboard and assistive technology users.

The 3D scene is lazy loaded, limits pixel ratio to 1.5, uses restrained bloom, and stops continuous frames when offscreen. WebGL failures use a static icon fallback. GLB geometry and textures are cached across scenes; scene-specific material clones are disposed on unmount. For lower-powered devices, disable postprocessing or reduce texture resolution. Browser and device-specific WebGL support still varies.

## Project map
The source is split by responsibility:

```text
src/
  main.jsx                  Application entry point
  App.jsx                   Page composition
  components/               One file per page section
    shared/                 Brand, buttons, brain loading and fallback
  hooks/                    Reduced motion, smooth scrolling, reveals
  data/navigation.js        Shared navigation labels
  lib/animation.js          GSAP and ScrollTrigger setup
  scenes/BrainScene.jsx     Textured 3D brain rendering
  styles/
    index.css               Stylesheet entry and import order
    base.css                Theme tokens and common styles
    navigation.css          Header and navigation
    hero.css                Hero and technology strip
    about.css               Vision section
    features.css            Feature cards
    storytelling.css        Pinned story section
    workflow.css            Workflow steps
    applications.css        Application panels
    faq.css                 FAQ
    footer.css              Footer
    utilities.css           Fallback and skip link
    responsive.css          Canvas sizing, breakpoints, logo sizing
    content.css             Additional explanatory sections
```

`DESIGN.md` records design intent. Run `node scripts/check.mjs` after a build to check local imports, section targets, assets, and theme preservation. The file split preserves the existing component logic and CSS rule order.

## Scope
No clinical validation is claimed. This project is not a medical device, does not provide diagnosis or medical advice, and does not replace professional evaluation. The separate referenced project-plan attachment was not provided; implementation follows the full pasted specification.


