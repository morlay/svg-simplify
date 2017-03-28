import * as _ from "lodash"

import {
  Declaration,
  parse,
  Rule,
} from "postcss"

import { attrsGroups } from "../collections"

import { IPlugin } from "../utils"

const stylingProps = attrsGroups.presentation

const pickDeclToStyleObject = (nodes: Declaration[]) => {
  const rules = _.filter(nodes, (node: Declaration) => node.type === "decl")
  return _.reduce(rules, (result, node) => ({
    ...result,
    [node.prop]: node.value,
  }), {})
}

const appendStyleProps = (elm: CheerioElement, styles: any) => {
  const styleAttrs = _.pick(styles, stylingProps)
  const otherStyles = _.omit(styles, stylingProps)

  _.assign(elm, {
    attribs: {
      ..._.omit(elm.attribs, "style"),
      ...styleAttrs,
    },
  })

  if (!_.isEmpty(otherStyles)) {
    _.assign(elm.attribs, {
      style: _.values(_.mapValues(otherStyles, (value: string, key: string) => `${key}: ${value}`)).join(";"),
    })
  }
}

export const convertStyleToAttrs: IPlugin = ($): void => {
  $("style")
    .each((index, element) => {
      const styleString = $(element).text()
      const root = parse(styleString)

      root.each((node: Rule) => {
        const styles = pickDeclToStyleObject(node.nodes as Declaration[])

        $(node.selector)
          .each((idx, elem) => {
            appendStyleProps(elem, styles)
          })
          .removeAttr(_.startsWith(node.selector, ".") ? "class" : "")
      })
    })
    .remove()

  $("[style]")
    .each((idx, elem) => {
      const root = parse(_.get(elem.attribs, "style"))
      const styles = pickDeclToStyleObject(root.nodes as Declaration[])

      appendStyleProps(elem, styles)
    })
}
