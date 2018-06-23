'use strict'

import valueController from '../controllers/value.controller'

export default (app) => {

  app.post('/api/value', valueController.Post)
  app.get('/api/value', valueController.Get)
  app.get('/api/value/:id', valueController.GetByID)
  app.put('/api/value/:id', valueController.Put)
  app.delete('/api/value/:id', valueController.Delete)

}