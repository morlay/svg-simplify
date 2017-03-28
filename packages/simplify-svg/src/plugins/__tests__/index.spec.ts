import { test } from "ava"
import * as _ from "lodash"

import * as plugins from "../"

import {
  IPlugin,
  simplifySvg,
} from "../../utils"

import {
  getCases,
  trimWhitespace,
} from "./cases"

const cases = getCases()

_.forEach(cases, (caseList, pluginName) => {
  _.forEach(caseList, (caseItem, index) => {
    test(`${pluginName}: ${index}`, (t) => {
      t.is(trimWhitespace(simplifySvg(caseItem.src, [
        (plugins as any)[pluginName] as IPlugin,
      ])), caseItem.result)
    })
  })
})
