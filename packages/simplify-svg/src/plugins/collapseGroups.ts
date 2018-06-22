import * as _ from "lodash";

import { IPlugin } from "../utils";

export const collapseGroups: IPlugin = ($): void => {
  const $elms = $("g").filter((i, elm) => _.isEmpty($(elm).attr("")));

  if ($elms.length > 0) {
    const $element = $elms.first();
    $element.replaceWith($element.contents());
    collapseGroups($);
  }
};
