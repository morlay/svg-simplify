import { isEmpty } from "lodash";

import { IPlugin } from "../utils";

export const removeEmpties: IPlugin = ($): void => {
  $("*")
    .filter((_, element) => isEmpty(element.attribs) && element.children.length === 0)
    .remove();
};
