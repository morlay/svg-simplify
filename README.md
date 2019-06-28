## Simplify SVG

Simplify SVG which is exported by Sketch/Illustrator etc.

[![NPM](https://img.shields.io/npm/v/simplify-svg.svg)](https://npmjs.org/package/simplify-svg)
[![Build Status](https://img.shields.io/travis/morlay/simplify-svg.svg)](https://travis-ci.org/morlay/simplify-svg)
[![Dependencies](https://img.shields.io/david/morlay/simplify-svg.svg)](https://david-dm.org/morlay/simplify-svg)

### Usage

#### Use `simplify-svg`

```ts
simplifySvg(svgString: string, plugins?: IPluginConfig[]): string
```

### Notices

- All shape will be transformed to path
- `stoken-width` should be transformed by Sketch or Illustrator, if want the SVG unlimited scalable
