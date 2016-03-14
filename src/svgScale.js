import _ from 'lodash';
import cheerio from 'cheerio';
import svgpath from 'svgpath';

const scalePath = ($, scale, transform) => {
  $('path').each((index, element) => {
    const $path = $(element);
    const path = $path.attr('d');

    if (path) {
      const newPath = svgpath(path)
        .translate(transform.x, transform.y)
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
  let scale = 1;
  let transform = {
    x: 0,
    y: 0,
  };

  if (svgSizes.viewBox) {
    const viewBoxValueList = svgSizes.viewBox.split(' ');

    scale = getFinalScale({
      width: viewBoxValueList[2],
      height: viewBoxValueList[3],
    }, scaleOptions);

    transform = {
      x: -parseFloat(viewBoxValueList[0], 10),
      y: -parseFloat(viewBoxValueList[1], 11),
    };

    $svg.attr({
      width: viewBoxValueList[2],
      height: viewBoxValueList[3],
    });
  } else {
    scale = getFinalScale(svgSizes, scaleOptions);

    $svg.attr({
      width: svgSizes.width * scale,
      height: svgSizes.height * scale,
    });
  }

  $svg.removeAttr('viewBox');

  scalePath($, scale, transform);
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
