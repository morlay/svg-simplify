import { test } from "ava"
import * as MemoryFileSystem from "memory-fs"
import * as path from "path"

import { Plugins } from "simplify-svg"
import * as webpack from "webpack"
import {
  Configuration,
  LoaderOptionsPlugin,
} from "webpack"

const runWebpack = (filename: string, webpackConfig: Configuration): Promise<string> => {
  let result: string

  const fs = new MemoryFileSystem()
  const destDir = path.join(__dirname, "../temp")
  const name = "result.js"

  return new Promise((resolve, reject) => {

    const compiler = webpack({
      ...webpackConfig,
      entry: filename,
      output: {
        ...webpackConfig.output,
        libraryTarget: "commonjs2",
        path: destDir,
        filename: name,
      },
    })

    compiler.outputFileSystem = fs

    compiler.run((err) => {
      if (err) {
        reject(err)
      }

      const resultFilename = path.resolve(destDir, name)

      if (fs.existsSync(resultFilename)) {
        resolve(String(fs.readFileSync(resultFilename)))
      } else {
        resolve("")
      }
    })
  })
}

const getModuleExports = (code: string): any => {
  const m = {
    exports: {},
  }

  const warpper = `
    (function(module, exports, require) {
      ${code}
    })(m, m.exports, require) 
  `

  eval(warpper)

  return m.exports
}

test("simplify-svg-loader", async () => {
  const result = await runWebpack(`${process.cwd()}/cases/simplify-svg-loader/iconWithMask.svg`, {
    module: {
      rules: [{
        test: /\.svg$/,
        use: [
          "raw-loader",
          {
            loader: path.join(__dirname, ".."),
            options: {
              useConfig: "simplifySvg",
            },
          },
        ],
      }],
    },
    plugins: [
      new LoaderOptionsPlugin({
        options: {
          simplifySvg: {
            plugins: [
              ($: CheerioStatic) => {
                $("#Adobe_OpacityMaskFilter").remove()
                $("[maskUnits=userSpaceOnUse]").remove()
              },
              Plugins.removeComments,
              Plugins.convertStyleToAttrs,
              Plugins.cleanupAttrs,
              Plugins.removeMetas,
              Plugins.convertShapeToPath,
              Plugins.cleanupIDs,
              Plugins.removeEmpties,
              Plugins.removeTransform,
              Plugins.removeDefs,
              Plugins.collapseGroups,
              Plugins.convertToReactJSX,
            ],
          },
        },
      }),
    ],
  })

  console.log(getModuleExports(result))
})
