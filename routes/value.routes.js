'use strict'

import valueController from '../controllers/value.controller'
import valueValidate from '../models/value/value.validate'
import { errors } from 'celebrate'

export default (app) => {

  app.post('/api/value', valueValidate.BODY, valueController.Post)
  app.get('/api/value/:id?', valueValidate.PARAMS, valueController.Get)
  app.put('/api/value/:id', valueValidate.BODY_AND_PARAMS, valueController.Put)
  app.delete('/api/value/:id', valueValidate.PARAMS, valueController.Delete)

  app.use(errors())

}

