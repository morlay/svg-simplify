import { assign, filter, get, isEmpty, mapValues, omit, pick, reduce, startsWith, values } from "lodash";
import { Declaration, parse, Rule } from "postcss";

import { attrsGroups } from "../collections";

import { IPlugin } from "../utils";

const stylingProps = attrsGroups.presentation;

const pickDeclToStyleObject = (nodes: Declaration[]) => {
  const rules = filter(nodes, (node: Declaration) => node.type === "decl");
  return reduce(
    rules,
    (result, node) => ({
      ...result,
      [node.prop]: node.value,
    }),
    {},
  );
};

const appendStyleProps = (elm: CheerioElement, styles: any) => {
  const styleAttrs = pick(styles, stylingProps);
  const otherStyles = omit(styles, stylingProps);

  assign(elm, {
    attribs: {
      ...omit(elm.attribs, "style"),
      ...styleAttrs,
    },
  });

  if (!isEmpty(otherStyles)) {
    assign(elm.attribs, {
      style: values(mapValues(otherStyles, (value: string, key: string) => `${key}: ${value}`)).join(";"),
    });
  }
};

export const convertStyleToAttrs: IPlugin = ($): void => {
  $("style")
    .each((_, element) => {
      const styleString = $(element).contents();
      const root = parse(styleString);

      root.each((n) => {
        const node = n as Rule;

        const styles = pickDeclToStyleObject(node.nodes as Declaration[]);

        $(node.selector)
          .each((_, elem) => {
            appendStyleProps(elem, styles);
          })
          .removeAttr(startsWith(node.selector, ".") ? "class" : "");
      });
    })
    .remove();

  $("[style]").each((_, elem) => {
    const root = parse(get(elem.attribs, "style"));
    const styles = pickDeclToStyleObject(root.nodes as Declaration[]);

    appendStyleProps(elem, styles);
  });
};
