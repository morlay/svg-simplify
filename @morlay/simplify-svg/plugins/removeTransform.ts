import SVGPath from "svgpath";
import { IPlugin } from "../utils";

export const removeTransform: IPlugin = ($): void => {
  const $elms = $("[transform]");

  if ($elms.length > 0) {
    const $element = $elms.first();
    const transformString = $element.attr("transform")!;
    const $paths = $element.find("path");

    $paths.each((_, pathElement) => {
      const $path = $(pathElement);
      const pathString = $path.attr("d");

      if (!pathString) {
        return;
      }

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
