import * as loaderUtils from "loader-utils";
import simplifySvg from "simplify-svg";

function svgSimplifyLoader(this: any, content: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  const callback = this.async();

  let options = loaderUtils.getOptions(this);

  if (options.useConfig) {
    const configName = options.useConfig;
    options = this.options[configName];
    if (options === undefined) {
      callback(
        new Error(
          `You specified "useConfig=${configName}" for simplify-svg-loader
        but there is no property named "${configName}" in your main webpack configuration.`,
        ),
      );
      return;
    }
  }

  const res = simplifySvg(content, options.plugins);

  callback(null, res);
}

module.exports = svgSimplifyLoader;
