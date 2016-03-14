import _ from 'lodash';
import SVGO from 'svgo';

const svgClean = (svgString, svgoOptions = {}) => {
  const svgo = new SVGO(_.isEmpty(svgoOptions) ? {
    plugins: [
      { removeTitle: true },
      { convertShapeToPath: true },
      { removeDesc: { removeAny: true } },
      { removeStyleElement: true },
    ],
    js2svg: {
      pretty: true,
    },
  } : svgoOptions);

  return new Promise((resolve) => {
    svgo.optimize(svgString, (result) => {
      resolve(result.data);
    });
  });
};

export default svgClean;
