'use strict'

import Value from '../models/value.model'
import config from '../config/config'
import winston from '../config/log'

const valueController = {}

valueController.Get = async (req, res) => {
  try {

    await res.status(200).send({ data: config.dataresponse.success })

  } catch (err) {
    console.log(err)
    winston.error('[valueController.Get]', err)
  }
}

valueController.GetByID = async (req, res) => {
  try {
    const id = req.params.id
    if (id === null | undefined)
      await res.status(404).send({ data: 'DATA NOT FOUND' })
    else
      await res.status(200).send({ data: `DATA ${id}` })

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

    if (id === null | undefined)
      await res.status(404).send({ data: 'DATA NOT UPDATED' })
    else
      await res.status(200).send({ data: `DATA ${id}` })
  } catch (err) {
    winston.error('[valueController.Put]', err)
  }

}

valueController.Delete = async (req, res) => {
  try {
    const id = req.params.id

    if (id === null | undefined)
      await res.status(404).send({ data: 'DATA NOT DELETED' })
    else
      await res.status(200).send({ data: `DATA ${id}` })
  } catch (err) {
    winston.error('[valueController.Delete]', err)
  }
}

export default valueController