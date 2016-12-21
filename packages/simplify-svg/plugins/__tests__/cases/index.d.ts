export declare const trimWhitespace: (str: string) => string;
export declare const getSvgCase: (fileName: string) => string;
export interface Case {
    src: string;
    result: string;
}
export interface Cases {
    [name: string]: Case[];
}
export declare const getCases: () => Cases;
