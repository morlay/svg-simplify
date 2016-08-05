import path from 'path';
import webpack from 'webpack';
import deasync from 'deasync';
import MemoryFS from 'memory-fs';

const runWebpackSync = (filename, webpackConfig) => {
  let result;

  const fs = new MemoryFS();
  const destDir = path.join(__dirname, '../temp');
  const name = 'result.js';

  const compiler = webpack({
    ...webpackConfig,
    entry: filename,
    output: {
      ...webpackConfig.output,
      libraryTarget: 'commonjs2',
      path: destDir,
      filename: name,
    },
  });

  compiler.outputFileSystem = fs;

  compiler.run((err) => {
    if (err) {
      throw err;
    }
    const resultFilename = path.resolve(destDir, name);

    if (fs.existsSync(resultFilename)) {
      result = String(fs.readFileSync(resultFilename));
    } else {
      result = '';
    }
  });

  deasync.loopWhile(() => result === undefined);

  return result;
};

export default runWebpackSync;
