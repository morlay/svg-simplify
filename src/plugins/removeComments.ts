import { IPlugin } from "../utils";

export const removeComments: IPlugin = ($): void => {
  $("*")
    .contents()
    .filter((index, element) => element.type === "comment")
    .remove();
};
