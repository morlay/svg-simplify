// http://www.w3.org/TR/SVG/intro.html#Definitions
export const elemsGroups = {
  animation: ["animate", "animateColor", "animateMotion", "animateTransform", "set"],
  descriptive: ["desc", "metadata", "title"],
  shape: ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"],
  structural: ["defs", "g", "svg", "symbol", "use"],
  paintServer: ["solidColor", "linearGradient", "radialGradient", "meshGradient", "pattern", "hatch"],
  nonRendering: ["linearGradient", "radialGradient", "pattern", "clipPath", "mask", "marker", "symbol", "filter", "solidColor"],
  container: ["a", "defs", "g", "marker", "mask", "missing-glyph", "pattern", "svg", "switch", "symbol", "foreignObject"],
  textContent: ["altGlyph", "altGlyphDef", "altGlyphItem", "glyph", "glyphRef", "textPath", "text", "tref", "tspan"],
  textContentChild: ["altGlyph", "textPath", "tref", "tspan"],
  lightSource: ["feDiffuseLighting", "feSpecularLighting", "feDistantLight", "fePointLight", "feSpotLight"],
  filterPrimitive: ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence"],
};

export const pathElems = ["path", "glyph", "missing-glyph"];

export interface IElemDef {
  attrsGroups?: string[];
  attrs?: string[];
  defaults?: {
    [key: string]: any;
  };
  contentGroups?: string[];
  content?: string[];
}

export interface IElems {
  [key: string]: IElemDef;
}

// http://www.w3.org/TR/SVG/eltindex.html
export const elems: IElems = {
  a: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "target",
    ],
    defaults: {
      target: "_self",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  altGlyph: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "x",
      "y",
      "dx",
      "dy",
      "glyphRef",
      "format",
      "rotate",
    ],
  },
  altGlyphDef: {
    attrsGroups: [
      "core",
    ],
    content: [
      "glyphRef",
    ],
  },
  altGlyphItem: {
    attrsGroups: [
      "core",
    ],
    content: [
      "glyphRef",
      "altGlyphItem",
    ],
  },
  animate: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "animationAddition",
      "animationAttributeTarget",
      "animationEvent",
      "animationTiming",
      "animationValue",
      "presentation",
      "xlink",
    ],
    attrs: [
      "externalResourcesRequired",
    ],
    contentGroups: [
      "descriptive",
    ],
  },
  animateColor: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "animationEvent",
      "xlink",
      "animationAttributeTarget",
      "animationTiming",
      "animationValue",
      "animationAddition",
      "presentation",
    ],
    attrs: [
      "externalResourcesRequired",
    ],
    contentGroups: [
      "descriptive",
    ],
  },
  animateMotion: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "animationEvent",
      "xlink",
      "animationTiming",
      "animationValue",
      "animationAddition",
    ],
    attrs: [
      "externalResourcesRequired",
      "path",
      "keyPoints",
      "rotate",
      "origin",
    ],
    defaults: {
      "rotate": "0",
    },
    contentGroups: [
      "descriptive",
    ],
    content: [
      "mpath",
    ],
  },
  animateTransform: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "animationEvent",
      "xlink",
      "animationAttributeTarget",
      "animationTiming",
      "animationValue",
      "animationAddition",
    ],
    attrs: [
      "externalResourcesRequired",
      "type",
    ],
    contentGroups: [
      "descriptive",
    ],
  },
  circle: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "cx",
      "cy",
      "r",
    ],
    defaults: {
      cx: "0",
      cy: "0",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  clipPath: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "clipPathUnits",
    ],
    defaults: {
      clipPathUnits: "userSpaceOnUse",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
    ],
    content: [
      "text",
      "use",
    ],
  },
  "color-profile": {
    attrsGroups: [
      "core",
      "xlink",
    ],
    attrs: [
      "local",
      "name",
      "rendering-intent",
    ],
    defaults: {
      name: "sRGB",
      "rendering-intent": "auto",
    },
    contentGroups: [
      "descriptive",
    ],
  },
  cursor: {
    attrsGroups: [
      "core",
      "conditionalProcessing",
      "xlink",
    ],
    attrs: [
      "externalResourcesRequired",
      "x",
      "y",
    ],
    defaults: {
      x: "0",
      y: "0",
    },
    contentGroups: [
      "descriptive",
    ],
  },
  defs: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
    ],
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  desc: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "class",
      "style",
    ],
  },
  ellipse: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "cx",
      "cy",
      "rx",
      "ry",
    ],
    defaults: {
      cx: "0",
      cy: "0",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  feBlend: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      // TODO: in - "If no value is provided and this is the first filter primitive,
      // then this filter primitive will use SourceGraphic as its input"
      "in",
      "in2",
      "mode",
    ],
    defaults: {
      mode: "normal",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feColorMatrix: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "type",
      "values",
    ],
    defaults: {
      type: "matrix",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feComponentTransfer: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
    ],
    content: [
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
    ],
  },
  feComposite: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "in2",
      "operator",
      "k1",
      "k2",
      "k3",
      "k4",
    ],
    defaults: {
      operator: "over",
      k1: "0",
      k2: "0",
      k3: "0",
      k4: "0",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feConvolveMatrix: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "order",
      "kernelMatrix",
      // TODO: divisor - "The default value is the sum of all values in kernelMatrix,
      // with the exception that if the sum is zero, then the divisor is set to 1"
      "divisor",
      "bias",
      // TODO: targetX - "By default, the convolution matrix is centered in X over each
      // pixel of the input image (i.e., targetX = floor ( orderX / 2 ))"
      "targetX",
      "targetY",
      "edgeMode",
      // TODO: kernelUnitLength - "The first number is the <dx> value. The second number
      // is the <dy> value. If the <dy> value is not specified, it defaults to the same value as <dx>"
      "kernelUnitLength",
      "preserveAlpha",
    ],
    defaults: {
      order: "3",
      bias: "0",
      edgeMode: "duplicate",
      preserveAlpha: "false",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feDiffuseLighting: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "surfaceScale",
      "diffuseConstant",
      "kernelUnitLength",
    ],
    defaults: {
      surfaceScale: "1",
      diffuseConstant: "1",
    },
    contentGroups: [
      "descriptive",
    ],
    content: [
      // TODO: "exactly one light source element, in any order"
      "feDistantLight",
      "fePointLight",
      "feSpotLight",
    ],
  },
  feDisplacementMap: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "in2",
      "scale",
      "xChannelSelector",
      "yChannelSelector",
    ],
    defaults: {
      scale: "0",
      xChannelSelector: "A",
      yChannelSelector: "A",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feDistantLight: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "azimuth",
      "elevation",
    ],
    defaults: {
      azimuth: "0",
      elevation: "0",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feFlood: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
    ],
    content: [
      "animate",
      "animateColor",
      "set",
    ],
  },
  feFuncA: {
    attrsGroups: [
      "core",
      "transferFunction",
    ],
    content: [
      "set",
      "animate",
    ],
  },
  feFuncB: {
    attrsGroups: [
      "core",
      "transferFunction",
    ],
    content: [
      "set",
      "animate",
    ],
  },
  feFuncG: {
    attrsGroups: [
      "core",
      "transferFunction",
    ],
    content: [
      "set",
      "animate",
    ],
  },
  feFuncR: {
    attrsGroups: [
      "core",
      "transferFunction",
    ],
    content: [
      "set",
      "animate",
    ],
  },
  feGaussianBlur: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "stdDeviation",
    ],
    defaults: {
      stdDeviation: "0",
    },
    content: [
      "set",
      "animate",
    ],
  },
  feImage: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "preserveAspectRatio",
      "xlink:href",
    ],
    defaults: {
      preserveAspectRatio: "xMidYMid meet",
    },
    content: [
      "animate",
      "animateTransform",
      "set",
    ],
  },
  feMerge: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
    ],
    content: [
      "feMergeNode",
    ],
  },
  feMergeNode: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "in",
    ],
    content: [
      "animate",
      "set",
    ],
  },
  feMorphology: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "operator",
      "radius",
    ],
    defaults: {
      operator: "erode",
      radius: "0",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feOffset: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "dx",
      "dy",
    ],
    defaults: {
      dx: "0",
      dy: "0",
    },
    content: [
      "animate",
      "set",
    ],
  },
  fePointLight: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "x",
      "y",
      "z",
    ],
    defaults: {
      x: "0",
      y: "0",
      z: "0",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feSpecularLighting: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
      "surfaceScale",
      "specularConstant",
      "specularExponent",
      "kernelUnitLength",
    ],
    defaults: {
      surfaceScale: "1",
      specularConstant: "1",
      specularExponent: "1",
    },
    contentGroups: [
      "descriptive",
      // TODO: exactly one "light source element"
      "lightSource",
    ],
  },
  feSpotLight: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "x",
      "y",
      "z",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "specularExponent",
      "limitingConeAngle",
    ],
    defaults: {
      x: "0",
      y: "0",
      z: "0",
      pointsAtX: "0",
      pointsAtY: "0",
      pointsAtZ: "0",
      specularExponent: "1",
    },
    content: [
      "animate",
      "set",
    ],
  },
  feTile: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "in",
    ],
    content: [
      "animate",
      "set",
    ],
  },
  feTurbulence: {
    attrsGroups: [
      "core",
      "presentation",
      "filterPrimitive",
    ],
    attrs: [
      "class",
      "style",
      "baseFrequency",
      "numOctaves",
      "seed",
      "stitchTiles",
      "type",
    ],
    defaults: {
      baseFrequency: "0",
      numOctaves: "1",
      seed: "0",
      stitchTiles: "noStitch",
      type: "turbulence",
    },
    content: [
      "animate",
      "set",
    ],
  },
  filter: {
    attrsGroups: [
      "core",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "x",
      "y",
      "width",
      "height",
      "filterRes",
      "filterUnits",
      "primitiveUnits",
      "xlink:href",
    ],
    defaults: {
      primitiveUnits: "userSpaceOnUse",
      x: "-10%",
      y: "-10%",
      width: "120%",
      height: "120%",
    },
    contentGroups: [
      "descriptive",
      "filterPrimitive",
    ],
    content: [
      "animate",
      "set",
    ],
  },
  font: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "horiz-origin-x",
      "horiz-origin-y",
      "horiz-adv-x",
      "vert-origin-x",
      "vert-origin-y",
      "vert-adv-y",
    ],
    defaults: {
      "horiz-origin-x": "0",
      "horiz-origin-y": "0",
    },
    contentGroups: [
      "descriptive",
    ],
    content: [
      "font-face",
      "glyph",
      "hkern",
      "missing-glyph",
      "vkern",
    ],
  },
  "font-face": {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "font-family",
      "font-style",
      "font-variant",
      "font-weight",
      "font-stretch",
      "font-size",
      "unicode-range",
      "units-per-em",
      "panose-1",
      "stemv",
      "stemh",
      "slope",
      "cap-height",
      "x-height",
      "accent-height",
      "ascent",
      "descent",
      "widths",
      "bbox",
      "ideographic",
      "alphabetic",
      "mathematical",
      "hanging",
      "v-ideographic",
      "v-alphabetic",
      "v-mathematical",
      "v-hanging",
      "underline-position",
      "underline-thickness",
      "strikethrough-position",
      "strikethrough-thickness",
      "overline-position",
      "overline-thickness",
    ],
    defaults: {
      "font-style": "all",
      "font-variant": "normal",
      "font-weight": "all",
      "font-stretch": "normal",
      "unicode-range": "U+0-10FFFF",
      "units-per-em": "1000",
      "panose-1": "0 0 0 0 0 0 0 0 0 0",
      "slope": "0",
    },
    contentGroups: [
      "descriptive",
    ],
    content: [
      // TODO: "at most one "font-face-src" element"
      "font-face-src",
    ],
  },
  // TODO: empty content
  "font-face-format": {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "string",
    ],
  },
  "font-face-name": {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "name",
    ],
  },
  "font-face-src": {
    attrsGroups: [
      "core",
    ],
    content: [
      "font-face-name",
      "font-face-uri",
    ],
  },
  "font-face-uri": {
    attrsGroups: [
      "core",
      "xlink",
    ],
    attrs: [
      "xlink:href",
    ],
    content: [
      "font-face-format",
    ],
  },
  foreignObject: {
    attrsGroups: [
      "core",
      "conditionalProcessing",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "x",
      "y",
      "width",
      "height",
    ],
    defaults: {
      x: 0,
      y: 0,
    },
  },
  g: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
    ],
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  glyph: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "d",
      "horiz-adv-x",
      "vert-origin-x",
      "vert-origin-y",
      "vert-adv-y",
      "unicode",
      "glyph-name",
      "orientation",
      "arabic-form",
      "lang",
    ],
    defaults: {
      "arabic-form": "initial",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  glyphRef: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "d",
      "horiz-adv-x",
      "vert-origin-x",
      "vert-origin-y",
      "vert-adv-y",
    ],
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  hatch: {
    attrsGroups: [
      "core",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "x",
      "y",
      "pitch",
      "rotate",
      "hatchUnits",
      "hatchContentUnits",
      "transform",
    ],
    defaults: {
      hatchUnits: "objectBoundingBox",
      hatchContentUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      pitch: "0",
      rotate: "0",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
    content: [
      "hatchPath",
    ],
  },
  hatchPath: {
    attrsGroups: [
      "core",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "d",
      "offset",
    ],
    defaults: {
      offset: "0",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  hkern: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "u1",
      "g1",
      "u2",
      "g2",
      "k",
    ],
  },
  image: {
    attrsGroups: [
      "core",
      "conditionalProcessing",
      "graphicalEvent",
      "xlink",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "preserveAspectRatio",
      "transform",
      "x",
      "y",
      "width",
      "height",
      "xlink:href",
    ],
    defaults: {
      x: "0",
      y: "0",
      preserveAspectRatio: "xMidYMid meet",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  line: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "x1",
      "y1",
      "x2",
      "y2",
    ],
    defaults: {
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "0",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  linearGradient: {
    attrsGroups: [
      "core",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "x1",
      "y1",
      "x2",
      "y2",
      "gradientUnits",
      "gradientTransform",
      "spreadMethod",
      "xlink:href",
    ],
    defaults: {
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "0",
      spreadMethod: "pad",
    },
    contentGroups: [
      "descriptive",
    ],
    content: [
      "animate",
      "animateTransform",
      "set",
      "stop",
    ],
  },
  marker: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "viewBox",
      "preserveAspectRatio",
      "refX",
      "refY",
      "markerUnits",
      "markerWidth",
      "markerHeight",
      "orient",
    ],
    defaults: {
      markerUnits: "strokeWidth",
      refX: "0",
      refY: "0",
      markerWidth: "3",
      markerHeight: "3",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  mask: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "x",
      "y",
      "width",
      "height",
      "maskUnits",
      "maskContentUnits",
    ],
    defaults: {
      maskUnits: "objectBoundingBox",
      maskContentUnits: "userSpaceOnUse",
      x: "-10%",
      y: "-10%",
      width: "120%",
      height: "120%",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  metadata: {
    attrsGroups: [
      "core",
    ],
  },
  "missing-glyph": {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "d",
      "horiz-adv-x",
      "vert-origin-x",
      "vert-origin-y",
      "vert-adv-y",
    ],
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  mpath: {
    attrsGroups: [
      "core",
      "xlink",
    ],
    attrs: [
      "externalResourcesRequired",
      "xlink:href",
    ],
    contentGroups: [
      "descriptive",
    ],
  },
  path: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "d",
      "pathLength",
    ],
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  pattern: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "viewBox",
      "preserveAspectRatio",
      "x",
      "y",
      "width",
      "height",
      "patternUnits",
      "patternContentUnits",
      "patternTransform",
      "xlink:href",
    ],
    defaults: {
      patternUnits: "objectBoundingBox",
      patternContentUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "0",
      height: "0",
      preserveAspectRatio: "xMidYMid meet",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "paintServer",
      "shape",
      "structural",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  polygon: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "points",
    ],
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  polyline: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "points",
    ],
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  radialGradient: {
    attrsGroups: [
      "core",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "cx",
      "cy",
      "r",
      "fx",
      "fy",
      "fr",
      "gradientUnits",
      "gradientTransform",
      "spreadMethod",
      "xlink:href",
    ],
    defaults: {
      gradientUnits: "objectBoundingBox",
      cx: "50%",
      cy: "50%",
      r: "50%",
    },
    contentGroups: [
      "descriptive",
    ],
    content: [
      "animate",
      "animateTransform",
      "set",
      "stop",
    ],
  },
  meshGradient: {
    attrsGroups: [
      "core",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "x",
      "y",
      "gradientUnits",
      "transform",
    ],
    contentGroups: [
      "descriptive",
      "paintServer",
      "animation",
    ],
    content: [
      "meshRow",
    ],
  },
  meshRow: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
    ],
    contentGroups: [
      "descriptive",
    ],
    content: [
      "meshPatch",
    ],
  },
  meshPatch: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
    ],
    contentGroups: [
      "descriptive",
    ],
    content: [
      "stop",
    ],
  },
  rect: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "x",
      "y",
      "width",
      "height",
      "rx",
      "ry",
    ],
    defaults: {
      x: "0",
      y: "0",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  script: {
    attrsGroups: [
      "core",
      "xlink",
    ],
    attrs: [
      "externalResourcesRequired",
      "type",
      "xlink:href",
    ],
  },
  set: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "animation",
      "xlink",
      "animationAttributeTarget",
      "animationTiming",
    ],
    attrs: [
      "externalResourcesRequired",
      "to",
    ],
    contentGroups: [
      "descriptive",
    ],
  },
  solidColor: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
    ],
    contentGroups: [
      "paintServer",
    ],
  },
  stop: {
    attrsGroups: [
      "core",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "offset",
      "path",
    ],
    contentGroups: [
      "animate",
      "animateColor",
      "set",
    ],
  },
  style: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "type",
      "media",
      "title",
    ],
    defaults: {
      type: "text/css",
    },
  },
  svg: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "documentEvent",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "xmlns",
      "class",
      "style",
      "x",
      "y",
      "width",
      "height",
      "viewBox",
      "preserveAspectRatio",
      "zoomAndPan",
      "version",
      "baseProfile",
      "contentScriptType",
      "contentStyleType",
    ],
    defaults: {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "xMidYMid meet",
      zoomAndPan: "magnify",
      version: "1.1",
      baseProfile: "none",
      contentScriptType: "application/ecmascript",
      contentStyleType: "text/css",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  switch: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
    ],
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
    ],
    content: [
      "a",
      "foreignObject",
      "g",
      "image",
      "svg",
      "switch",
      "text",
      "use",
    ],
  },
  symbol: {
    attrsGroups: [
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "preserveAspectRatio",
      "viewBox",
      "refX",
      "refY",
    ],
    defaults: {
      refX: 0,
      refY: 0,
    },
    contentGroups: [
      "animation",
      "descriptive",
      "shape",
      "structural",
      "paintServer",
    ],
    content: [
      "a",
      "altGlyphDef",
      "clipPath",
      "color-profile",
      "cursor",
      "filter",
      "font",
      "font-face",
      "foreignObject",
      "image",
      "marker",
      "mask",
      "pattern",
      "script",
      "style",
      "switch",
      "text",
      "view",
    ],
  },
  text: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "lengthAdjust",
      "x",
      "y",
      "dx",
      "dy",
      "rotate",
      "textLength",
    ],
    defaults: {
      x: "0",
      y: "0",
      lengthAdjust: "spacing",
    },
    contentGroups: [
      "animation",
      "descriptive",
      "textContentChild",
    ],
    content: [
      "a",
    ],
  },
  textPath: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "xlink:href",
      "startOffset",
      "method",
      "spacing",
      "d",
    ],
    defaults: {
      startOffset: "0",
      method: "align",
      spacing: "exact",
    },
    contentGroups: [
      "descriptive",
    ],
    content: [
      "a",
      "altGlyph",
      "animate",
      "animateColor",
      "set",
      "tref",
      "tspan",
    ],
  },
  title: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "class",
      "style",
    ],
  },
  tref: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "xlink:href",
    ],
    contentGroups: [
      "descriptive",
    ],
    content: [
      "animate",
      "animateColor",
      "set",
    ],
  },
  tspan: {
    attrsGroups: [
      "conditionalProcessing",
      "core",
      "graphicalEvent",
      "presentation",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "x",
      "y",
      "dx",
      "dy",
      "rotate",
      "textLength",
      "lengthAdjust",
    ],
    contentGroups: [
      "descriptive",
    ],
    content: [
      "a",
      "altGlyph",
      "animate",
      "animateColor",
      "set",
      "tref",
      "tspan",
    ],
  },
  use: {
    attrsGroups: [
      "core",
      "conditionalProcessing",
      "graphicalEvent",
      "presentation",
      "xlink",
    ],
    attrs: [
      "class",
      "style",
      "externalResourcesRequired",
      "transform",
      "x",
      "y",
      "width",
      "height",
      "xlink:href",
    ],
    defaults: {
      x: "0",
      y: "0",
    },
    contentGroups: [
      "animation",
      "descriptive",
    ],
  },
  view: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "externalResourcesRequired",
      "viewBox",
      "preserveAspectRatio",
      "zoomAndPan",
      "viewTarget",
    ],
    contentGroups: [
      "descriptive",
    ],
  },
  vkern: {
    attrsGroups: [
      "core",
    ],
    attrs: [
      "u1",
      "g1",
      "u2",
      "g2",
      "k",
    ],
  },
};

// http://wiki.inkscape.org/wiki/index.php/Inkscape-specific_XML_attributes
export const editorNamespaces = [
  "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
  "http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd",
  "http://www.inkscape.org/namespaces/inkscape",
  "http://www.bohemiancoding.com/sketch/ns",
  "http://ns.adobe.com/AdobeIllustrator/10.0/",
  "http://ns.adobe.com/Graphs/1.0/",
  "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",
  "http://ns.adobe.com/Variables/1.0/",
  "http://ns.adobe.com/SaveForWeb/1.0/",
  "http://ns.adobe.com/Extensibility/1.0/",
  "http://ns.adobe.com/Flows/1.0/",
  "http://ns.adobe.com/ImageReplacement/1.0/",
  "http://ns.adobe.com/GenericCustomNamespace/1.0/",
  "http://ns.adobe.com/XPath/1.0/",
];
