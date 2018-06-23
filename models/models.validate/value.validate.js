'use strict'

import { Joi } from 'celebrate'

export default {
    body: Joi.object().keys({
        id: Joi.string().required(),
        value: Joi.string().required()
    }),
    params: {
        id: Joi.string().alphanum().required()
    },
    query: {

    },
    headers: {

    }
}