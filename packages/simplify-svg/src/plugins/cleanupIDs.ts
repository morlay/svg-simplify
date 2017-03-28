import * as _ from "lodash"
import * as murmurhash from "node-murmurhash"

import { referencesProps } from "../collections"

import { IPlugin } from "../utils"

const regReferencesUrl = /\burl\(("|')?#(.+?)\1\)/

export const cleanupIDs: IPlugin = ($): void => {
  const referencesIDs = {}

  $("*")
    .each((index, element) => {
      const $elem = $(element)

      _.forEach(referencesProps, (referenceProp) => {
        if (_.has(element.attribs, referenceProp)) {
          const attrValue = $elem.attr(referenceProp)
          const match = attrValue.match(regReferencesUrl)

          if (match) {
            const key = match[2]
            _.set(
              referencesIDs,
              [key],
              _.has(referencesIDs, key) ? _.concat(_.get(referencesIDs, key) as any[], referenceProp) :
                [referenceProp])
          }
        }
      })
    })

  $("[id]")
    .each((idx, element) => {
      const $elem = $(element)
      const id = $elem.attr("id")

      if (_.has(referencesIDs, id)) {
        const hashedId = murmurhash($elem.html(), "seed")
        const refs = _.get(referencesIDs, id)
        $elem.attr("id", hashedId)

        _.forEach(refs, (refAttr) => {
          $(`[${refAttr}*='${id}']`)
            .each((i, elem) => {
              const attrValue = _.get(elem.attribs, refAttr) as string
              $(elem).attr(refAttr, attrValue.replace(id, hashedId))
            })
        })

        _.assign(referencesIDs, _.omit(referencesIDs, id))
      } else {
        $elem.removeAttr("id")
      }
    })

  if (!_.isEmpty(referencesIDs)) {
    _.forEach(referencesIDs, (refAttrs, id) => {
      _.forEach(refAttrs, (refAttr) => {
        $(`[${refAttr}*='${id}']`)
          .each((i, elem) => {
            $(elem).removeAttr(refAttr)
          })
      })
    })
  }
}
