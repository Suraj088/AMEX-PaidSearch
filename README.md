# American Express - Paid Search Landing Page

## Getting started

First, install dependencies using `npm`. The recommended command is:

```sh
# Install a project with a clean slate
npm ci
```

To build the project, simply run `npm run build`. That will generate all necessary files for
publishing within the `dist/` directory.

A brief overview on file structure:

- The main source files are located under the `src/` directory.
- The build process is mainly contained in the `webpack.config.js` and is complemented by the files
  in the `tools/` directory.
- Build output will be generated in the `dist/` directory, which is untracked.
- Nothing outside of the `dist/` directory is meant for publishing. All necessary files should be
  generated or copied there.

## Contributing

Please refer to `CONTRIBUTING.md` for a more in-depth description on this project's structure to
help underhand how to contribute to it.
