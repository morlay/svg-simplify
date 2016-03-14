import cheerio from 'cheerio';
import { getPoints, toPath } from 'svg-shapes';

const s2pTags = [
  'circle',
  'ellipse',
  'line',
  'polygon',
  'polyline',
  'rect',
];

const parseFloatAttrs = (attrs = {}) =>
  Object.keys(attrs).reduce((finalAttrs, key) => ({
    ...finalAttrs,
    [key]: parseFloat(attrs[key], 10),
  }), {});

const convertShapeToPath = ($) => {
  s2pTags.forEach((tag) => {
    const $elm = $(tag);

    $elm.each((index, element) => {
      const $element = $(element);
      const attrs = $element.attr();
      const pathPoints = getPoints(tag, parseFloatAttrs(attrs));
      const path = toPath(pathPoints);
      const $path = $('<path/>');

      $path.attr('d', path);
      $path.attr(attrs);

      $element.replaceWith($path);
    });
  });
};

const svgPathify = (codeString) =>
  new Promise((resolve) => {
    const $ = cheerio.load(codeString, {
      xmlMode: true,
    });
    convertShapeToPath($);
    resolve($.html('svg'));
  });

export default svgPathify;
