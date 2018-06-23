'use strict'

import valueController from '../controllers/value.controller'
import valueValidate from '../models/models.validate/value.validate'
import { celebrate, errors } from 'celebrate'

export default (app) => {

  app.post('/api/value',
    celebrate({ body: valueValidate.body }),
    valueController.Post)

  app.get('/api/value', valueController.Get)

  app.get('/api/value/:id',
    celebrate({ params: valueValidate.params }),
    valueController.GetByID)

  app.put('/api/value/:id',
    celebrate({ body: valueValidate.body, params: valueValidate.params }),
    valueController.Put)

  app.delete('/api/value/:id',
    celebrate({ params: valueValidate.params }),
    valueController.Delete)

  app.use(errors())

}