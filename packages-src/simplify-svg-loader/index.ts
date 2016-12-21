import svgSimplify from "simplify-svg";
import * as loaderUtils from "loader-utils";

function svgSimplifyLoader(content: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  const callback = this.async();

  let options = loaderUtils.parseQuery(this.query);

  if (options.useConfig) {
    const configName = options.useConfig;
    options = this.options[configName];
    if (options === undefined) {
      callback(new Error(
        `You specified "useConfig=${configName}" for simplify-svg-loader
        but there is no property named "${configName}" in your main webpack configuration.`,
      ));
      return;
    }
  }

  const res = svgSimplify(content, options.plugins);

  callback(null, res);
}

module.exports = svgSimplifyLoader;
