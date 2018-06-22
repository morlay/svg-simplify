export declare const trimWhitespace: (str: string) => string;
export declare const getSvgCase: (fileName: string) => string;
export interface ICase {
    src: string;
    result: string;
}
export interface ICases {
    [name: string]: ICase[];
}
export declare const getCases: () => ICases;
