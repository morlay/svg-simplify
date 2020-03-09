## Simplify SVG

Simplify SVG which is exported by Sketch/Illustrator etc.

[![NPM](https://img.shields.io/npm/v/@morlay/simplify-svg.svg)](https://npmjs.org/package/@morlay/simplify-svg)
[![Build Status](https://img.shields.io/travis/morlay/simplify-svg.svg)](https://travis-ci.org/morlay/simplify-svg)

### Usage

#### Use `@morlay/simplify-svg`

```ts
simplifySvg(svgString: string, plugins?: IPluginConfig[]): string
```

### Notices

- All shape will be transformed to path
- `stoken-width` should be transformed by Sketch or Illustrator, if want the SVG unlimited scalable
