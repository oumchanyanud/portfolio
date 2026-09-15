import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Deployed on Vercel at the domain root, so no base path needed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
