import { expect } from 'chai';
import getContent from './helpers/getContent';

import svgSimplify from '../index';

describe('#svgSimplify', () => {
  it('should success transform svg', () => {
    const svgString = getContent('icon.svg');
    return svgSimplify(svgString, {
      scale: { width: 48 },
    })
      .then((codeString) => {
        console.log(codeString);
        expect(codeString).to.be.a('string');
      });
  });
});
