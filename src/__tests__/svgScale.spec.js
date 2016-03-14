import { expect } from 'chai';

import {
  svgCoordinateSimplify,
  getScaledCoordinate,
} from '../svgScale';

describe(__filename, () => {
  describe('#svgCoordinateSimpify', () => {
    it('should get transformed coordinate', () => {
      const originCoordinate = {
        width: 10,
        height: 10,
        viewBoxX: -100,
        viewBoxY: 100,
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      };

      expect(svgCoordinateSimplify(originCoordinate)).to.eql({
        width: 10,
        height: 10,
        scaleX: 0.5,
        scaleY: 0.5,
        transformX: 100,
        transformY: -100,
      });
    });

    it('should get transformed coordinate without viewport', () => {
      const originCoordinate = {
        viewBoxX: -100,
        viewBoxY: 100,
        viewBoxWidth: 20,
        viewBoxHeight: 20,
      };

      expect(svgCoordinateSimplify(originCoordinate)).to.eql({
        width: 20,
        height: 20,
        scaleX: 1,
        scaleY: 1,
        transformX: 100,
        transformY: -100,
      });
    });
  });

  describe('#getScaledCoordinate', () => {
    it('should get scaled coordinate without viewport', () => {
      const originCoordinate = {
        width: 20,
        height: 20,
        scaleX: 1,
        scaleY: 1,
        transformX: 100,
        transformY: -100,
      };

      expect(getScaledCoordinate(originCoordinate, 2)).to.eql({
        width: 40,
        height: 40,
        scaleX: 2,
        scaleY: 2,
        transformX: 100,
        transformY: -100,
      });
    });
  });
});
