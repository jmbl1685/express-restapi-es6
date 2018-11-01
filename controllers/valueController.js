'use strict'

import Value from '../models/value'

export const GetValue = (req, res) => {

  try {

    res.status(200).send({
      GET: '[GetValue] success'
    })

  } catch (err) {
    res.status(404).send({ err })
  }

}

export const AddValue = (req, res) => {

  try {

    res.status(200).send({
      POST: '[AddValue] success'
    })

  } catch (err) {
    res.status(404).send({ err })
  }

}


export const UpdateValue = (req, res) => {

  try {

    res.status(200).send({
      PUT: '[UpdateValue] success'
    })

  } catch (err) {
    res.status(404).send({ err })
  }

}

export const DeleteValue = (req, res) => {

  try {

    res.status(200).send({
      DELETE: '[UpdateValue] success'
    })

  } catch (err) {
    res.status(404).send({ err })
  }

}