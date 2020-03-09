import { assign, invert, mapKeys, pickBy } from "lodash";

import { ReactSVGAttrs } from "../collections";

import { IPlugin } from "../utils";

const attrsNeedToConvert = invert(pickBy(ReactSVGAttrs, (value, key) => key !== value));

export const convertToReactJSX: IPlugin = ($): void => {
  $("*").each((_, element) => {
    const attrs = element.attribs;

    const patchedAttrs = mapKeys<any>(attrs, (_, key) => (attrsNeedToConvert[key] ? attrsNeedToConvert[key] : key));

    assign(element, {
      attribs: patchedAttrs,
    });
  });
};
