import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { visualizer } from "rollup-plugin-visualizer";

export default {
  input: "src/index.tsx",

  plugins: [
    // We want to include package json dependencies.
    // By default rollup ignores them and hence this plugin is required
    nodeResolve({
      extensions: [".js", ".ts", ".jsx", ".tsx"],
    }),
    // Some packages we use as a dependency are CommonJS modules so we need a plugin
    // to deal with those
    commonjs(),
    // We use this plugin to emit types without needing to use tsc CLI
    typescript({
      tsconfig: "./tsconfig.json",
      // If set to false, this preset will not respect the emitting settings in
      // tsconfig.json
      noForceEmit: true,
    }),
    babel({
      // By defaut it doesnt work with typescript
      extensions: [".ts", ".tsx"],
      presets: [
        // Compile JSX -> Javascript
        "@babel/preset-react",
        // See https://babeljs.io/docs/babel-preset-env to know more on why we use this
        "@babel/preset-env",
        // The @rollup/preset-typescript dumps typescript outputs for type
        // So we use this preset so that babel can process it
        "@babel/preset-typescript",
      ],
      //plugins: ["@babel/plugin-transform-runtime"],
      // It's the default but they encourage to set it up explicitly
      babelHelpers: "bundled",
    }),
    // This plugin lets you visualize the resolving strategy of rollup
    visualizer({
      sourcemap: true,
    }),
  ],
  output: {
    dir: "lib/",
    format: "esm",
    sourcemap: true,
  },
  external: ["react", "react-dom", "react/jsx-runtime"],
  onwarn: function (message, warn) {
    // Module level directives are not supported in rollup as we build bundle
    // the code into one huge chunk so we ignore the warning messages because
    // we don't require those modules anyway
    // See https://react.dev/reference/rsc/use-client to know more
    if (/use client/.test(message)) return;
    warn(message);
  },
};
