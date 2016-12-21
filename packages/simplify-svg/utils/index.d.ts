/// <reference types="cheerio" />
export declare function parse(svgStr: string): CheerioStatic;
export declare function stringify($: CheerioStatic): string;
export interface IPlugin {
    ($: CheerioStatic, options?: any): void;
}
export declare type IPluginConfig = IPlugin | [IPlugin, any];
export declare function simplifySvg(svgString: string, plugins?: IPluginConfig[]): string;
