'use strict'

import valueController from '../controllers/value.controller'
import valueValidate from '../models/models.validate/value.validate'
import { errors } from 'celebrate'

export default (app) => {

  app.post('/api/value', valueValidate, valueController.Post)
  app.get('/api/value', valueController.Get)
  app.get('/api/value/:id', valueValidate, valueController.GetByID)
  app.put('/api/value/:id', valueValidate, valueController.Put)
  app.delete('/api/value/:id', valueValidate, valueController.Delete)

  app.use(errors())

}