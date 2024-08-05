# react-lib-builds

## Setup

```bash
git clone git@github.com:kidrahahjo/react-lib-builds.git

cd react-lib-builds

# Install the required dependencies
yarn
```

## Build the Project

We use `rollup` to compile javascript, and the type definitions.

To build the project locally, run

```bash
yarn build
```

To see what plugins we use for rollup, see [rollup.config.mjs](./rollup.config.mjs)

## Visualize What's Getting Build

We use the [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer) plugin to visualize what we are build.
When you run `yarn build`, it will output a `stats.html` file.
Open that file to visualize the results.
