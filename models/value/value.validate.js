'use strict'

import { Joi, celebrate } from 'celebrate'

const { body, params, query, headers } = {
    body: Joi.object().keys({
        id: Joi.string().required(),
        value: Joi.string().required()
    }),
    params: Joi.object({
        id: Joi.string().alphanum().optional()
    }).unknown(),
    query: {

    },
    headers: Joi.object({

    }).unknown()
}

export default {
    BODY: celebrate({ body }),
    PARAMS: celebrate({ params }),
    BODY_AND_PARAMS: celebrate({ body, params })
}