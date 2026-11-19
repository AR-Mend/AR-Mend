# AR MEND
React/Vite marketing site for the working AR MEND model by BLOCK-UP.

Run pnpm dev for localhost:5173. Build with pnpm build and verify with node scripts/check.mjs. Static output is dist/. Hosting identity remains in .openai/hosting.json and the allowed ngrok host is preserved in vite.config.js.

App.jsx composes the home page from Navbar, HeroSection, AboutSection, FeaturesSection, StorytellingSection, WorkflowSection, FAQSection and Footer. Dedicated `/contact/`, `/privacy-policy/` and `/terms-and-conditions/` pages are also included. The Contact page links directly to email and phone; it does not use a contact form.

The existing shared lazy viewer and src/scenes/BrainScene.jsx preserve the supplied GLB, sensitive drag rotation, keyboard support, zoom bounds, pause and reset. The full brain showcase changes stages on desktop scroll and offers stage buttons on mobile. Reduced motion disables auto rotation and pinning.

design.css contains base styles; reference.css provides the current logo-purple futuristic template. Inter is hosted locally. Feature previews in public/previews are 400×400 captures rendered from the actual GLB, not stock or generated illustrations. ModelReadout uses the source model's true geometry counts. The supplied model and asset provenance remain in public/models/.

The BLOCK-UP website link is removed from the footer. The credit remains plain text and the LinkedIn link opens a company search because no exact company profile URL was supplied.
