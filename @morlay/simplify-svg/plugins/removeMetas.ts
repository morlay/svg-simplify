import { forEach } from "lodash";

import { IPlugin } from "../utils";

const descriptiveElements = ["title", "desc", "metadata"];

export const removeMetas: IPlugin = ($): void => {
  forEach(descriptiveElements, (tag) => {
    const $elm = $(tag);

    $elm.each((_, element) => {
      const $element = $(element);
      $element.remove();
    });
  });
};
