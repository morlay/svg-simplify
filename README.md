## Simplify SVG

Simplify SVG which is exported by Sketch/Illustrator etc.

[![Build Status](https://img.shields.io/travis/morlay/simplify-svg.svg?style=flat-square)](https://travis-ci.org/morlay/simplify-svg)
[![NPM](https://img.shields.io/npm/v/simplify-svg.svg?style=flat-square)](https://npmjs.org/package/simplify-svg)
[![Dependencies](https://img.shields.io/david/morlay/simplify-svg.svg?style=flat-square)](https://david-dm.org/morlay/simplify-svg)
[![License](https://img.shields.io/npm/l/simplify-svg.svg?style=flat-square)](https://npmjs.org/package/simplify-svg)

### Options

#### `Object: svgo`
Same as [svg](https://github.com/svg/svgo)

#### `Number|Object: scale`
default is `1`, and could scale each svg icon by setting `{ width: Number }`

### Usage

#### Use directly
 
```js
simplifySvg(svgString, {
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
          'simplify-svg/lib/loader'
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