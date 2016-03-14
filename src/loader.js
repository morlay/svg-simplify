import _ from 'lodash';
import svgSimplify from './index';

function svgSimplifyLoader(text) {
  const callback = this.async();

  const options = _.merge({}, this.options.svgSimplify || {});

  svgSimplify(text, options)
    .then((res) => {
      callback(null, res);
    })
    .catch((err) => {
      callback(err);
    });
}

module.exports = svgSimplifyLoader;
