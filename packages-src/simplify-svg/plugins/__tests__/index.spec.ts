import * as _ from "lodash";
import { test } from "ava";

import {
  simplifySvg,
  IPlugin,
} from "../../utils";

import * as plugins from "../";

import {
  getCases,
  trimWhitespace,
} from "./cases";

const cases = getCases();

_.forEach(cases, (caseList, pluginName) => {
  _.forEach(caseList, (caseItem, index) => {
    test(`${pluginName}: ${index}`, (t) => {
      t.is(trimWhitespace(simplifySvg(caseItem.src, [
        (plugins as any)[pluginName] as IPlugin,
      ])), caseItem.result);
    });
  });
});
