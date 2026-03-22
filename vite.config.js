import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/quiz-app/',   // ✅ VERY IMPORTANT
  plugins: [react()],
})