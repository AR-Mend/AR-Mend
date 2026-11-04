import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({plugins:[react(),tailwindcss()],server:{allowedHosts:['flagstick-retool-overwrite.ngrok-free.dev']},build:{chunkSizeWarningLimit:1500}});
