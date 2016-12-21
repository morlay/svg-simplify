import * as _ from "lodash";

import {
  IPlugin,
} from "../utils";

const descriptiveElements = [
  "title",
  "desc",
  "metadata",
];

export const removeMetas: IPlugin = ($): void => {
  _.forEach(descriptiveElements, (tag) => {
    const $elm = $(tag);

    $elm.each((index, element) => {
      const $element = $(element);
      $element.remove();
    });
  });
};
