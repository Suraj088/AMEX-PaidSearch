const { basename, extname, join, dirname, sep } = require('path');

/**
 * Takes a file path and replaces the extension
 *
 * @param {string} filePath
 * @param {string} ext
 * @returns {string}
 */
function replaceExtension(filePath, ext) {
  if (typeof filePath !== 'string') {
    return filePath;
  }

  if (filePath.length === 0) {
    return filePath;
  }

  var newFileName = basename(filePath, extname(filePath)) + ext;
  var newFilepath = join(dirname(filePath), newFileName);

  if (startsWithSingleDot(filePath)) {
    return '.' + sep + newFilepath;
  }

  return newFilepath;
}

function startsWithSingleDot(filePath) {
  var first2chars = filePath.slice(0, 2);
  return first2chars === '.' + sep || first2chars === './';
}

module.exports = {
  replaceExtension,
};
