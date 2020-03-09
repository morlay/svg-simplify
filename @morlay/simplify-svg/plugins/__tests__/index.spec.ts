import cheerio from "cheerio";
import { readFileSync } from "fs";
import glob from "glob";
import { forEach, reduce, set } from "lodash";
import path from "path";
import * as plugins from "../";

import { IPlugin, simplifySvg } from "../../utils";

const baseDir = path.join(__dirname, "../__cases__");

export const trimWhitespace = (str: string): string =>
  cheerio
    .load(str, {
      normalizeWhitespace: true,
      lowerCaseTags: true,
      xmlMode: true,
    })
    .html();

export const getSvgCase = (fileName: string): string => trimWhitespace(String(readFileSync(`${baseDir}/${fileName}`)));

export interface ICase {
  src: string;
  result: string;
}

export interface ICases {
  [name: string]: ICase[];
}

const filesToCases = (fileList: string[]): ICases =>
  reduce(
    fileList,
    (result: ICases, filePath: string) => {
      const filePair = filePath.split(/[./]/g);
      const name = filePair[0];
      const idx = filePair[1];
      const type = filePair[2];

      return set<ICases>(result, [name, idx, type], getSvgCase(filePath));
    },
    {},
  );

export const getCases = (): ICases =>
  filesToCases(
    glob.sync("**/*.svg", {
      cwd: baseDir,
    }),
  );

const cases = getCases();

describe("#plugins", () => {
  forEach(cases, (caseList, pluginName) => {
    forEach(caseList, (caseItem, index) => {
      it(`${pluginName}: ${index}`, () => {
        expect(trimWhitespace(simplifySvg(caseItem.src, [(plugins as any)[pluginName] as IPlugin]))).toEqual(
          caseItem.result,
        );
      });
    });
  });
});
