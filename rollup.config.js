import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: ["src/index.ts", "src/components/Button.tsx"],
  output: {
    dir: "dist",
    format: "esm",
    name: "firstpackage",
  },
  external: ["react", "react-dom"],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
