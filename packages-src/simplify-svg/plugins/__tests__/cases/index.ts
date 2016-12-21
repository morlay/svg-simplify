import * as fse from "fs-extra";
import * as _ from "lodash";
import * as glob from "glob";
import * as cheerio from "cheerio";

const baseDir = `${process.cwd()}/cases/simplify-svg`;

export const trimWhitespace = (str: string): string => cheerio.load(str, {
  normalizeWhitespace: true,
  lowerCaseTags: true,
  xmlMode: true,
}).html();

export const getSvgCase = (fileName: string): string =>
  trimWhitespace(
    String(
      fse.readFileSync(`${baseDir}/${fileName}`),
    ),
  );

export interface Case {
  src: string;
  result: string;
}

export interface Cases {
  [name: string]: Case[];
}

const filesToCases = (fileList: string[]): Cases =>
  _.reduce(fileList, (result: Cases, filePath: string) => {
    const filePair = filePath.split(/[\.\/]/g);
    const name = filePair[0];
    const idx = filePair[1];
    const type = filePair[2];

    return _.set<Cases>(result, [name, idx, type], getSvgCase(filePath));
  }, {});

export const getCases = (): Cases => filesToCases(glob.sync("**/*.svg", {
  cwd: baseDir,
}));
