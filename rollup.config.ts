import { defineConfig } from "rollup";
import Inject from "@rollup/plugin-inject";
import Typescript from "@rollup/plugin-typescript";
import Alias from "@rollup/plugin-alias";
import Dev from 'rollup-plugin-dev'
import Html from '@rollup/plugin-html'
import Path from "path";

export default defineConfig({
  input: "./project/index.ts",
  output: {
    format: "iife",
    dir: "./build",
  },
  plugins: [
    Alias({
      entries: [
        { find: "project", replacement: Path.resolve(__dirname, "project") },
      ],
    }),
    Typescript(),
    Inject({
      ReactDomClient: "react-dom",
      React: "react",
    }),
    Dev()
  ],
});
