import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // Configurações do Workbox
      },
      devOptions: {
        enabled: true // Ativa o Service Worker em modo de desenvolvimento
      },
      manifest: {
        short_name: 'CONDEN 3 - Poc Notificação',
        name: 'CONDEN 3 - Poc Notificação',
        description: 'App para demonstração e prova de conceito.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3e4eb8',
        icons: [
          {
            src: '/img/icons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    },
    port: 4000 // Porta desejada
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
