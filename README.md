# AR MEND
Model-led React/Vite presentation for BLOCK-UP.

## Run
Install dependencies with pnpm, then run pnpm dev. The development URL is http://127.0.0.1:5173/. The existing ngrok hostname is allowed in vite.config.js.

## Build and verify
pnpm build
node scripts/check.mjs
Output: dist/. Static hosting settings remain in .openai/hosting.json.

## Source
src/App.jsx composes Navbar, HeroSection, HowItWorks, UsesSection, FAQSection, ContactSection and Footer.
src/components/shared contains the shared logo, lazy viewer boundary, loading/error state and appearance switcher.
src/scenes/BrainScene.jsx preserves the supplied model, camera fitting, rotation, zoom and keyboard controls.
src/styles/design.css owns all design tokens and responsive styles; index.css imports it.

The four-step viewer uses native sticky positioning and scroll-selected states. No animation library is required for page layout. Reduced motion disables smooth scrolling and initial automatic rotation.

## Assets
The supplied GLB is public/models/human-brain.glb. Its provenance is documented in ASSET-NOTES.md. Keep the supplied logo in public/branding; favicon.svg tightly frames it for browser tabs.

## Contact
The form is a local demo. It validates input and displays a review confirmation; it does not send or store data. Connect a delivery service before using it for enquiries.
