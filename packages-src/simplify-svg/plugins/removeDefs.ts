import * as _ from "lodash";

import {
  IPlugin,
} from "../utils";

import {
  referencesProps,
} from "../collections";

const regReferencesUrl = /\burl\(("|')?#(.+?)\1\)/;

export const removeDefs: IPlugin = ($): void => {
  $("use").each((idx, element) => {
    const $elm = $(element);
    const $def = $($elm.attr("xlink:href")).eq(0).clone().removeAttr("id");
    $elm.replaceWith($def);
  });

  const referencesIDs: string[] = [];

  _.forEach(referencesProps, (referenceProp) => {
    $(`[${referenceProp}]`)
      .each((index, element) => {
        const attrValue = $(element).attr(referenceProp);
        const match = attrValue.match(regReferencesUrl);

        if (match) {
          const key = match[2];
          referencesIDs.push(key);
        }
      });
  });

  $("[id]")
    .filter((index, element) => !_.includes(referencesIDs, $(element).attr("id")))
    .remove();

  $("defs")
    .filter((index, element) => $(element).children().length === 0)
    .remove();
};
