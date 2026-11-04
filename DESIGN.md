# AR MEND — current design
An English marketing presentation for the working AR MEND model by BLOCK-UP. Preserve the supplied brain GLB and logo. No invented diagnostic, clinical accuracy or performance claims.

## Current approved direction
The owner withdrew the earlier serif / light-section / four-step redesign brief. Keep the latest five futuristic image references instead, with the original About, Features, full brain showcase, Workflow, Applications and FAQ structure. There is no Contact form or page and no separate disclaimer band.

## Visual system
Inter typography, black/navy atmosphere, lavender and violet accents from the logo, glass-style model panels and subtle orbital/circuit details. No cyan accents. Navigation spans the full page width and includes active dots and animated hover lines. src/styles/design.css owns the base primitives; reference.css owns the latest reference styling and final token overrides. These files are imported in that order by index.css. Body copy stays readable and mobile retains natural page scrolling.

## Brain experience
Use public/models/human-brain.glb with the existing React Three Fiber model/scene. Hero rotates slowly; the original full-screen seven-stage showcase is restored, with drag, arrow keys, zoom, pause and reset controls. Desktop scroll changes stages; mobile uses explicit stage buttons. Reduced motion disables automatic rotation and pinned storytelling. The scene keeps normalized geometry and fits the camera to the actual maximum vertex radius.

## Template panels
ModelReadout uses real source metadata from model-stats.json: 2,605 vertices and 4,850 triangles, with actual source size and current render mode. No activity percentages, diagnostic labels or synthetic latency numbers. ModelPreview uses 400×400 snapshots rendered directly from the supplied model in textured, wireframe and points modes; CSS tints the static previews to the logo palette. The live model remains genuinely interactive.

## Footer and copy
Restore the compact multi-column footer from the references. Remove the BLOCK-UP website link entirely; keep the LinkedIn company-search link and plain BLOCK-UP credit. The exact LinkedIn profile URL was not supplied. Retain working-model marketing copy and explain that surface point graphics are not measured neural activity. The original medical note remains readable in the FAQ. Do not reintroduce frontend-concept or future-prototype positioning.

## Assets and verification
Locally hosted Inter with SIL license, original transparent logo, cropped SVG favicon and existing model provenance in ASSET-NOTES.md. No remote asset dependencies. Verify build, check.mjs, restored stage controls, preview images, full-width purple navigation, mobile overflow and footer destinations. Do not publish an intermediate withdrawn design.
The compact model-data panel is removed from the hero; the brain and appearance switcher are centered. The full viewer keeps its separate information panel.
Hero framing uses a viewport-based stage height and a circle bounded by both available width and height, including its outer halo. Desktop hero fills the viewport below the navbar; mobile keeps natural content height without clipped decoration.
All model-data readout panels are now removed, including the full brain showcase panel. The full viewer is centered across the available width.
