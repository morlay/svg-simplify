import svgSimplify from './index';
import loaderUtils from 'loader-utils';

const idPrefixForLoader = (loaderContext, options = {}) =>
  loaderUtils.interpolateName(loaderContext, '[sha512:hash:base64:7]', options);

function svgSimplifyLoader(content) {
  if (this.cacheable) this.cacheable();
  const callback = this.async();

  let options = loaderUtils.parseQuery(this.query);

  if (options.useConfig) {
    const configName = options.useConfig;
    options = this.options[configName];
    if (options === undefined) {
      callback(new Error(
        `You specified "useConfig=${configName}" for svg-simplify
        but there is no property named "${configName}" in your main webpack configuration.`
      ));
      return;
    }
  }

  svgSimplify(content, {
    ...options,
    idPrefix: () => idPrefixForLoader(this, {
      content,
    }),
  })
    .then((res) => {
      callback(null, res);
    })
    .catch((err) => {
      callback(err);
    });
}

module.exports = svgSimplifyLoader;
