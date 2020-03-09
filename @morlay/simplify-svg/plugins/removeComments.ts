import { IPlugin } from "../utils";

export const removeComments: IPlugin = ($): void => {
  $("*")
    .contents()
    .filter((_, element) => element.type === "comment")
    .remove();
};
