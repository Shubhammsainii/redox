import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',   // Ensure Vite looks at the correct root
  base: './',  // Fix relative paths in production
  build: {
    outDir: 'dist',  // Ensure correct output folder
  },
});
