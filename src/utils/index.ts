import * as cheerio from "cheerio";

export function parse(svgStr: string): CheerioStatic {
  return cheerio.load(svgStr, {
    xmlMode: true,
  });
}

export function stringify($: CheerioStatic): string {
  return $.html("svg");
}

export interface IPlugin {
  ($: CheerioStatic, options?: any): void;
}

export type IPluginConfig = IPlugin | [IPlugin, any];

export function simplifySvg(svgString: string, plugins?: IPluginConfig[]) {
  const $ = parse(svgString);

  ([] as IPluginConfig[]).concat(plugins || []).forEach((plugin) => {
    const pluginConfig = ([] as IPluginConfig[]).concat(plugin);
    (pluginConfig[0] as IPlugin)($, pluginConfig[1]);
  });

  return stringify($);
}
