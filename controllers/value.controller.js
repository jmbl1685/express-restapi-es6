'use strict'

import Value from '../models/value/value.model'
import config from '../config/config'

export default {

  Get: (req, res) => {

    try {

      const { id } = req.params

      if (id == null) {
        return res.status(200).send({ GET: 'Success!' })
      }

      res.status(200).send({ GET: id })

    } catch (err) {
      console.error(err)
    }

  },

  Post: (req, res) => {

    try {

      const { id, value } = req.body
      const body = new Value(id, value)
      res.status(200).send({ 'POST': body })

    } catch (err) {
      console.error(err)
    }

  },

  Put: (req, res) => {

    try {

      const id = req.params.id
      res.status(200).send({ PUT: id })

    } catch (err) {
      console.error(err)
    }

  },

  Delete: (req, res) => {

    try {

      const id = req.params.id
      res.status(200).send({ DELETE: id })

    } catch (err) {
      console.error(err)
    }

  }

}





