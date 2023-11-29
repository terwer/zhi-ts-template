import {resolve} from "path"
import {defineConfig} from "vite"
import minimist from "minimist"
import {viteStaticCopy} from "vite-plugin-static-copy"
import {svelte} from "@sveltejs/vite-plugin-svelte"
import builtins from "builtin-modules"

const args = minimist(process.argv.slice(2))
const isWatch = args.watch || args.w || false
const isWindows = process.platform === "win32"
const distDir = "./dist"

console.log("isWatch=>", isWatch)
console.log("distDir=>", distDir)

export default defineConfig({
  plugins: [
    svelte(),

    viteStaticCopy({
      targets: [
        {
          src: "./README*.md",
          dest: "./",
        },
        {
          src: "./LICENSE",
          dest: "./",
        },
        {
          src: "./icon.png",
          dest: "./",
        },
        {
          src: "./preview.png",
          dest: "./",
        },
        {
          src: "./manifest.json",
          dest: "./",
        },
        {
          src: "./versions.json",
          dest: "./",
        },
        {
          src: "./src/i18n/**",
          dest: "./i18n/",
        },
      ],
    }),
  ],

  // https://github.com/vitejs/vite/issues/1930
  // https://vitejs.dev/guide/env-and-mode.html#env-files
  // https://github.com/vitejs/vite/discussions/3058#discussioncomment-2115319
  // 在这里自定义变量
  define: {
    "process.env.DEV_MODE": `"${isWatch}"`,
  },

  build: {
    // 输出路径
    outDir: distDir,
    emptyOutDir: false,

    // 构建后是否生成 source map 文件
    sourcemap: isWatch ? "inline" : false,

    // 设置为 false 可以禁用最小化混淆
    // 或是用来指定是应用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    // 不压缩，用于调试
    minify: !isWatch,

    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      // the proper extensions will be added
      fileName: "main",
      formats: ["cjs"],
    },
    rollupOptions: {
      plugins: [],

      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "obsidian",
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtins],

      output: {
        entryFileNames: "[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "styles.css"
          }
          return assetInfo.name
        },
      },
    },
  },
})
