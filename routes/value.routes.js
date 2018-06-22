'use strict'

import valueController from '../controllers/value.controller'

export default (app) => {

  app.post('/value', valueController.Post)
  app.get('/value', valueController.Get)
  app.get('/value/:id', valueController.GetByID)
  app.put('/value/:id', valueController.Put)
  app.delete('/value/:id', valueController.Delete)

}