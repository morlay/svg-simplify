import * as _ from "lodash";

import { ReactSVGAttrs } from "../collections";

import { IPlugin } from "../utils";

const attrsNeedToConvert = _.invert(_.pickBy(ReactSVGAttrs, (value, key) => key !== value));

export const convertToReactJSX: IPlugin = ($): void => {
  $("*").each((idx, element) => {
    const attrs = element.attribs;

    const patchedAttrs = _.mapKeys<any>(attrs, (value, key) =>
      attrsNeedToConvert[key] ? attrsNeedToConvert[key] : key,
    );

    _.assign(element, {
      attribs: patchedAttrs,
    });
  });
};
