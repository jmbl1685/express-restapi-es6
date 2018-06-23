'use strict'

import { Joi, celebrate } from 'celebrate'

export default celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        value: Joi.string().required()
    }),
    params: {
        id: Joi.string().alphanum().required()
    },
    query: {

    },
    headers: Joi.object({

    }).unknown()
})