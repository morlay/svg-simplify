export declare const elemsGroups: {
    animation: string[];
    descriptive: string[];
    shape: string[];
    structural: string[];
    paintServer: string[];
    nonRendering: string[];
    container: string[];
    textContent: string[];
    textContentChild: string[];
    lightSource: string[];
    filterPrimitive: string[];
};
export declare const pathElems: string[];
export interface IElemDef {
    attrsGroups?: string[];
    attrs?: string[];
    defaults?: {
        [key: string]: any;
    };
    contentGroups?: string[];
    content?: string[];
}
export interface IElems {
    [key: string]: IElemDef;
}
export declare const elems: IElems;
export declare const editorNamespaces: string[];
