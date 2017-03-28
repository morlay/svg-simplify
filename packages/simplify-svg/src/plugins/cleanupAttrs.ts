/// <reference types="cheerio"/>

import * as _ from "lodash";

import {
  IPlugin,
} from "../utils";

import {
  attrsGroups,
  elems,
  IElemDef,
} from "../collections";

const getAttrListByTag = (tag: string) => {
  const elem = _.get<any, IElemDef>(elems, tag);

  if (_.isEmpty(elem)) {
    return [];
  }

  const attrsInGroup = _.flatten(_.values(_.pick(attrsGroups, elem.attrsGroups)));

  return _.concat(attrsInGroup, elem.attrs || []);
};

export const cleanupAttrs: IPlugin = ($): void => {
  $("*")
    .each((idx, element) => {
      const tagName = element.tagName;
      const attrs = element.attribs;

      _.assign(element, {
        attribs: _.pick(attrs, getAttrListByTag(tagName)),
      });
    });
};
