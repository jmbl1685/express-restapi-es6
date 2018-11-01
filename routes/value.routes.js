'use strict'

import {
  AddValue,
  GetValue,
  UpdateValue,
  DeleteValue
} from '../controllers/valueController'

export default (app) => {

  app.post('/api/value', AddValue)
  app.get('/api/value/:id?', GetValue)
  app.put('/api/value/:id', UpdateValue)
  app.delete('/api/value/:id', DeleteValue)

}

