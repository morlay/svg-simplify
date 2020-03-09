import { forEach, includes } from "lodash";

import { referencesProps } from "../collections";

import { IPlugin } from "../utils";

const regReferencesUrl = /\burl\(("|')?#(.+?)\1\)/;

export const removeDefs: IPlugin = ($): void => {
  $("use").each((_, element) => {
    const $elm = $(element);
    const $def = $($elm.attr("xlink:href"))
      .eq(0)
      .clone()
      .removeAttr("id");
    $elm.replaceWith($def);
  });

  const referencesIDs: string[] = [];

  forEach(referencesProps, (referenceProp) => {
    $(`[${referenceProp}]`).each((_, element) => {
      const attrValue = $(element).attr(referenceProp)!;
      const match = regReferencesUrl.exec(attrValue);

      if (match) {
        const key = match[2];
        referencesIDs.push(key);
      }
    });
  });

  $("[id]")
    .filter((_, element) => !includes(referencesIDs, $(element).attr("id")))
    .remove();

  $("defs")
    .filter((_, element) => $(element).children().length === 0)
    .remove();
};
