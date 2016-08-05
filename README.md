## Simplify SVG

Simplify SVG which is exported by Sketch/Illustrator etc.

[![Build Status](https://img.shields.io/travis/morlay/simplify-svg.svg)](https://travis-ci.org/morlay/simplify-svg)

### Options

#### `Function: idPrefix`
When svgo cleanup svgs, it will minify ids, for inline svg usages, svg defs will be overwhite by

#### `Number|Object: scale`
default is `1`, and could scale each svg icon by setting `{ width: Number }`

### Usage

#### Use `simplify-svg`

[![NPM](https://img.shields.io/npm/v/simplify-svg-loader.svg)](https://npmjs.org/package/simplify-svg-loader)
[![Dependencies](https://img.shields.io/david/morlay/simplify-svg-loader.svg?path=packages/simplify-svg)](https://david-dm.org/morlay/simplify-svg?path=packages/simplify-svg)


```js
simplifySvg(svgString, {
  scale: { width: 24 },
})
 .then((svgResult) => {
    // result is here
 });
```

#### As WebpackLoader `simplify-svg-loader`

[![NPM](https://img.shields.io/npm/v/simplify-svg-loader.svg)](https://npmjs.org/package/simplify-svg-loader)
[![Dependencies](https://img.shields.io/david/morlay/simplify-svg.svg?path=packages/simplify-svg-loader)](https://david-dm.org/morlay/simplify-svg?path=packages/simplify-svg-loader)


```js
{
  module: {
    loaders: [
      {
        test: /.*\.svg$/,
        loaders: [
          'simplify-svg-loader?useConfig=simplifySvg'
        ]
      }
    ]
  },
  simplifySvg: {}
}
```

### Notices

* All shape will be transformed to path
* `stoken-width` should be transformed by Sketch or Illustrator, if want the SVG unlimited scalable
