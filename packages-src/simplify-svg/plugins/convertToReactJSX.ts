/// <reference types="cheerio"/>

import * as _ from "lodash";

import {
  IPlugin,
} from "../utils";

import {
  ReactSVGAttrs,
} from "../collections";

const attrsNeedToConvert = _.invert<any, any>(_.pickBy(ReactSVGAttrs, (value, key) => key !== value));

export const convertToReactJSX: IPlugin = ($): void => {
  $("*")
    .each((idx, element) => {
      const attrs = element.attribs;

      const patchedAttrs = _.mapKeys<any, any>(attrs, (value, key) => attrsNeedToConvert[key] ? attrsNeedToConvert[key] : key);

      _.assign(element, {
        attribs: patchedAttrs,
      });
    });
};
