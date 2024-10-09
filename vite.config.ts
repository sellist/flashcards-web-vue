import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue'
import {PrimeVueResolver} from "@primevue/auto-import-resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(
          {
              template: {
                    compilerOptions: {
                        isCustomElement: tag => tag.startsWith('NavBar')
                    }
              }
          }
      ),
      Components({
        resolvers: [PrimeVueResolver()]
      })
  ],
})
