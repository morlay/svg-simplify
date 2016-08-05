import svgPathify from './svgPathify';
import svgClean from './svgClean';
import svgScale from './svgScale';

const svgSimplify = (svgCode, options = {}) =>
  svgPathify(svgCode)
    .then((res) => svgClean(res, options.idPrefix))
    .then((res) => svgScale(res, options.scale));

export default svgSimplify;
