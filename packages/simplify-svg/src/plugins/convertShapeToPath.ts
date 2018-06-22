import * as _ from "lodash";

import { toPath } from "svg-points";
import { IPlugin } from "../utils";

const shapes = {
  circle: {
    cx: 0,
    cy: 0,
    r: 0,
  },
  ellipse: {
    cx: 0,
    cy: 0,
    rx: 0,
    ry: 0,
  },
  line: {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  },
  polygon: {
    points: "",
  },
  polyline: {
    points: "",
  },
  rect: {
    height: 0,
    rx: 0,
    ry: 0,
    width: 0,
    x: 0,
    y: 0,
  },
};

const pickAttrs = (attrs: any, defaults: any): any =>
  _.mapValues(
    defaults,
    (value: string, key: string) => (key === "points" ? attrs[key] : parseFloat(attrs[key]) || value),
  );

export const convertShapeToPath: IPlugin = ($): void => {
  const shapeTags = _.keys(shapes);

  _.forEach(shapeTags, (tag) => {
    const $elm = $(tag);
    const shapeDefaults = _.get(shapes, tag);
    const shapeAttrs = _.keys(shapeDefaults);

    $elm.each((index, element) => {
      const $element = $(element);
      const attrs = $element.attr();

      const pathString = toPath({
        type: tag,
        ...pickAttrs(attrs, shapeDefaults),
      } as any);

      const $path = $("<path />");

      _.forEach(_.omit(attrs, shapeAttrs), (value: string, attr: string) => {
        $path.attr(attr, value);
      });

      $path.attr("d", pathString);

      $element.replaceWith($path);
    });
  });
};
