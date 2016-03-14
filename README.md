## SVG Simplify

Simplify SVG which is exported by Sketch/Illustrator etc.

[![Build Status](https://img.shields.io/travis/morlay/svg-simplify.svg?style=flat-square)](https://travis-ci.org/morlay/svg-simplify)
[![NPM](https://img.shields.io/npm/v/svg-simplify.svg?style=flat-square)](https://npmjs.org/package/svg-simplify)
[![Dependencies](https://img.shields.io/david/morlay/svg-simplify.svg?style=flat-square)](https://david-dm.org/morlay/svg-simplify)
[![License](https://img.shields.io/npm/l/svg-simplify.svg?style=flat-square)](https://npmjs.org/package/svg-simplify)

### Options

#### `Object: svgo`
Same as [svg](https://github.com/svg/svgo)

#### `Number|Object: scale`
default is `1`, and could scale each svg icon by setting `{ width: Number }`

### Usage

#### Use directly
 
```js
svgSimplify(svgString, {
  scale: { width: 24 },
})
 .then((svgResult) => {
    // result is here
 });
```

#### As WebpackLoader

```json
{
  module: {
    loaders: [
      {
        test: /.*\.svg$/,
        loaders: [
          'svg-simplify/lib/loader'
        ]
      }
    ]
  },
  svgSimplify: {}
}
```