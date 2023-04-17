import { defineConfig } from 'vite'
import path from 'path';
import vue from "@vitejs/plugin-vue";


export default defineConfig({
    optimizeDeps: {
        exclude: ['vue-demi']
    },    
    plugins: [vue()],
    build: {
        lib: {
        entry: path.resolve(__dirname, 'index.js'),
        name: 'ReadMoreTruncate',
        fileName: (format) => `read-more-truncate.${format}.js`
        },
        rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
            vue: 'Vue'
            }
        }
        }
  }
})