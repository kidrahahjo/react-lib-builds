import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.tsx",
  plugins: [
    // Rollup defaults to resolving only js / jsx files for imports
    // So we need to use this plugin to let it know
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
      // It's the default but they encourage to set it up explicitly
      babelHelpers: "bundled",
      // To prevent local babelrc from playing its tricks
      babelrc: false,
    }),
  ],
  output: {
    dir: "lib/",
    format: "esm",
  },
};
