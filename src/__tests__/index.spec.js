import { expect } from 'chai';
import getContent from './fixtures/getContent';

import svgSimplify from '../index';

describe('#svgSimplify', () => {
  it('should success transform svg', () => {
    const svgString = getContent('icon.svg');
    return svgSimplify(svgString, {
      scale: { width: 24 },
    })
      .then((codeString) => {
        expect(codeString).to.be.a('string');
      });
  });
});
