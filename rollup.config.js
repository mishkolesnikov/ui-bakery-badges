
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import packageJSON from "./package.json";
import postcss from 'rollup-plugin-postcss'

const input = "./src/lib/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      name: "BadgesLib",
      globals: {
        react: "React",
      },
    },
    external: ['react', 'react-dom'],
    plugins: [
      postcss({
        plugins: []
      }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled'
      }),
      resolve(),
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      name: "BadgesLib",
      globals: {
        react: "React"
      }
    },
    external: ['react', 'react-dom'],
    plugins: [
      postcss({
        plugins: []
      }),
      babel({
        exclude: "node_modules/**"
      }),
      resolve(),
      terser()
    ]
  }
];