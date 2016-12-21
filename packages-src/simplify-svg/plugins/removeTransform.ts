import {
  IPlugin,
} from "../utils";

import * as SVGPath from "svgpath";

export const removeTransform: IPlugin = ($): void => {
  const $elms = $("[transform]");

  if ($elms.length > 0) {
    const $element = $elms.first();
    const transformString = $element.attr("transform");
    const $paths = $element.find("path");

    $paths.each((idx, pathElement) => {
      const $path = $(pathElement);
      const pathString = $path.attr("d");
      const svgPath = new SVGPath(pathString);

      const newPathString = svgPath
        .transform(transformString)
        .round(2)
        .toString()
        .replace(/ /g, ",");

      $path.attr("d", newPathString);
    });

    $element.removeAttr("transform");

    removeTransform($);
  }
};
