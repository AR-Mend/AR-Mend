# AR MEND design direction

An English presentation site for researchers, educators, and curious visitors. Its purpose is to explain a conceptual neurotechnology project.

## Visual system
The supplied AR MEND brain-and-glasses logo defines the palette. Runtime tokens live in src/styles/base.css: ink #050307, secondary surface #100A19, accent lavender #C77DFF, violet #8E24D6, white #FAF7FF, muted text #B4A6C4. The 3D scene reads the primary accent and violet tokens from CSS; other lighting colors are calibrated lavender variations. Display typography uses Arial with tight tracking; utility labels use monospace. Large asymmetric hero, fine instrument rules, generous section spacing. The signature is a textured brain suspended inside a restrained purple spatial coordinate frame. Maintain readable light accents against black rather than using the logo's dark purple for body text.

## Behavior
Real anchor navigation, active section indicator, mobile disclosure menu, keyboard-accessible viewing modes, native FAQ disclosures. There is no contact page or form. The reference-led footer uses a large transparent logo, four link columns, purple circuit paths, a faint brain outline, and a BLOCK-UP credit. Footer links point to existing sections and the supplied partner website. No invented clinical claims or statistics. Reduced motion disables smooth scrolling, continuous scene motion, and pinned storytelling. Mobile retains the brain and uses natural document flow.

## Content progression
After the vision, explain spatial visualization with an editorial two-column section and an illustrative layered diagram. After the feature overview, provide a selectable AI/AR/VR guide covering each concept, a hypothetical scenario, and the current demo's limits. After applications, distinguish working frontend capabilities from possible future research steps. Use the existing palette and type scale in src/styles/content.css. Avoid implying model inference, scan upload, room tracking, headset support, or clinical validation. FAQ includes practical model controls, scan-upload scope, and future-prototype questions.

## Assets
The hero and storytelling use the user's human-brain.zip GLB, with embedded textures and core glTF material conversion. Other diagrams are generated locally. The supplied original is preserved as public/branding/ar-mend-logo.jpg. The transparent-background public/branding/ar-mend-logo-transparent.png is displayed through a tightly framed SVG viewBox in the shared header/footer Brand component and used as the favicon. No network-loaded fonts. No author or license was included in the supplied model archive; provenance is recorded in public/models/ASSET-NOTES.md. The model is a visualization and not an anatomical reference.



## Brain interaction refinements
The shared scene supports responsive drag rotation (0.036 radians per horizontal pixel, 0.024 vertically), arrow keys, and Reset view. Touch retains vertical page scrolling. Camera fitting reserves a conservative bounding sphere (3.5 units; 3.8 for the paired view) around the complete rotating model at every aspect ratio, including the brainstem. Spatial annotations have neutral surface-landmark labels (illustrative, not anatomical claims); the immersive stage shows a coordinate workspace; the final stage compares textured and wireframe models side by side. All stages retain the complete source geometry.

Footer density: compact vertical padding, a 135px desktop / 120px mobile logo, and tighter link spacing preserve the reference design without a tall closing section.

Brain motion and zoom: slow automatic rotation (0.12 radians/second) pauses during dragging and has a visible pause toggle. Reduced-motion preferences start rotation paused. Zoom buttons and +/- keys support 75–200%; Reset view restores 100% and the initial angle.

Hero viewer: no drag/zoom/pause/reset toolbar; the brain rotates slowly automatically and retains manual rotation. The storytelling viewer keeps its full controls.
Footer-led framing: black boxed surfaces, violet borders, lavender square accents and subtle circuit corners now connect every section. Panel tokens live in brand-panels.css. The rotating brain, content and compact footer remain.
Navigation uses a borderless translucent dark background with backdrop blur. Links indicate hover and active state through lavender text; keyboard focus remains visible.
Navigation active state includes a small lavender dot; hover and keyboard focus animate a fine underline. Reduced motion disables the transition.
