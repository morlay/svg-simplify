import { concat, flatten, get, isEmpty, pick, values } from "lodash";

import { attrsGroups, elems, IElems } from "../collections";

import { IPlugin } from "../utils";

const getAttrListByTag = (tag: string) => {
  const elem = get(elems, tag) as IElems;

  if (isEmpty(elem)) {
    return [];
  }

  const attrsInGroup = flatten(values(pick(attrsGroups, elem.attrsGroups as any)));

  return concat(attrsInGroup, elem.attrs || []);
};

export const cleanupAttrs: IPlugin = ($): void => {
  $("*").each((_, element) => {
    const tagName = element.tagName;
    const attrs = element.attribs;

    element.attribs = pick(attrs, getAttrListByTag(tagName));
  });
};
