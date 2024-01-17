/// <reference types="vitest" />

import { resolve } from "path"
import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"
import dts from "vite-plugin-dts"
import minimist from "minimist"
import livereload from "rollup-plugin-livereload"
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel"

const args = minimist(process.argv.slice(2))
const isWatch = args.watch || args.w || false
const devDistDir = "./dist"
const distDir = isWatch ? devDistDir : "./dist"

console.log("isWatch=>", isWatch)
console.log("distDir=>", distDir)

export default defineConfig({
  plugins: [
    dts(),

    viteStaticCopy({
      targets: [
        {
          src: "README.md",
          dest: "./",
        },
        {
          src: "package.json",
          dest: "./",
        },
      ],
    }),
  ],

  build: {
    // 输出路径
    outDir: distDir,
    emptyOutDir: false,

    minify: false,
    // 构建后是否生成 source map 文件
    sourcemap: false,

    lib: {
      // 也可以是文件夹或者多个个入口数组
      entry: resolve(__dirname, "src/index.ts"),
      name: "HelloWordPlugin",
      formats: ["iife"],
    },
    rollupOptions: {
      plugins: [
        ...(isWatch
            ? [
              livereload(devDistDir),

              // https://github.com/rollup/plugins/tree/master/packages/babel
              babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
              }),
            ]
            : [
              // https://github.com/rollup/plugins/tree/master/packages/babel
              babel({
                exclude: "node_modules/**",
              }),
            ]),
      ],
      // 排除不希望被打包进去的类库
      external: [],
      output: {
        entryFileNames: "[name].js",
        plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"], allowAllFormats: true })],
      },
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
})