## Simplify SVG

Simplify SVG which is exported by Sketch/Illustrator etc.

[![Build Status](https://img.shields.io/travis/morlay/simplify-svg.svg)](https://travis-ci.org/morlay/simplify-svg)

### Usage

#### Use `simplify-svg`

[![NPM](https://img.shields.io/npm/v/simplify-svg-loader.svg)](https://npmjs.org/package/simplify-svg-loader)
[![Dependencies](https://img.shields.io/david/morlay/simplify-svg-loader.svg?path=packages/simplify-svg)](https://david-dm.org/morlay/simplify-svg?path=packages/simplify-svg)


```ts
simplifySvg(svgString: string, plugins?: IPluginConfig[]): string
```

#### As WebpackLoader `simplify-svg-loader`

[![NPM](https://img.shields.io/npm/v/simplify-svg-loader.svg)](https://npmjs.org/package/simplify-svg-loader)
[![Dependencies](https://img.shields.io/david/morlay/simplify-svg.svg?path=packages/simplify-svg-loader)](https://david-dm.org/morlay/simplify-svg?path=packages/simplify-svg-loader)


```js
({
  module: {
    rules: [
      {
        test: /.*\.svg$/,
        use: [
          {
            loader: "simplify-svg-loader",
            options: {
              useConfig: "simplifySvg"
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({
      options: {
        simplifySvg: {
          plugins: []
        }, 
      }
    })
  ],
})
```

### Notices

* All shape will be transformed to path
* `stoken-width` should be transformed by Sketch or Illustrator, if want the SVG unlimited scalable
