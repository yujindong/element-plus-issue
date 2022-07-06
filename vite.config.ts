import path from "path";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// auto import 插件
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/],
      reactivityTransform: true
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue/macros"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables"],
      vueTemplate: true
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
      resolvers: [ElementPlusResolver({ importStyle: "sass", ssr: true })]
    }),

  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 按需引入element-plus 覆盖scss变量
        additionalData: `@use "src/scss/element/variable.scss" as *;`
      }
    }
  },
});
