'use strict'

import valueController from '../controllers/value.controller'
import valueValidate from '../models/models.validate/value.validate'
import { errors } from 'celebrate'

export default (app) => {

  app.post('/api/value', valueValidate.BODY, valueController.Post)
  app.get('/api/value', valueController.Get)
  app.get('/api/value/:id', valueValidate.PARAMS, valueController.GetByID)
  app.put('/api/value/:id', valueValidate.BODY_AND_PARAMS, valueController.Put)
  app.delete('/api/value/:id', valueValidate.PARAMS, valueController.Delete)

  app.use(errors())

}

