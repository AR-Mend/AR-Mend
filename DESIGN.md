# AR MEND design direction

An English presentation site for researchers, educators, and curious visitors. Its purpose is to explain a conceptual neurotechnology project.

## Visual system
The supplied AR MEND brain-and-glasses logo defines the palette. Runtime tokens live in src/styles/base.css: ink #050307, secondary surface #100A19, accent lavender #C77DFF, violet #8E24D6, white #FAF7FF, muted text #B4A6C4. The 3D scene reads the primary accent and violet tokens from CSS; other lighting colors are calibrated lavender variations. Display typography uses Arial with tight tracking; utility labels use monospace. Large asymmetric hero, fine instrument rules, generous section spacing. The signature is a textured brain suspended inside a restrained purple spatial coordinate frame. Maintain readable light accents against black rather than using the logo's dark purple for body text.

## Behavior
Real anchor navigation, active section indicator, mobile disclosure menu, keyboard-accessible viewing modes, native FAQ disclosures. Contact is a clearly labeled local demo; no message is transmitted. No invented clinical claims or statistics. Reduced motion disables smooth scrolling, continuous scene motion, and pinned storytelling. Mobile retains the brain and uses natural document flow.

## Content progression
After the vision, explain spatial visualization with an editorial two-column section and an illustrative layered diagram. After the feature overview, provide a selectable AI/AR/VR guide covering each concept, a hypothetical scenario, and the current demo's limits. After applications, distinguish working frontend capabilities from possible future research steps. Use the existing palette and type scale in src/styles/content.css. Avoid implying model inference, scan upload, room tracking, headset support, or clinical validation. FAQ includes practical model controls, scan-upload scope, and future-prototype questions.

## Assets
The hero and storytelling use the user's human-brain.zip GLB, with embedded textures and core glTF material conversion. Other diagrams are generated locally. The supplied original is preserved as public/branding/ar-mend-logo.jpg. The transparent-background public/branding/ar-mend-logo-transparent.png is displayed through a tightly framed SVG viewBox in the shared header/footer Brand component and used as the favicon. No network-loaded fonts. No author or license was included in the supplied model archive; provenance is recorded in public/models/ASSET-NOTES.md. The model is a visualization and not an anatomical reference.


