# AR MEND design direction

## Purpose and audience
An English presentation website for students, educators, researchers, and visitors exploring spatial medical technology. Its job is to explain the concept and offer a tangible model study, without implying clinical capability.

## Creative direction
An anatomical study, rather than a futuristic dashboard. The supplied textured brain is the signature visual, set on a flat lavender specimen panel. Large asymmetric type, a single italic serif emphasis, dark graphite, and cool paper sections provide structure. The logo remains unchanged and transparent. There are no atmospheric particles, halos, neon lighting, card tilts, gradients, or glass panels.

## Runtime token ownership
Model B: src/styles/base.css is canonical; this document mirrors the accepted values. The split stylesheets consume its CSS variables. The 3D renderer reads the root violet token and uses separate neutral lighting values appropriate to the specimen view.

| Role | Runtime token | Value |
| --- | --- | --- |
| Dark surface and text | --ink | #121215 |
| Paper section | --paper | #F2F0F5 |
| Specimen panel | --surface | #E3DCE9 |
| Brand lavender on dark | --accent | #C77DFF |
| Accessible purple on light | --violet | #6838A2 |
| Main dark-surface text | --white | #F8F7F9 |
| Secondary dark-surface text | --gray | #B3B0B8 |
| Dark rules | --line | #343337 |

Light sections override semantic --text, --muted, --border, --accent, and --focus. Their body text is #121215 or #65616D. Avoid independent colors for controls that already have semantic tokens.

## Typography and spacing
Arial/Helvetica is the working sans serif. Georgia italic is reserved for one meaningful phrase in a display heading and the application research question. Body copy is 14–16px where possible; annotations are subordinate and never the only description of an action. Desktop section spacing is 100px, tablet 80px, mobile 65px. Horizontal gutters scale from 24px to 100px. Buttons are rectangular and at least 44px high where they are primary actions. Small scene controls remain individually accessible with visible focus.

## Page sequence
Hero and specimen controls; project summary; approach with surface/structure/abstraction definitions; seven-view model study; integrated AI/AR/VR guide; proposed process; application accordion; scope; practical questions; contact; typographic footer. Existing section files remain owners of their content. PerspectiveSection is composed within AboutSection; TechnologyGuide is composed within FeaturesSection. This avoids repeating full sections without discarding their important information.

## Interaction and motion
Native anchor navigation and active section ownership. A solid mobile disclosure menu supports Escape and focus return. The hero retains Anatomy, Wireframe, and Neural views and adds explicit keyboard-operable rotation arrows. Pointer parallax is slight; automatic spinning and floating are removed. The seven-view study uses a shorter scrubbed sequence only at widths of at least 1100px and heights of at least 780px. Other viewports use natural document flow with all seven manual controls. Reduced motion disables smoothing, pinning, pointer parallax and eased rotation, and CSS transitions. Brief, once-only reveals are limited to section labels. The canvas uses demand rendering: view changes and pointer/rotation updates request frames, then rendering stops when the view settles. No page-transition effects on this single-page site.

## Assets and scope
The supplied GLB and its embedded textures remain in public/models/human-brain.glb. The logo uses public/branding/ar-mend-logo-transparent.png in the shared Brand and favicon. Original source artwork and model provenance remain available. No stock photography or generated anatomical illustration is added. No external fonts are loaded. No medical data is uploaded, no AI inference runs, and no dedicated AR/VR system is integrated. Contact remains a local validation demo with no transmission or storage. No clinical validation is claimed.

## Verification
Review each section at desktop, tablet, and narrow mobile widths. Check 3D modes and rotation, seven study controls, technology selection, accordion and FAQ, form errors and success, all navigation targets, menu Escape/focus return, overflow, focus visibility, and reduced-motion CSS. Run the production build, project checks, and a source identifier/import scan. Document infrastructure limits instead of inferring untested behavior.

