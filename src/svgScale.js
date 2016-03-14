import _ from 'lodash';
import cheerio from 'cheerio';
import svgpath from 'svgpath';

const scalePath = ($, scale) => {
  $('path').each((index, element) => {
    const $path = $(element);
    const path = $path.attr('d');

    if (path) {
      const newPath = svgpath(path)
        .scale(scale)
        .rel()
        .round(1)
        .toString();

      $path.attr('d', newPath);
    }
  });
};

export const getFinalScale = (svgSizes = {}, scaleOptions = {}) => {
  if (_.isNumber(scaleOptions)) {
    return scaleOptions;
  }

  if (_.isObject(scaleOptions) && _.has(scaleOptions, 'width')) {
    const originWidth = parseFloat(svgSizes.width, 10);
    return scaleOptions.width / originWidth;
  }

  return 1;
};

const scaleSvg = ($, scaleOptions) => {
  const $svg = $('svg');
  const svgSizes = $svg.attr();
  const scale = getFinalScale(svgSizes, scaleOptions);

  const finalWidth = svgSizes.width * scale;
  const finalHeight = svgSizes.height * scale;

  $svg.attr({
    width: finalWidth,
    height: finalHeight,
    viewBox: [0, 0, finalWidth, finalHeight].join(' '),
  });

  scalePath($, scale);
};

const svgScale = (svgString, scaleOptions = {}) =>
  new Promise((resolve) => {
    const $ = cheerio.load(svgString, {
      xmlMode: true,
    });

    scaleSvg($, scaleOptions);

    resolve($.html('svg'));
  });

export default svgScale;
