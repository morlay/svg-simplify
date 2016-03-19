import path from 'path';
import webpack from 'webpack';
import deasync from 'deasync';
import _ from 'lodash';
import MemoryFS from 'memory-fs';

const unnecessaryPluginList = _.values(webpack.optimize);

const isPluginInstanceOf = (pluginList, targetPlugin) =>
  _.reduce(pluginList, (result, Plugin) => result || (targetPlugin instanceof Plugin), false);

const removeUnnecessaryPlugins = (plugins) =>
  _.filter(
    plugins,
    (pluginInstance) => !isPluginInstanceOf(unnecessaryPluginList, pluginInstance)
  );

const runWebpackSync = (filename, webpackConfig) => {
  let result;

  const fs = new MemoryFS();
  const destDir = path.join(__dirname, '../temp');
  const name = 'result.js';

  const compiler = webpack({
    ...webpackConfig,
    entry: filename,
    plugins: removeUnnecessaryPlugins(webpackConfig.plugins),
    output: {
      ...webpackConfig.output,
      libraryTarget: 'commonjs2',
      path: destDir,
      filename: name,
    },
    externals: [
      (context, subRequest, callback) => {
        if (subRequest !== filename) {
          callback(null, subRequest);
        } else {
          callback();
        }
      },
    ],
  });

  compiler.outputFileSystem = fs;

  compiler.run((err) => {
    if (err) {
      throw err;
    }
    const resultFilename = path.join(destDir, name);
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
