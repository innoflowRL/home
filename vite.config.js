import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Performance optimizations
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion'],
          'icons': ['react-icons'],
        }
      }
    },
    // Minify CSS and JS
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Target modern browsers
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps for production debugging
    sourcemap: process.env.NODE_ENV !== 'production' ? true : false,
    // Optimize images
    assetsInlineLimit: 4096,
  },
  
  // Optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: ['aos'], // Lazy load AOS when needed
  },
  
  // Server config for development
  server: {
    // Enable compression
    middlewareMode: false,
    // CORS for development
    cors: true,
  },
})
