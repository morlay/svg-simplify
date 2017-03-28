import * as cheerio from "cheerio"
import * as fse from "fs-extra"
import * as glob from "glob"
import * as _ from "lodash"

const baseDir = `${process.cwd()}/cases/simplify-svg`

export const trimWhitespace = (str: string): string => cheerio.load(str, {
  normalizeWhitespace: true,
  lowerCaseTags: true,
  xmlMode: true,
}).html()

export const getSvgCase = (fileName: string): string =>
  trimWhitespace(
    String(
      fse.readFileSync(`${baseDir}/${fileName}`),
    ),
  )

export interface ICase {
  src: string;
  result: string;
}

export interface ICases {
  [name: string]: ICase[];
}

const filesToCases = (fileList: string[]): ICases =>
  _.reduce(fileList, (result: ICases, filePath: string) => {
    const filePair = filePath.split(/[\.\/]/g)
    const name = filePair[0]
    const idx = filePair[1]
    const type = filePair[2]

    return _.set<ICases>(result, [name, idx, type], getSvgCase(filePath))
  }, {})

export const getCases = (): ICases => filesToCases(glob.sync("**/*.svg", {
  cwd: baseDir,
}))
