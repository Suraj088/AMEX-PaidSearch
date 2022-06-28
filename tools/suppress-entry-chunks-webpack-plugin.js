class SuppressExtractedTextChunks {
  constructor() {
    // Noop
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('SuppressExtractedTextChunks', (compilation) => {
      // find which chunks have css only entry points
      const cssOnlyChunks = [];
      const entryPoints = compilation.options.entry;
      // determine which entry points are composed entirely of css files
      for (let entryPoint of Object.keys(entryPoints)) {
        let entryFiles = entryPoints[entryPoint];
        // when type of entryFiles is not array, make it as an array
        entryFiles = entryFiles instanceof Array ? entryFiles : [entryFiles];
        if (entryFiles.every((el) => el.match(/\.(css|scss|sass|less|styl)$/) !== null)) {
          cssOnlyChunks.push(entryPoint);
        }
      }
      // Remove the js file for suppressed chunks
      compilation.hooks.afterSeal.tap('SuppressExtractedTextChunks', () => {
        compilation.chunks
          .filter((chunk) => cssOnlyChunks.indexOf(chunk.name) !== -1)
          .forEach((chunk) => {
            let newFiles = [];
            chunk.files.forEach((file) => {
              if (file.match(/\.js(\.map)?$/)) {
                // remove js files
                delete compilation.assets[file];
              } else {
                newFiles.push(file);
              }
            });
            chunk.files = newFiles;
          });
      });
    });
  }
}

module.exports = {
  SuppressExtractedTextChunks,
};
