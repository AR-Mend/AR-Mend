# AR MEND — model-led marketing site
English presentation of the owner's working AR MEND model, by BLOCK-UP. Tagline: Where AI meets healthcare. No invented clinical accuracy, diagnosis or product-integration claims.

## Approved direction
The supplied November 4 brief replaces the boxed purple/circuit design. Near-black #08060D, warm brain pink #E9A7A5, readable body #CFC9DC; purple reserved for controls and focus. A light #F0EEE8 Uses section changes the pace. All runtime tokens are owned by src/styles/design.css. Locally hosted Instrument Serif headlines and Inter body, 16–18px. System fallbacks keep text readable while fonts load. SIL Open Font Licenses are included in public/fonts.

## Structure
Sticky borderless header; large unframed model hero; one four-step How it works explanation with a sticky viewer; plain Uses rows; full-width visible disclaimer; five existing FAQ answers; a simple Contact demo; slim branded footer. Navigation derives the active section from its viewport position. No decorative circuits, feature cards, repeated view explanations, gray split headlines or tiny boxed labels.

## Viewer
Preserve public/models/human-brain.glb and the shared React Three Fiber scene. Both hero and guided viewer reuse the same model loader and scene. Modes: textured 0, wireframe 3, points 4, context 2. Scroll selects the closest step; explicit step buttons and appearance buttons remain available. Desktop viewer sticks beside the steps; mobile sticks above them. Controls include sensitive drag rotation, arrow keys, +/- zoom (75–200%), pause and reset. Auto rotation is slow and starts disabled for reduced motion. Lazy loading and recoverable error text reserve viewer space.

## Contact
Frontend-only form, no delivery service configured. Disclosure appears before submitting. Validation focuses the first invalid field; success says the message is ready to review and was not sent. Nothing is stored or transmitted. Real delivery requires a configured service.

## Assets and external links
Preserve the supplied transparent logo, tightly framed favicon and GLB. Model provenance remains in public/models/ASSET-NOTES.md. Footer uses the website in the approved brief, www.block-up.tech. Exact LinkedIn profile URL was not supplied; the labeled link opens a company search for Block Ultimate-Protection.

## Verification
Build and scripts/check.mjs; test view changes, zoom bounds/reset/pause, scroll-selected steps, active nav, mobile menu, FAQ, invalid and valid form states, mobile overflow and model loading. Keep medical copy prominent and do not imply that points show AI findings.
