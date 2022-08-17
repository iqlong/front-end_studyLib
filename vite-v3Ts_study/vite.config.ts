import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import vueJsx from '@vue/babel-plugin-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
