import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts : ["5173-madesh035-sample-r2fksgkzhi.app.codeanywhere.com","localhost"]
  },
  plugins: [react()],
})
