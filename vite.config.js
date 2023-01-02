import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        name: 'Loyalty Cards',
        short_name: 'My Cards',  
      },
    }),
  ],
  base: './',
})
