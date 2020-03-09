import { assign, concat, forEach, get, has, isEmpty, omit, set } from "lodash";
import murmurhash from "node-murmurhash";

import { referencesProps } from "../collections";

import { IPlugin } from "../utils";

const regReferencesUrl = /\burl\(("|')?#(.+?)\1\)/;

export const cleanupIDs: IPlugin = ($): void => {
  const referencesIDs = {};

  $("*").each((_, element) => {
    const $elem = $(element);

    forEach(referencesProps, (referenceProp) => {
      if (has(element.attribs, referenceProp)) {
        const attrValue = $elem.attr(referenceProp) || "";
        const match = regReferencesUrl.exec(attrValue);

        if (match) {
          const key = match[2];
          set(
            referencesIDs,
            [key],
            has(referencesIDs, key) ? concat(get(referencesIDs, key) as any[], referenceProp) : [referenceProp],
          );
        }
      }
    });
  });

  $("[id]").each((_, element) => {
    const $elem = $(element);
    const id = $elem.attr("id");

    if (id && has(referencesIDs, id)) {
      const hashedId = murmurhash($elem.html() || "", "seed");
      const refs = get(referencesIDs, id);
      $elem.attr("id", hashedId);

      forEach(refs, (refAttr) => {
        $(`[${refAttr}*='${id}']`).each((_, elem) => {
          const attrValue = get(elem.attribs, refAttr);
          $(elem).attr(refAttr, attrValue.replace(id, hashedId));
        });
      });

      assign(referencesIDs, omit(referencesIDs, id));
    } else {
      $elem.removeAttr("id");
    }
  });

  if (!isEmpty(referencesIDs)) {
    forEach(referencesIDs, (refAttrs, id) => {
      forEach(refAttrs, (refAttr: string) => {
        $(`[${refAttr}*='${id}']`).each((_, elem) => {
          $(elem).removeAttr(refAttr);
        });
      });
    });
  }
};
