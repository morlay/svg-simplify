import { isEmpty } from "lodash";

import { IPlugin } from "../utils";

const regValidPath = /M\s*(?:[-+]?(?:\d*\.\d+|\d+(?:\.|(?!\.)))([eE][-+]?\d+)?(?!\d)\s*,?\s*){2}\D*\d/i;

const isEmptyChildren = ($elem: Cheerio) => $elem.children().length === 0;

const isHidden = ($elem: Cheerio): boolean =>
  $elem.attr("display") === "none" ||
  $elem.attr("opacity") === "0" ||
  ($elem.is("circle") && isEmptyChildren($elem) && $elem.attr("r") === "0") ||
  ($elem.is("ellipse") && isEmptyChildren($elem) && ($elem.attr("rx") === "0" || $elem.attr("ry") === "0")) ||
  ($elem.is("rect") && isEmptyChildren($elem) && ($elem.attr("width") === "0" || $elem.attr("height") === "0")) ||
  ($elem.is("pattern") && ($elem.attr("width") === "0" || $elem.attr("height") === "0")) ||
  ($elem.is("image") && ($elem.attr("width") === "0" || $elem.attr("height") === "0")) ||
  ($elem.is("path") && (isEmpty($elem.attr("d")) || !regValidPath.test($elem.attr("d")!))) ||
  ($elem.is("polyline") && isEmpty($elem.attr("points"))) ||
  ($elem.is("polygon") && isEmpty($elem.attr("points")));

export const removeHiddenElements: IPlugin = ($): void => {
  $("*")
    .filter((_, element) => isHidden($(element)))
    .remove();
};
