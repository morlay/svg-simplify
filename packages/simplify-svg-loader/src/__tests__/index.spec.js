import { expect } from 'chai';
import path from 'path';

import runWebpackSync from './helpers/runWebpackSync';

describe('#loader', () => {
  it('should run correct', () => {
    const targetFile = path.join(__dirname, 'fixtures/index.js');

    const result = runWebpackSync(targetFile, {
      module: {
        loaders: [{
          test: /\.svg$/,
          loaders: [
            'raw-loader',
            path.join(__dirname, '../../lib'),
          ],
        }],
      },
    });

    expect(result).to.be.a('string');
  });
});
