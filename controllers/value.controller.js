'use strict'

import Value from '../models/value.model'
import config from '../config/config'
import winston from '../config/log'

const valueController = {}

valueController.Get = async (req, res) => {
  try {

    await res.status(200).send({ data: config.message.success })

  } catch (err) {
    winston.error('[valueController.Get]', err)
  }
}

valueController.GetByID = async (req, res) => {
  try {

    const id = req.params.id
    await res.status(200).send({ data: `GETBYID OK - ${id}` })

  } catch (err) {
    winston.error('[valueController.GetByID]', err)
  }
}

valueController.Post = async (req, res) => {
  try {

    const { id, value } = req.body
    const body = new Value(id, value)
    await res.status(200).send({ DATA: body })

  } catch (err) {
    winston.error('[valueController.Post]', err)
  }
}

valueController.Put = async (req, res) => {
  try {

    const id = req.params.id
    await res.status(200).send({ data: `PUT [OK] - ${id}` })

  } catch (err) {
    winston.error('[valueController.Put]', err)
  }

}

valueController.Delete = async (req, res) => {
  try {

    const id = req.params.id
    await res.status(200).send({ data: `DELETE [OK] - ${id}` })

  } catch (err) {
    winston.error('[valueController.Delete]', err)
  }
}

export default valueController