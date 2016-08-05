import _ from 'lodash';
import cheerio from 'cheerio';
import svgpath from 'svgpath';

const scalePath = ($, options) => {
  $('path').each((index, element) => {
    const $path = $(element);
    const path = $path.attr('d');

    if (path) {
      const newPath = svgpath(path)
        .translate(options.transformX, options.transformY)
        .scale(options.scaleX, options.scaleY)
        .rel()
        .round(1)
        .toString();

      $path.attr('d', newPath);
    }
  });
};

const getScale = (coordinate = {}, scaleOptions = {}) => {
  if (_.isNumber(scaleOptions)) {
    return {};
  }

  if (_.isObject(scaleOptions) && _.has(scaleOptions, 'width')) {
    return scaleOptions.width / coordinate.width;
  }

  return 1;
};

const getOriginCoordinate = (svgAttrs) =>
  _.reduce(svgAttrs, (result, value, key) => {
    if (key === 'viewBox') {
      const viewBoxValues = value.split(' ');

      return {
        ...result,
        viewBoxX: parseFloat(viewBoxValues[0], 10),
        viewBoxY: parseFloat(viewBoxValues[1], 10),
        viewBoxWidth: parseFloat(viewBoxValues[2], 10),
        viewBoxHeight: parseFloat(viewBoxValues[3], 10),
      };
    }

    return {
      ...result,
      [key]: parseFloat(value, 10),
    };
  }, {});

export const svgCoordinateSimplify = (coordinate) => ({
  width: coordinate.width || coordinate.viewBoxWidth,
  height: coordinate.height || coordinate.viewBoxHeight,
  scaleX: (coordinate.width && coordinate.viewBoxWidth)
    ? coordinate.width / coordinate.viewBoxWidth
    : 1,
  scaleY: (coordinate.height && coordinate.viewBoxHeight)
    ? coordinate.height / coordinate.viewBoxHeight
    : 1,
  transformX: coordinate.viewBoxX ? -coordinate.viewBoxX : 0,
  transformY: coordinate.viewBoxX ? -coordinate.viewBoxY : 0,
});

export const getScaledCoordinate = (coordinate, scale) => ({
  ...coordinate,
  width: coordinate.width * scale,
  height: coordinate.height * scale,
  scaleX: coordinate.scaleX * scale,
  scaleY: coordinate.scaleY * scale,
});

const scaleSvg = ($, scaleOptions) => {
  const $svg = $('svg');
  const svgAttrs = $svg.attr();
  const originCoordinate = getOriginCoordinate(svgAttrs);
  const fixedCoordinate = svgCoordinateSimplify(originCoordinate);

  const scale = getScale(fixedCoordinate, scaleOptions);

  const finalCoordinate = getScaledCoordinate(fixedCoordinate, scale);

  $svg.attr({
    width: finalCoordinate.width,
    height: finalCoordinate.height,
    viewBox: [
      0,
      0,
      finalCoordinate.width,
      finalCoordinate.height,
    ].join(' '),
  });

  scalePath($, finalCoordinate);
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
