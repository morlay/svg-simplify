import * as _ from "lodash";

import { attrsGroups, elems, IElems } from "../collections";

import { IPlugin } from "../utils";

const getAttrListByTag = (tag: string) => {
  const elem = _.get(elems, tag) as IElems;

  if (_.isEmpty(elem)) {
    return [];
  }

  const attrsInGroup = _.flatten(_.values(_.pick(attrsGroups, elem.attrsGroups as any)));

  return _.concat(attrsInGroup, elem.attrs || []);
};

export const cleanupAttrs: IPlugin = ($): void => {
  $("*").each((idx, element) => {
    const tagName = element.tagName;
    const attrs = element.attribs;

    _.assign(element, {
      attribs: _.pick(attrs, getAttrListByTag(tagName)),
    });
  });
};
