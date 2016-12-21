import * as _ from "lodash";

import {
  IPlugin,
} from "../utils";

export const removeEmpties: IPlugin = ($): void => {
  $("*")
    .filter((idx, element) => _.isEmpty(element.attribs) && element.children.length === 0)
    .remove();
};
