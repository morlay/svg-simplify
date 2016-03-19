import _ from 'lodash';
import SVGO from 'svgo';

const defaultIdPrefix = () => _.uniqueId();

const svgClean = (svgString, idPrefix = defaultIdPrefix) => {
  const svgo = new SVGO({
    plugins: [
      { removeTitle: true },
      { convertShapeToPath: true },
      { removeDesc: { removeAny: true } },
      { removeStyleElement: true },
      { removeViewBox: true },
      {
        cleanupIDs: {
          remove: true,
          minify: true,
          prefix: idPrefix(),
        },
      },
    ],
    js2svg: {
      pretty: true,
    },
  });

  return new Promise((resolve) => {
    svgo.optimize(svgString, (result) => {
      resolve(result.data);
    });
  });
};

export default svgClean;
