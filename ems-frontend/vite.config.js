import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // to change the server port from default to 3000
  server :{
    port: 3000,
    open:true
  }
})
