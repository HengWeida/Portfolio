import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Two plugins: react (so Vite understands JSX) and tailwindcss (so Tailwind classes work)
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
