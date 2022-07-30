import { defineConfig } from "tsup";

const isProduction = process.env["NODE_ENV"] === "production";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  minify: isProduction,
  outDir: "./dist",
  sourcemap: true,
});
